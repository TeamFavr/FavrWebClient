module.exports = function () {
  var App = require("./components/App.vue")
  var Vue = require("Vue");
  var jq = require("jquery");

  window.$ = jq;
  window.jQuery = jq;

  $(document).ready(function () {
    new Vue({
      el: 'body',
      components: {
        app: App
      }
    });
  });
}
