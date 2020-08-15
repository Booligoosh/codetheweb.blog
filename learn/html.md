---
layout: learn
language: HTML
title: Learn HTML
purpose: building websites
---
<!-- I've written many tutorials on HTML. As I want to make them easy to learn from, I've complied a list of which posts to check out in what order if you want to learn HTML. If you want to know more about Code The Web, check out the [welcome post][welcome].

<section class="freebie-hero promo">
    {% include guide-to-learning-html-freebie-hero.html %}
</section>

# Prerequisites
These are optional but recommended. In tutorials, I might build on what's covered here. I'd also recommed the set-up tutorial so you are writing and running your code in the same way as I am. Or, you can just **[skip to the tutorials](#tutorials)**.
## How to learn a programming language
[How to learn web development][p1]

## Background knowledge
[How the internet works][p2]

## Set-up
[Practice web development on your computer][p3]

# Tutorials
I make a new tutorial at least once a week. Over time, this list will grow. Once you have finished learning HTML, you can move on to [CSS][css]. -->

<ol class="learn-post-cards article-list">
{% assign posts = site.posts | reverse %}
{% assign listnum = 0 %}
{% for url in site.learn.html.tutorials %}
{% for post in posts %}
{% if post.url == url %}
{% assign listnum = listnum | plus: 1 %}
{% include learn-article-item.html %}
{% endif %}
{% endfor %}
{% endfor %}
</ol>
<span class="invisible-text">   ‍   </span>

[welcome]: /welcome/
[p1]: /how-to-learn-web-development/
[p2]: /how-the-internet-works/
[p3]: /web-development-on-your-computer/

[css]: /learn/css/

[newsletter]: {{site.newsletter}}