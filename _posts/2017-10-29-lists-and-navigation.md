---
layout: post
title: 'Lists and navigation in HTML'
image: '/assets/img/posts/lists-and-navigation/cover.jpg'
photoCred: [Glenn Carstens-Peters,RLw-UC03Gwc]
tags: HTML
keywords: "learn HTML, how to learn HTML, HTML tags, ul, ol, li, dl, dd, dt, list and navigation, lists, navigation, nav"
---
Lists are very useful in HTML, and are also used to build navigation menus. Learn how in this article...

Before we begin, you may be wondering why navigation is included in an article about lists. As I said above, lists are used to build navigation menus - but why? The reason is because it is the globally accepted way to create navigation. This is means that it will help screen readers, web scanners and Google identify it as the navigation for your site. This is part of a thing called [Search Engine Optimization][seo] (SEO), which I will go into in a [later article][seo].

In this article, I will start with what lists are and how to make them, then go into how they can be used to create navigation. Let's get going!

## Types of lists
There are three types of lists in HTML:
- Ordered lists
- Unordered lists
- Definition lists

(see what I did there? I used a list &#128540;) Let's go into what each one is for and how to code them...

## Ordered lists
Ordered lists are lists with numbers, and look like so:
> 1. Item
> 2. Another item
> 3. A third item

Here is the syntax for an ordered list:
```HTML
<ol>
    <li>Item</li>
    <li>Another item</li>
    <li>A third item</li>
</ol>
```

Let's go through what that means: The `<ol>` tag stands for *ordered list*, and is the actual list element. Each item in the list is made using a `<li>` element, which stands for *list item*.

## Unordered lists
Unordered lists are very similar to ordered lists, except that they have bullet points instead of numbers:
> - Item
> - Another item
> - A third item

The syntax for an unordered list is very similar to the syntax for an ordered list:
```HTML
<ul>
    <li>Item</li>
    <li>Another item</li>
    <li>A third item</li>
</ul>
```
You still use `<li>`s for the list items, and the only difference is that `<ol>` is replaced with `<ul>` (unordered list).

## Definition lists
Definition lists are probably the least common list used in HTML, and also the most complicated. Definition lists are used sort of like you would find in a dictionary, with terms and definitions of those terms. Here is an example:
> Ordered lists
> : Lists with numbers
> 
> Unordered lists
> : Lists with bullet points
> 
> Definition lists
> : Lists used to define things

The syntax for definition lists is a bit more complicated, so I will explain first. First of all, a definition list is made using the `<dl>` tag, similar to ordered and unordered lists:
```HTML
<dl>
    
</dl>
```
But what goes inside? Basically, a definition list is made up of *term/definition pairs*. The term and the definition each have their own element. The element for the definition term is `<dt>`, and the element for the definition description (definition of the term) is `<dd>`. Here is a simple term/definition pair in a list:
```HTML
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>
```

Using the information I've given you, try and work out what the code for the example list from above would be:

```HTML
<dl>
    <dt>Ordered lists</dt>
    <dd>Lists with numbers</dd>
    <dt>Unordered lists</dt>
    <dd>Lists with bullet points</dd>
    <dt>Definition lists</dt>
    <dd>Lists used to define things</dd>
</dl>
```
{:class="reveal"}

There we go! Now you know all three types of lists in HTML!

## What is navigation?
Navigation is the set of links that you click on to get to other parts of a site. For example, here is the navigation on my site:
![My navigation bar with the Code The Web logo, a Home link and a Tags link][my-nav]
And here is an example from another site:
![A navigation bar with a logo, links to pages, links to social media and a download now button][other-nav]

## Navigation
As I said earlier, navigation should be created with lists, for the purpose of [Search Engine Optimization][seo] and general accessibility. Because the whole point of creating navigation with lists is for a global standard, there is a specific syntax that should be used to create them:
```HTML
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
```
Basically, a navigation item should be created with the following structure:
> nav > ul > li > a > your-text

Note that the ordered list is put in a `<nav>` element. This is the [semantic tag][seo-1] for navigation on a page.

Try and create your own navigation with the following two items:
- Home (link to https://codetheweb.blog/)
- Newsletter (link to https://codetheweb.blog/newsletter)

See if you got it right below:
```HTML
<nav>
    <ul>
        <li><a href="https://codetheweb.blog/">Home</a></li>
        <li><a href="https://codetheweb.blog/newsletter">Newsletter</a></li>
    </ul>
</nav>
```
{:class="reveal"}

Note that the default styling for the navigation code above looks really bad - in a later article, I will show you [how to make a navigation bar that actually looks good, all while keeping the exact same HTML][nav-bar-css].

## Conclusion
Woo! Now you know all three types of lists in HTML, as well as all about how to create navigation on a page.

If you enjoyed this article, don't forget to [share it][share] so that more people will get to read it. As always, if you have any questions, feedback or just want to say hi then [do so in the comments below][comments]. And if you want to stay up to date and have more awesome articles delivered to your inbox (once a week-ish), then don't forget to [subscribe to the newsletter][newsletter].

Have fun, and I'll see you all next week where I'll be writing [my first CSS tutorial][css-syntax].

> P.S. - today is exactly one month since I wrote my [first ever blog post][first-post]!



[seo]: {{site.newsletter}}
[seo-1]: {{site.newsletter}}
[nav-bar-css]: {{site.newsletter}}
[css-syntax]: /2017/11/11/css-syntax/
[first-post]: /2017/09/29/welcome/
[my-nav]: /assets/img/posts/lists-and-navigation/my-nav.png
[other-nav]: /assets/img/posts/lists-and-navigation/froala-nav.png
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}