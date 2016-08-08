module.exports = function () {
  var App = require("./components/App.vue")
  var Vue = require("Vue");
  var $ = require("jquery");

  window.$ = $;
  window.jQuery = $;

  //flat_ui.js not working
  //var flat_ui = require("./flat-ui")
  //var flui_vid = require("./video")

  $(document).ready(function () {
    new Vue({
      el: 'body',
      components: {
        app: App
      }
    });
  });
}
