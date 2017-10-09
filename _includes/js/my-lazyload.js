{% include js/lazyload.js %}

let images = document.querySelectorAll(".article-list .article-item .post-cover img, .markdown-body img, img");
lazyload(images);