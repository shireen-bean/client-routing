'use strict';


const index = () => {
  return new Promise((resolve, reject)=>{
    $.ajax({
      url: null,
      method: null,
      data: null,
      headers: null,

      success: (data) => {
        resolve(data);
      },

      error: (error) => {
        reject(error);
      }

    })
  })
}

const middleware = () => {
  return (toState, fromState, done) => {
    //sue to state to check if the routing segmet

    //then fire appropriate Promisified AJAX called
    // then call done in a .then(done)
  }
}
