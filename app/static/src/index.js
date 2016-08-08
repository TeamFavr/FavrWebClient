module.exports = function () {
  var LandingCarousel = require("./components/LandingCarousel.vue");
  var FeatureVue = require("./components/Feature.vue");
  var Vue = require("Vue");
  var jq = require("jquery");

  window.$ = jq;
  window.jQuery = jq;

  $(document).ready(function () {
    new Vue({
      el: 'body',
      components: {
        "landing-carousel": LandingCarousel,
        "feature": FeatureVue
      }
    });
  });
}
