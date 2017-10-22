var emailElems = document.getElementsByClassName('email');
for (var i = 0; i < emailElems.length; i++) {
    var emailElem = emailElems[i];
    var before = window.getComputedStyle(emailElem, ':before').content.replace(/"/g,'');
    var after = window.getComputedStyle(emailElem, ':after').content.replace(/"/g,'');
    var content = before + after;
    emailElem.innerHTML = '<a href="mailto:' + content + '">' + content + '</a>';
    emailElem.className = emailElem.className + ' no-before no-after';
    console.log(emailElem, content);
}