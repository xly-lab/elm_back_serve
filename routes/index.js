const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});

router.get('/string', async (ctx, next) => {

  ctx.body = 'koa2 string'
});

router.get('/address',async ctx=>{
  // console.log(ctx.request.body);
  console.log('header:',ctx.header);
  const result  =  await getSqlResult('select * from address');
  console.log(result);
  if(!result){
    ctx.body = {
      code:1,
      data:result
    }
  }
  ctx.body = {
    code:0,
    data:result
  }

});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
});

module.exports = router;
