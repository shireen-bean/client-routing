'use strict';

const paths = [
  '#about',
  '#pretty',
  '#witty',
  '#kitty'
];

const hideAllContent = () => {
  paths.forEach((path)=>{
    $(`${path}`).addClass('hidden');
  })
};

const showContent = (path) => {
  $(`${path}`).removeClass('hidden');
};

const registerPaths = () => {
  paths.forEach((path)=>{
    $(`a[href="${path}"]`).on('click', (event)=>{
      event.preventDefault();

      hideAllContent();
      showContent(path);

    });
  })
}



$(()=>{
  registerPaths();
})


module.exports = true;
