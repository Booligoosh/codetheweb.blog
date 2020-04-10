if (window.requestIdleCallback) {
  /* Only load Crisp once the browser is idle */
  console.log("ABOUT TO REQUEST IDLE CALLBACK");
  window.requestIdleCallback(loadCrisp);
} else {
  /* Load Crisp immediately if requestIdleCallback is not supported */
  loadCrisp();
}

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
