---
---
  
// Wrap each file in an anonymous function so
// they don't pollute each others' scopes

(function() {
  {% include js/prism.js %}
})();

(function() {
  {% include js/loading-attribute-polyfill.js %}
})();

(function() {
  {% include js/index.js %}
})();