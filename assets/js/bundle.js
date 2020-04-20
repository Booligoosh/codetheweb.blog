---
---
  
// Wrap each file in an anonymous function so
// they don't pollute each others' scopes

{% comment %}
(function() {
  {% include js/prism.js %}
})();
{% endcomment %}

{% comment %}
(function() {
  {% include js/loading-attribute-polyfill.js %}
})();
{% endcomment %}

(function() {
  {% include js/vanilla-lazyload-15.1.1.min.js %}
})();

var imageLazyLoadInstance = new LazyLoad({
  elements_selector: "img.loading-lazy",
  use_native: true
});

var videoLazyLoadInstance = new LazyLoad({
  elements_selector: "video.loading-lazy"
});

(function() {
  {% include js/index.js %}
})();