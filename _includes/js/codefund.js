if (window.requestIdleCallback) {
  /* Only load Codefund once the browser is idle */
  console.log("ABOUT TO REQUEST IDLE CALLBACK");
  window.requestIdleCallback(loadCodeFund);
} else {
  /* Load ABOUT immediately if requestIdleCallback is not supported */
  loadCodeFund();
}
function loadCodeFund() {
  console.log("LOADING CODEFUND");
  var d = document,
    s = d.createElement("script");
  s.src = "https://app.codefund.io/properties/608/funder.js";
  s.async = 1;
  s.defer = 1;
  (d.head || d.body).appendChild(s);

  /* Preconnect to Codefund's various domains */
  document.head.innerHTML +=
    '<link rel="preconnect" href="https://cdn2.codefund.app/" crossorigin><link rel="preconnect" href="https://cdn2.codefund.io/" crossorigin>';
}
