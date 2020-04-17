/*window.onload = function() {*/
  const TIMEOUT_DURATION = 500;

  if (window.requestIdleCallback) {
    /* Only run function once the browser is idle */
    console.log("ABOUT TO REQUEST IDLE CALLBACK");
    window.requestIdleCallback(() => setTimeout(onIdle, TIMEOUT_DURATION));
  } else {
    /* Run function immediately if requestIdleCallback is not supported */
    setTimeout(onIdle, TIMEOUT_DURATION);
  }

  function onIdle() {
    loadCrisp();
    {% if jekyll.environment == "production" %}
    loadGoogleAnalytics();
    {% endif %}
  }

  function loadCrisp() {
    /*
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
    */
  }

  function loadGoogleAnalytics() {
    /*
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
    */
    
    document.head.innerHTML += '<link rel="preconnect" href="https://www.google-analytics.com/" crossorigin>';

    (function(e,t,n,i,s,a,c){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)}
    ;a=t.createElement(i);c=t.getElementsByTagName(i)[0];a.async=true;a.src=s
    ;c.parentNode.insertBefore(a,c)
    })(window,document,"galite","script","/assets/js/ga-lite-2.0.5.min.js");

    galite('create', 'UA-103555680-4', 'auto');
    galite('send', 'pageview');
  }
/*};*/