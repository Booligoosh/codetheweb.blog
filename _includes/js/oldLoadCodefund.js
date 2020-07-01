/*{% comment %}
Put here for the moment so it's not in the site code but still exists somewhere
{% endcomment %}*/

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
