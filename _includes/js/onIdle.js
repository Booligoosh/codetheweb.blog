/*window.onload = function() {*/
  if (window.requestIdleCallback) {
    /*{% comment %}
    Only run function once the browser is idle
    {% endcomment %}*/

    /*{% comment %}
    console.log("ABOUT TO REQUEST IDLE CALLBACK");
    {% endcomment %}*/
    window.requestIdleCallback(onIdle);
  } else {
    /*{% comment %}
    Run function immediately if requestIdleCallback is not supported
    {% endcomment %}*/
    onIdle();
  }

  function onIdle() {
    /*{% comment %}
    Don't load GA or CodeFund during Lighthouse reports
    because CodeFund will respond with a 404 and Google
    Analytics will be blocked.
    {% endcomment %}*/
    const isLighthouse = navigator.userAgent.includes('Chrome-Lighthouse');
    if (!isLighthouse) {
      {% if page.layout == 'post' %}
      loadCodeFund();
      {% endif %}
      {% if jekyll.environment == "production" %}
      loadGoogleAnalytics();
      {% endif %}
    }
    /*{% comment %}
    loadCrisp();
    {% endcomment %}*/
  }

  /*{% comment %}
  function loadCrisp() {
    console.log("LOADING CRISP");
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "c2a98cd5-6c04-4a59-8ff6-ab04f67a3e7d";
    (function() {
      d = document;
      s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      s.defer = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }
  {% endcomment %}*/

  function loadGoogleAnalytics() {
    /*{% comment %}
    console.log('LOADING GOOGLE ANALYTICS');
    {% endcomment %}*/

    /*{% comment %}
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      dataLayer.push(arguments);
    };
    gtag("js", new Date());

    gtag("config", "UA-103555680-4");

    d = document;
    s = d.createElement("script");
    s.src = "https://www.googletagmanager.com/gtag/js?id=UA-103555680-4";
    s.async = 1;
    s.defer = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
    {% endcomment %}*/
    
    (function(e,t,n,i,s,a,c){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)}
    ;a=t.createElement(i);c=t.getElementsByTagName(i)[0];a.async=true;a.src=s
    ;c.parentNode.insertBefore(a,c)
    })(window,document,"galite","script","/assets/js/ga-lite-2.0.5.min.js");

    galite('create', 'UA-103555680-4', 'auto');
    galite('send', 'pageview');

    /*{% comment %}
    Don't use += as that forces re-fetching of other stuff in head
    // document.head.innerHTML += '<link rel="preconnect" href="https://www.google-analytics.com/" crossorigin>';
    {% endcomment %}*/
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://www.google-analytics.com/";
    link.crossOrigin = "";
    document.head.appendChild(link);
  }

  function loadCodeFund() {
    /*{% comment %}
    console.log("LOADING CODEFUND");
    {% endcomment %}*/
    
    /*{% comment %}
    console.log("LOADING CODEFUND");
    var d = document,
      s = d.createElement("script");
    s.src = "https://app.codefund.io/properties/608/funder.js";
    s.async = 1;
    s.defer = 1;
    (d.head || d.body).appendChild(s);
    {% endcomment %}*/

    /*{% comment %}
    Preconnect to Codefund's various domains */ /*
    document.head.innerHTML +=
      '<link rel="preconnect" href="https://cdn2.codefund.app/" crossorigin><link rel="preconnect" href="https://cdn2.codefund.io/" crossorigin>';
    {% endcomment %}*/

    /*{% comment %}
    Based on https://codefund.docs.apiary.io/#reference/0/advertisement-html
    This method required less JS and fewer domain connections
    {% endcomment %}*/
    fetch("https://api.codefund.app/properties/608/funder.html?$third-party")
      .then(r => r.text())
      .then(
        html =>
          (document.getElementById("codefund").innerHTML = html
            /* Remove stylesheet link to save network usage */
            .replace(/<link .*?rel="stylesheet".*?>/g, ""))
      )
      .catch(
        () =>
          (document.getElementById("codefund").innerHTML =
            '<div class="codefund-placeholder" style="text-align: left">Please consider disabling your ad blocker to support this site.<br><br>This rectangle is the only place on the page where ads are shown.</div>')
      );

    /*{% comment %}
    Don't use += as that forces re-fetching of other stuff in head
    // document.head.innerHTML += '<link rel="preconnect" href="https://cdn2.codefund.io/" crossorigin>';
    {% endcomment %}*/
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://cdn2.codefund.io/";
    link.crossOrigin = "";
    document.head.appendChild(link);
  }
/*};*/