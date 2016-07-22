'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const router = require('./router/index');

const routerEvents = require('./router/events')


//useMiddleware should only EVER be called once
//if passing multiple, name multiple and attach them inside .useMiddleware
router.useMiddleware(require('./router/dom').transition);



$(()=>{
  router.start();
  routerEvents.addHandlers();
});
