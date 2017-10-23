---
layout: post
title: 'How the internet works'
image: '/assets/img/posts/how-the-internet-works/cover.png'
tags: Back-end HTML CSS JavaScript Other
---
One question that I often get asked is "How does the internet work?" The answer is probably more complex than you think - read on below to find out...

## History
To fully understand how the internet works, we need to know how it all started. The internet is actually a world-wide network of interconnected computers - known as the *World Wide Web* (hence www). These computers include your devices that you browse on as well as devices that send content (servers). Ways of transferring data wirelessly between computers were developed as early as the 1960's, but these were only small networks confined within institutions. The World Wide Web was only invented in the 1980's by a computer scientist at CERN called Tim-Berners Lee. It was originally designed mainly as an information resource for academic documents, meaning that when the internet was created there was [no CSS][no-css] (no way of adding custom designs to webpages). A webpage was basically a file stored on a server, which was sent to a computer when they requested it. One of the most important characteristics of the early internet was hypertext (Hence the acronym HTML, [as I explained in my previous post][prev-post]). Hypertext was a way of marking-up content - for example, saying "this is a heading" or "this is a quote" or "this is a list". Marking up content correctly was very important, as there was no way of styling the content other than the default styles. Links were also a big part of the early internet, as they allowed people to connect documents together from all over the world (how much do we take that for granted now?)

This is basically what the early internet looked like, and it gives us a good basis to understand how it works today (it's actually surprisingly similar).

## What happens when you visit a website
When you go to a website it has a URL (Universal Resource Locator). For example, the URL of this page is `https://codetheweb.blog/2017/10/05/how-the-internet-works/`, and the URL of the homepage is `https://codetheweb.blog/`.

`codetheweb.blog` is known as a *domain name*. There are [many different domain extensions][domcomp], such as `.com`, `.io` and `.blog`. A domain is just a pretty way of getting to an *IP address*. Every computer connected to the internet has one, whether it's a server or just a normal computer. I could even go to your IP address (if I knew what it was), except there would be nothing there because you are not currently running a server. When you go to a URL, your computer connects to a *Domain Name Server* (DNS), which goes and finds the IP address that the domain corresponds to.

Now you know the IP address of the server, your computer needs to actually request the webpage - or more precisely, *file*. What? File? Yup, that's right - a webpage is simply a file, which your browser opens and displays for you. When you send a request to the server, the server detects that a file has been requested. It then goes and finds the file, and maybe does some other stuff like add something to a database (that's back-end programming), and then sends the file over the internet back to your computer. Your browser then reads the file (which just contains code), and then displays the outcome of that code.

But what actually is that code, and how does it work?

## What makes a website?
A website is coded in three languages that the browser interprets - *HTML*, *CSS* and *JavaScript*. Some websites may use libraries, for example jQuery, but that is still part of JavaScript.

**HTML** is what the actual website is - when the internet was first created, it was the only internet language that existed, because who needed websites that looked nice or did stuff? The only purpose of the internet back then was to share information, and HTML did the job. Even though a lot has been added and changed in HTML, it is still essentially the same as it was back in the 80's. HTML is essentially plain text, but surrounded it tags so the browser knows more about the content. Take this example:
```HTML
I am a heading
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```
Here, there is a heading and the latin text is the main body. It would be rendered something like this:
> I am a heading
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Now, watch what happens with this code:
```HTML
<h1>I am a heading</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```
Result:
> # I am a heading
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.

When we add HTML tags, we can see that it becomes much easier to tell where the title is.

**CSS** is what controls the style of the website - what it looks like. Before CSS, the whole web looked pretty much the same - and extremely ugly. Here is what a Code The Web article would look like without CSS:
![A Code The Web article without CSS][no-css]
CSS can control the position, color and behaviour of HTML elements as well as simple interactions and animations.

**JavaScript** is more like most programming languages - it has variables (like in pronumerals algebra), and you can store, compare and manipulate data. The main use for JavaScript on the web is for changing HTML content - for example, check out this [prime generator][prime-generator] created with JavaScript. It is doing a bunch of calculations, comparisons etc. to generate the actual prime numbers, then adding them to the HTML of the page. JavaScript can both read and write HTML. It was originally created for the web, but now has many more uses. [NodeJS][nodejs] lets you do hundreds of things with JavaScript including creating desktop applications, phone apps, robots, servers and more. By learning JavaScript, you will open up many more opportunities (although it is very different to HTML and CSS).

[Click here if you want to see examples of what these languages look like.][languages-explained]

## Viewing websites created on your own computer
Remember I said that all URL's do is tell your computer where it download the website from so it can display it? Well guess what... browsers can also display files on your own computer! Don't forget, websites are simply folders with files in them like you would find on your computer, and servers are actually just computers. I'll go into this in more depth [in my next article, where I'll be discussing how to practice web development on your own computer - for free!][set-up]

If you liked this article, don't forget to [share with your friends][share] or [leave a comment below][comments] to say hi (feedback is always welcome)!

[no-css]: /assets/img/posts/how-to-learn-web-development/no-css.png
[prev-post]: /2017/10/04/how-to-learn-web-development/
[domcomp]: https://www.domcomp.com/
[languages-explained]: /2017/10/04/how-to-learn-web-development/#html
[prime-generator]: https://booligoosh.github.io/technetiumprime
[nodejs]: https://nodejs.org/
[next-post]: /2017/10/04/how-to-learn-web-development/
[set-up]: /2017/10/06/web-development-on-your-computer/
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}