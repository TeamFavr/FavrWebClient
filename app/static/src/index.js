module.exports = function () {
  var App = require("./components/App.vue")
  var Vue = require("Vue");
  var $ = require("jquery");
  window.$ = $;
  window.jQuery = $;

  $(document).ready(function () {
    new Vue({
      el: 'body',
      components: {
        app: App
      }
    });
  });
}
