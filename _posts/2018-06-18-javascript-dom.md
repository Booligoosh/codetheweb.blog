---
layout: post
title: How to change HTML and CSS with JavaScript &mdash; an introduction to the DOM
image: '/assets/img/posts/javascript-dom/cover-text.jpg'
photoCred: [Maik Jonietz,nZcMWOKAJrY]
tags: JavaScript
keywords: "JavaScript DOM, Change HTML and CSS with JavaScript, Change HTML with JavaScript, Edit HTML and CSS with JavaScript, Edit HTML with JavaScript, How to change HTML and CSS with JavaScript, How to change HTML with JavaScript, How to edit HTML and CSS with JavaScript, How to edit HTML with JavaScript, DOM, HTML DOM, JavaScript DOM, Document Object Model, HTML, CSS, JavaScript, Learn JavaScript"
checked: [grammarly]
---
<!-- https://carbon.now.sh/?bg=rgba(171,%20184,%20195,%201)&t=base16-light&wt=bw&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=48px&ph=32px&ln=false&fm=Ubuntu%20Mono&fs=18px&si=false&code=%252F%252F%2520Changing%2520HTML%2520with%2520JavaScript&es=4x&wm=false -->
Part of the entire reason that JavaScript exists is to interact with HTML and CSS. Learn how all three web languages intersect in this article!

## Getting started
Create an HTML file with the following code, then open it up in your browser:

```HTML
<html>
    <head>
        <title>The DOM :D</title>
    </head>
    <body>
        <h1>An h1</h1>
        <p id="myId">I'm a paragraph, look at me!</p>
        <h1 class="title second-h1" id="classesExample">Another h1</h1>
        <h1>A third h1</h1>
        <img src="https://codetheweb.blog/assets/img/posts/javascript-dom/llama.jpg">
        <script>
            // Exciting code coming soon!
        </script>
    </body>
</html>
```
If you want to try out anything in this article, you can put it in the `<script>` tag, save, reload the page and see what happens! In this tutorial, I'll be using `console.log` &mdash; this prints stuff to the console so you can see it. To open up the console:
1. Right-click
2. Go to 'Inspect Element'
3. Go to the 'Console' tab

That's all! I hope you enjoy...

## Why would I want to change HTML anyway?
> I'm assuming you already have some reason because otherwise you wouldn't be looking at this article, but just in case you don't...

For most of [this series][js], we've been displaying the values of certain bits of JavaScript by either using `alert` or `console.log`. But what if we wanted to show the values on the actual web page? Here's where we need to start changing HTML with JavaScript...

## What is the DOM?
The DOM stands for the *Document Object Model*. It is a programming interface for HTML &mdash; in other words, it lets you modify HTML using another programming language (JavaScript). All of the stuff I'll teach you about in this article is all part of the DOM &mdash; it is a way of being able to change the HTML. You can also change CSS using the DOM because you can make CSS as inline styles (with the `style` attribute).

## Selecting an element
To modify an HTML element, you need to start by *selecting* it. To do this, we use CSS selectors ([here's a refresher][css-selectors]) combined with the `document.querySelector` function. Here's an example (a `console.log` added so we can see the result):
```JavaScript
document.querySelector('#myId');
```
This will return our `<p>` element because it has an ID of `myId`. We can see the output of this by `console.log`-ing it:
```JavaScript
console.log( document.querySelector('#myId') );
```
How about if there are multiple elements that fit the selector? For example:
```JavaScript
console.log( document.querySelector('h1') );
```
There are `<h1>` elements on the page &mdash; it would just select the first. I'll be talking about how to select multiple elements near the end of this article.

Remember to put these into your `<script>` tag and take a look at what happens in the console.

## Changing the contents of an element
Now that we've selected out element, let's do something with it! We'll change the HTML inside it. Remember that HTML can just be text, so using this method we can do anything from changing text to creating new elements inside something. Here's what it looks like:
```JavaScript
document.querySelector('h1').innerHTML = 'Hello World!';
```
Put this in your script tag &mdash; you will see that the first `<h1>` on the page changes to `Hello World!` immediately.

You can also insert HTML into an element &mdash; this is why it's `innerHTML`! Try it out...
```JavaScript
document.querySelector('#myId').innerHTML = 'This is <b>bold</b>.';
```

Often, you want to *add* something to an element's `innerHTML` instead of replacing it. We can do this by using `+=` instead of `=`:
```JavaScript
document.querySelector('body').innerHTML += '<h2>I am now on the page!</h2>';
```
Using `+=` is just a much quicker way of saying:
```JavaScript
// DON'T USE THIS, USE THE ONE ABOVE
document.querySelector('body').innerHTML = document.querySelector('body').innerHTML + '<h2>I am now on the page!</h2>';
```

Try adding some elements to the page yourself!

## Classes
Modifying an element's `class` attribute is another common use for JavaScript. It can be useful if there's a bunch of CSS which you want to apply to multiple elements &mdash; you can just give it a class! Let's use this element from our HTML:
```HTML
<h1 class="title second-h1" id="classesExample">Another h1</h1>
```
This element currently has two classes &mdash; `title` and `second-h1`. Here are some things we can do with its classes...

### Getting a list of classes
```JavaScript
console.log( document.querySelector('#classesExample').classList );
```

### Checking if the element has a class
```JavaScript
console.log( document.querySelector('#classesExample').classList.contains('title') );
// Logs true
```

### Adding a class
```JavaScript
document.querySelector('#classesExample').classList.add('another-class');
```

### Removing a class
```JavaScript
document.querySelector('#classesExample').classList.remove('title');
```

### Toggling a class
Toggling simply means removing it if it's already there, or adding it if it's not...
```JavaScript
document.querySelector('#classesExample').classList.toggle('second-h1');
```

## Getting / setting any attribute
In the section above, I showed you how to modify an element's `class` attribute. But how about changing *any* attribute?

We can use the `getAttribute` function to get an attribute's value &mdash; here's the syntax:
```JavaScript
document.querySelector('element').getAttribute('name');
```
Try to get the `src` of the image on our page...
```JavaScript
document.querySelector('img').getAttribute('src');
// Logs 'https://codetheweb.blog/assets/img/posts/javascript-dom/llama.jpg'
```
{:.reveal}

Now, let's try changing the URL! We want to change it from this:
```
https://codetheweb.blog/assets/img/posts/javascript-dom/llama.jpg
```

To this:
```
https://codetheweb.blog/assets/img/posts/javascript-dom/llama-changed.jpg
```

First of all, take a look at the original image on your page.

We can use the `setAttribute` function. It looks like this:
```JavaScript
document.querySelector('element').setAttribute('name', 'value');
```

See if you can work out how to change our image's `src` attribute to the new URL...
```JavaScript
document.querySelector('img').setAttribute('src', 'https://codetheweb.blog/assets/img/posts/javascript-dom/llama-changed.jpg');
```
{:.reveal}

Put it in your script and watch the magic occur!

This is how to get and set attributes.

## Changing an element's CSS
We can modify an element's CSS using it's `.style` values. Here's an example:
```JavaScript
document.querySelector('h1').style.color = 'red';
```
Try it out! You will see the first title turn red...

We can set *any* CSS property &mdash; not just the `color`. Go ahead and try changing another one yourself! It could be `height`, `font-weight`, etc.

You can't have dashes in variable names in JavaScript &mdash; so you may be wondering how to change properties such as `background-color`! What we do is we write it in *camelCase*.

camelCase is where you stick the words together (without spaces) and capitalize the first letter of every word except the first. For example, `background-color` would become `backgroundColor` and `border-bottom-left-radius` would become `borderBottomLeftRadius`.

Try changing the `background-color` of our first `h1`! Remember camelCase...
```JavaScript
document.querySelector('h1').style.backgroundColor = 'orange';
```

## Selecting multiple elements
For this entire article, I've been showing you how to get *one* element and then do something with it. But how about if you want to get multiple elements? Let's say we want to get all the `<h1>`s on the page. We can use the `document.querySelectorAll` function:
```JavaScript
document.querySelectorAll('h1')
```
Try `console.log`-ing it and see what it returns...
```
NodeList(3) [h1, h1#classesExample.title.second-h1, h1]
```
It looks like an array of all the elements that match that selector!

This is pretty much correct, except instead of an array it is a special data type called a *NodeList*. A NodeList is like an array except that it is made up of HTML elements. If you edit one of these elements with JavaScript (eg. change the style), it will show up on the page immediately.

You can pretty much treat it like an array &mdash; the main thing that you have to watch out for is that many [array functions][array-functions] won't work (eg. `.join()`).

Now that we've got a NodeList of all our `<h1>` elements, let's do something to them! We need to loop through them using a [for loop][for], and then change each one &mdash; you *can* loop through a NodeList.

Let's try changing the `font-family` of all the `<h1>`s to `sans-serif` &mdash; here's what it looks like:
```JavaScript
var elements = document.querySelectorAll('h1');

for(var i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = 'sans-serif';
}
```
All your `<h1>`'s will change their font!

This is how you select and change multiple elements from the one query selector...

## Conclusion
There we go! I hope you learned something today &#x1F601;

If you know someone else who I can help with this article, go along and [share it with them][share] &mdash; sharing is caring! If you have any feedback, need help or just wanna say hi, feel free to do so [down in the comments][comments] (or [contact me][contact]).

If you found this article valuable, I'd really appreciate it if you [donated a few dollars my way][coffee] &mdash; it takes lots of time and effort to write these articles and maintain this site, and I do it all for free! (if you're super-keen, you can even join my [Patreon &#x1F60D;][patreon])

Last but not least, don't forget to join the [&#x2728;&#x2728;&#x2728;  special magical email list &#x2728;&#x2728;&#x2728;][newsletter] to receive great quality web development tutorials once a week from here and around the internet (curated by me).

See you next time, where I'll be talking about [URL parsing (processing) in JavaScript][js-urls]!

[css-selectors]: https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/
[array-functions]: /2018/04/28/javascript-arrays/#array-functions
[for]: /2018/03/25/for-and-while-loops-javascript/#for-loops
[js-urls]: {{site.newsletter}}

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css
[js]: /learn/js
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
[coffee]: {{site.donate}}
[patreon]: {{site.patreon}}
