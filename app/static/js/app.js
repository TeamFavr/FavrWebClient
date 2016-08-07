var Vue = require('Vue');
var jQuery = require('jquery');
window.$ = jQuery;

$(document).ready(function () {
  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!'
    }
  })
});
