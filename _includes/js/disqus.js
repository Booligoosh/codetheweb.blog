/* https://usefulangle.com/post/251/disqus-comments-improve-page-load-speed */
var disqus_observer = new IntersectionObserver(
  function(entries) {
    /*
    comments section reached
    start loading Disqus now
    */
    if (entries[0].isIntersecting) {
      /*
      var disqus_config = function () {
        this.page.url = PAGE_URL;
        this.page.identifier = PAGE_IDENTIFIER;
      };
      */
      (function() {
        var d = document,
          s = d.createElement("script");
        s.src = "{{ site.disqus_url }}";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
      })();

      /* once executed, stop observing */
      disqus_observer.disconnect();
    }
  },
  { threshold: [0] }
);
disqus_observer.observe(document.querySelector("#disqus_thread"));