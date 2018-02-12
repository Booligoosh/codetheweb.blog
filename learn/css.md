---
layout: learn
language: CSS
title: Learn CSS
purpose: making websites look good
---
I've written many tutorials on CSS. As I want to make them easy to learn from, I've complied a list of which posts to check out in what order if you want to learn CSS. If you want to know more about Code The Web, check out the [welcome post][welcome].

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
I make a new tutorial at least once a week. Over time, this list will grow. Once you have finished learning CSS, you can move on to [JavaScript][js].

<ol>
{% assign posts = site.posts | reverse %}
{% for post in posts %}
{% if site.learn.css.tutorials contains post.url %}
<li><a href="{{post.url}}">{{post.title}}</a></li>
{% endif %}
{% endfor %}
</ol>

# Other resources you may find useful
These are just other articles I have written about stuff that isn't programming, but will help you along your web development journey.

<ul>
{% assign posts = site.posts | reverse %}
{% for post in posts %}
{% if site.learn.css.other contains post.url %}
<li><a href="{{post.url}}">{{post.title}}</a></li>
{% endif %}
{% endfor %}
</ul>

[newsletter]: {{site.newsletter}}

[welcome]: /2017/09/29/welcome/
[p1]: /2017/10/04/how-to-learn-web-development/
[p2]: /2017/10/05/how-the-internet-works/
[p3]: /2017/10/06/web-development-on-your-computer/

[r-devchat]: /2017/11/24/devchat/
[r-steps-to-creating-a-website]: /2017/12/10/steps-to-creating-a-website/
[r-reference-sites]: /2017/12/16/web-development-reference-sites/

[js]: /learn/javascript

[newsletter]: {{site.newsletter}}