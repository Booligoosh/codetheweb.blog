---
layout: learn
language: JavaScript
title: Learn JavaScript
purpose: creating interactive websites
---
<!-- I've written many tutorials on JavaScript. As I want to make them easy to learn from, I've complied a list of which posts to check out in what order if you want to learn JavaScript. If you want to know more about Code The Web, check out the [welcome post][welcome].

> ### Want to get new posts in your inbox? [Sign up to my newsletter][newsletter].
> I've worked hard on these tutorials and as of now do not make any money on them, so I'd really appreciate if you signed up ;)
{:class="newsletter"}

# Prerequisites
These are optional but recommended. In tutorials, I might build on what's covered here. I'd also recommed the set-up tutorial so you are writing and running your code in the same way as I am. Or, you can just **[skip to the tutorials](#tutorials)**.
## How to learn a programming language
[How to learn web development][p1]

## Background knowledge
[How the internet works][p2]

## Set-up
[Practice web development on your computer][p3]

# Tutorials
I make a new tutorial at least once a week. Over time, this list will grow. [Sign up to the newsletter][newsletter] to stay up to date! -->

<ol class="learn-post-cards article-list">
{% assign posts = site.posts | reverse %}
{% assign listnum = 0 %}
{% for url in site.learn.javascript.tutorials %}
{% for post in posts %}
{% if post.url == url %}
{% assign listnum = listnum | plus: 1 %}
{% include learn-article-item.html %}
{% endif %}
{% endfor %}
{% endfor %}
</ol>

<!-- # Other resources you may find useful
These are just other articles I have written about stuff that isn't programming, but will help you along your web development journey.

<ul>
{% assign posts = site.posts | reverse %}
{% for post in posts %}
{% if site.learn.javascript.other contains post.url %}
<li><a href="{{post.url}}">{{post.title}}</a></li>
{% endif %}
{% endfor %}
</ul> -->
<span class="invisible-text">   ‍   </span>

[newsletter]: {{site.newsletter}}

[welcome]: /welcome/
[p1]: /how-to-learn-web-development/
[p2]: /how-the-internet-works/
[p3]: /web-development-on-your-computer/