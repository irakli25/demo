const { generateFormat, getLogLevel } = require('koa2-winston');
const { format } = require('util');
const onFinished = require('on-finished');
const winston = require('winston');
const {
  createLogger,
  format: { combine: wfcombine, printf: wfprintf }
} = winston;


const transports = [];
const formats = [
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
  winston.format.json()
];
// if (config.dev) {
//   formats.push(winston.format.prettyPrint({ colorize: true }));
// }
const winstonFormat = winston.format.combine(...formats);
transports.push(new winston.transports.Console({ format: winstonFormat }));

const winstonLogger = createLogger({
  transports,
  exitOnError: false
});

const formatConfig = {
  transports: transports,
  resSelect: ['body'],
  reqUnselect: ['header'],
  resUnselect: ['header']
};

const loggerMiddleware = () => {
  const stringifyFormat = generateFormat(formatConfig);
  const winstonLoggerInstance = createLogger({
    transports,
    format: wfcombine(wfprintf(stringifyFormat))
  });
  const onResponseFinished = (ctx, info) => {
    if (!ctx.response.is('json')) {
      return;
    }
    info.res = ctx.response;
    info.duration = Date.now() - info.started_at;

    info.level = getLogLevel(info.res.status);
    // @ts-ignore
    winstonLoggerInstance.log(info);
  };
  return async (ctx, next) => {
    const info = { req: ctx.request, started_at: Date.now() };
    info.message = format('HTTP %s %s', info.req.method, info.req.url);

    let error;
    try {
      await next();
    } catch (e) {
      // catch and throw it later
      error = e;
    } finally {
      onFinished(ctx.response, onResponseFinished.bind(null, ctx, info));
    }

    if (error) {
      throw error;
    }
  };
};

module.exports.createAppWrapper = app => {
    app.use(loggerMiddleware());

  app.use(async(ctx, next) => {
    ctx.logger = winstonLogger;
    return next();
  });
};

module.exports.logger = winstonLogger;
