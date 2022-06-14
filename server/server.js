const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const serve = require('koa-static');
const KoaBodyParser = require('koa-bodyparser');
const axiosInstance = require('./utils/axiosInstance');
const qs = require('qs');
const send = require('koa-send');
const path = require('path');
const app = new Koa();
const router = new Router();
app.use(cors());
app.keys = ['secret'];
app.use(KoaBodyParser());

router.post('/api/gettoken', KoaBodyParser(), async ctx => {
    const { data : {access_token} }  = await axiosInstance(ctx)
    .post(`https://dev.ipay.ge/opay/api/v1/oauth2/token`, qs.stringify(ctx.request.body), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    ctx.session.access_token = access_token;
    ctx.body = {access_token}
});

router.post('/api/geturl', KoaBodyParser(), async ctx => { 
    const { data } = await axiosInstance(ctx)
    .post(`https://apim-test.k8s.bog.ge/pa-payment-services/v1/ecommerce/orders`, ctx.request.body, {
        headers: {
            'Content-Type': 'application/json',
            'accept-language': 'ka'
        }
    });
    ctx.body = data;
});

app.use(router.routes()).use(router.allowedMethods());

app.use(serve(path.join(__dirname, 'build')));
app.use(async ctx => {
    await send(ctx, 'build/index.html');
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => { console.log(`server running on port ${PORT}`); });

