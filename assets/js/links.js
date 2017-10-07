---
---
// make all links open in new tab
var links = document.getElementsByClassName('markdown-body')[0].getElementsByTagName('a');
for (var i = 0; i < links.length; i++){
    var parser = document.createElement('a');
    parser.href = links[i].href;
    if ((parser.origin != window.location.origin || (parser.origin == window.location.origin && parser.pathname == "/out") || window.location.pathname.includes('/learn/') ) && links[i].target === ""){
        links[i].target="_blank";
    }
}