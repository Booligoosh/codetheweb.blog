---
layout: post
title: 'Wrapping and grouping HTML elements'
image: '/assets/img/posts/wrapping-and-grouping-elements/cover.png'
tags: HTML
keywords: "learn HTML, how to learn HTML, HTML tags, div, span, grouping, groups, wrapping, Wrapping and grouping HTML elements, Wrapping HTML elements, Grouping HTML elements"
---
Sometimes you want to put HTML elements in groups, or put a wrapper around certain text so that you can select it. Learn how in this article...

## What is wrapping?
Wrapping is where you wrap a certain bit of text or element in a wrapper element.

## What is grouping?
Grouping is where you put a wrapper around multiple elements.

> Before I go into use cases for wrapping and grouping, let's get the syntax out of the way:

## Syntax - \<div>
`<div>` stands for *division*, and is used to group elements together. Here is an example:
```HTML
<div>
    <h1>Element one</h1>
    <h2>Another element</h2>
</div>
```
## Syntax - \<span>
`<span>`s are generally used to wrap around certain bits of text (I will go into why further down). The syntax is as follows:
```HTML
<p>Lorem <span>ipsum dolor</span> sit amet.</p>
```

## Use cases (and why?)
First of all, why would you actually want to do this in the first place? Well, there are many good reasons:

### 1. Make your code logical and readable - `<div>`
By putting parts of your code into groups. Take this example:
```HTML
<h2>Want more articles? <a href="/login>Log in here.</a></h2>
Or, you can <a href="/signup">sign up for a new account</a>.
<h1>Article name</h1>
<p>Article article yeah yeah yeah etc.</p>
<p>Second paragraph......</p>
<p>Final paragraph</p>
Hey I'm a really annoying ad for some random company!
You can click on them and give me MONEY <a href="https://company.com">here</a>.
```
If you were looking at this code, it would be very confusing to work out what was the content and what was other stuff. If we did this, it would make the code much more clear:
```HTML
<div class="login">
    <h2>Want more articles? <a href="/login>Log in here.</a></h2>
    Or, you can <a href="/signup">sign up for a new account</a>.
</div>

<div class="article">
    <h1>Article name</h1>
    <p>Article article yeah yeah yeah etc.</p>
    <p>Second paragraph......</p>
    <p>Final paragraph</p>
</div>

<div class="ad">
    Hey I'm a really annoying ad for some random company!
    You can click on them and give me MONEY <a href="https://company.com">here</a>.
</div>
```

### 2. Style multiple elements at once - `<div>`
Chances are, you probably haven't learnt CSS yet but down the track this will be a big benefit.
Let's say you have a bunch of random elements:
```HTML
<h1>Hello!</h1>
<h2>This is a subtitle</h2>
<p>Boring content</p>
<p>that takes too</p>
<p>long to read</p>
<img src="meme.jpg">
<h3>Have fun!</h3>
<h6>Don't style me.</h6>
```
What if we wanted to give all of those elements a `color` of `blue`? (NOTE: You don't need remember anything about CSS from this, I'm just using it to explain my point). You would have to do it like this:
```CSS
h1, h2, p, img, h3 {
    color: blue;
}
```
In addition, this would also style any other `h1`s, `h2`s, etc. on the page.

However, we put all these elements in a group though, it becomes much easier:
```HTML
<div class="style-me">
    <h1>Hello!</h1>
    <h2>This is a subtitle</h2>
    <p>Boring content</p>
    <p>that takes too</p>
    <p>long to read</p>
    <img src="meme.jpg">
    <h3>Have fun!</h3>
</div>
<h6>Don't style me.</h6>
```
```CSS
.style-me {
    color: blue;
}
```
This will make all the elements inside `<div class="style-me">` blue.
### 3. Position groups of elements - `<div>`
I will get into this more in a [later article][positioning] on CSS, but by putting elements inside groups you can move them around.
For example, let's say you want to have a sidebar - instead of manually positioning all the elements of the sidebar, you can just wrap them with a `<div>` and position that. Consider a `<div>` as a box - when you move a box, you end up moving the stuff in it as well. If we want to move our sidebar box over to the right, doing so will also move all the stuff inside it.
### 4. Select content that is not selectable - `<span>`
Let's say you have the following HTML:
```HTML
<p>Code The Web is a really awesome blog.</p>
```
What if you wanted to do something with the word `awesome`? Let's say make it red? There is no way to select it, it is just text. To select it, we can wrap it in a `<span>` with a class:
```HTML
<p>Code The Web is a really <span class="awesome">awesome</span> blog.</p>
```
```CSS
.awesome {
    color: red;
}
```

## Conclusion
Again, if you got confused by the CSS, don't worry - you don't have to internalize it just yet. I was simply using it to demonstrate use cases for `<div>`s and `<span>`s, and show you how using them in your HTML can help you down the track when you add CSS.

Anyway, that's it for today! Feel free to tell me what you thought or ask me any questions in the [comments] below. If you liked the article, don't forget to [share] and [subscribe][newsletter].

Next week, I'll be talking about [lists and navigation in HTML][lists-and-nav]. See you then!

[lists-and-nav]: /2017/10/29/lists-and-navigation/
[positioning]: {{site.newsletter}}
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}