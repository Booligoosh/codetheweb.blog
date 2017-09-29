// make all links open in new tab
var links = document.getElementsByClassName('markdown-body')[0].getElementsByTagName('a');
for (var i = 0; i < links.length; i++){
    var parser = document.createElement('a');
    parser.href = links[i].href;
    if (parser.origin != "{{site.url}}" || (parser.origin == "{{site.url}}" && parser.pathname == "/out")){
        links[i].target="blank";
    }
}