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
    {% if page.layout == 'post' %}
    loadCodeFund();
    {% endif %}
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
    console.log('LOADING GOOGLE ANALYTICS');
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
    
    (function(e,t,n,i,s,a,c){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)}
    ;a=t.createElement(i);c=t.getElementsByTagName(i)[0];a.async=true;a.src=s
    ;c.parentNode.insertBefore(a,c)
    })(window,document,"galite","script","/assets/js/ga-lite-2.0.5.min.js");

    galite('create', 'UA-103555680-4', 'auto');
    galite('send', 'pageview');

    document.head.innerHTML += '<link rel="preconnect" href="https://www.google-analytics.com/" crossorigin>';
  }

  function loadCodeFund() {
    console.log("LOADING CODEFUND");
    /*console.log("LOADING CODEFUND");
    var d = document,
      s = d.createElement("script");
    s.src = "https://app.codefund.io/properties/608/funder.js";
    s.async = 1;
    s.defer = 1;
    (d.head || d.body).appendChild(s);*/

    /* Preconnect to Codefund's various domains */ /*
    document.head.innerHTML +=
      '<link rel="preconnect" href="https://cdn2.codefund.app/" crossorigin><link rel="preconnect" href="https://cdn2.codefund.io/" crossorigin>';
    */

    /* Based on https://codefund.docs.apiary.io/#reference/0/advertisement-html
      This method required less JS and fewer domain connections */
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

    document.head.innerHTML +=
      '<link rel="preconnect" href="https://cdn2.codefund.io/" crossorigin>';
  }
/*};*/