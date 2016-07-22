'use strict';

//middleware functions MUST return a function
const transition = () => {
  return (toState, fromState, done) => {
    if(fromState) {
      $(`#${fromState.name}`).addClass('hidden');
    }

    $(`#${toState.name}`).removeClass('hidden');
    done();

    }
  }

module.exports = {
  transition,
};
