const Koa = require('koa');
const Router = require('@koa/router');
const render = require('koa-ejs');
const path = require('path');
const serve = require('koa-static');
const KoaBodyParser = require('koa-bodyparser');
const axiosInstance = require('./utils/axiosInstance');
const session = require('koa-session');
const qs = require('qs');

const app = new Koa();
const router = new Router();

app.keys = ['secret'];
app.use(KoaBodyParser());
app.use(session({
    key: 'demo.sess',
    maxAge: 1000 * 60 * 30, // 30 minutes
    rolling: true,
    secure: false,
    autoCommit: true,
}, app));

app.use(router.routes()).use(router.allowedMethods());

app.use(serve('.'));
app.use(serve('../assets'));
app.use(serve('../views'));

let title = 'test';

setTimeout(async () => {
    title = '123456';
}, 2000);

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
});

router.get('/', async ctx => {
    await ctx.render('index', {
        title
    });
});

router.post('/gettocken', KoaBodyParser(), async ctx => {
    const { data : {access_token} }  = await axiosInstance(ctx)
    .post(`https://dev.ipay.ge/opay/api/v1/oauth2/token`, qs.stringify(ctx.request.body), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    ctx.session.access_token = access_token;
    ctx.body = {access_token}
});

router.post('/geturl', KoaBodyParser(), async ctx => { 
    const { data } = await axiosInstance(ctx)
    .post(`https://dev.ipay.ge/opay/api/v1/checkout/orders`, ctx.request.body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    ctx.body = data;
});




app.listen(4000, () => { console.log(`server running on port 4000`); });

