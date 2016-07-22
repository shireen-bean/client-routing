'use strict';

const Router5 = require('router5').default;
const loggerPlugin = require('router5').loggerPlugin();
const historyPlugin = require('router5-history').default();

const routes = [
  { name: 'index', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'pretty', path: '/pretty' },
  { name: 'witty', path: '/witty' },
  { name: 'kitty', path: '/kitty' }
];

const options = {
  useHash: true,
  hashPrefix: '!',
  defaultRoute: '/'
};

// FROM DOCUMENTATION
// var router = new Router5([], {
//         useHash: true,
//         hashPrefix: '!',
//         defaultRoute: 'home',
//         defaultParams: {},
//         base: '',
//         trailingSlash: false,
//         autoCleanUp: true,
//         strictQueryParams: true
//     })

const router = new Router5(routes, options)
    .usePlugin(loggerPlugin)
    .usePlugin(historyPlugin)
// const paths = [
//   '#about',
//   '#pretty',
//   '#witty',
//   '#kitty'
// ];
//
// const hideAllContent = () => {
//   paths.forEach((path)=>{
//     $(`${path}`).addClass('hidden');
//   })
// };
//
// const showContent = (path) => {
//   $(`${path}`).removeClass('hidden');
// };
//
// const registerPaths = () => {
//   paths.forEach((path)=>{
//     $(`a[href="${path}"]`).on('click', (event)=>{
//       event.preventDefault();
//
//       hideAllContent();
//       showContent(path);
//
//     });
//   })
// }
//
//
//
// $(()=>{
//   registerPaths();
// })


module.exports = router;
