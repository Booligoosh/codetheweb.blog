---
layout: post
title: 'The structure of an HTML document'
image: '/assets/img/posts/structure-of-an-html-document/cover.png'
tags: HTML
keywords: "learn HTML, how to learn HTML, HTML tags, HTML structure"
checked: [grammarly]
---
In this article, I will show you the overall structure of an HTML page. Now that you know the [HTML syntax][last-post], it's time to know how to use it.

## Declaring the DOCTYPE
All HTML documents start with a *`DOCTYPE`* tag. This tells the web browser that the file is an HTML page. A *`DOCTYPE`* tag looks like this:
```HTML
<!DOCTYPE html>
```
Oh! I almost forgot to tell you: you should follow along with me. If you're not set up to write and test your code, check out [this article][set-up] first.

So, pop open your [code editor][code-editor] and make a new file called `structure.html`. Once that's all done, type the code snippet from above into it. Note that *`DOCTYPE`* is all uppercase, while `html` is all lowercase (a bit counter-intuitive).

The *`DOCTYPE`* tag is not a normal HTML tag - it is an exception. Normally, you are not allowed to have an `!` at the start of the opening tag. The*`DOCTYPE`* does not have a closing tag (other HTML elements don't have closing tags either though).

## The &lt;html&gt; element
We need to wrap our entire code in a `<html>` element to tell the browser that what's inside is our HTML (wait what? didn't we just do that? idk, the internet is weird). We are going to be putting code *inside* the HTML tag, so we also need to give it a closing tag. Based on my [last post] [last-post] on HTML syntax, try and guess what our code should look like now...
```HTML
<!DOCTYPE html>
<html>
    
</html>
```
{:.reveal}
Did you get it correct? If so, great! If not, don't worry - you'll get used to HTML after a while. Next, we will have a look at what goes inside the `<html>` element.

## The &lt;head&gt; element
Within the `<html>` element are two elements: the `<head>` and the `<body>`. The `<head>` comes first. It will have code inside it, so it requires a closing tag. Try and have a guess what our code will look like once we add the `<head>` element:
```HTML
<!DOCTYPE html>
<html>
    <head>
        
    </head>
</html>
```
{:.reveal}
But **what actually is the `<head>` element and what goes inside it?** The `<head>` element basically stores data about the HTML page as well as links to resources ([CSS][css], [JavaScript][javascript], icons etc.) Nothing within the `<head>` is actually displayed on the page. Some data about the page that it can store it the *title* of the page. This shows up as the tab name in your browser. Try adding a title tag to your `<head>` now. Try and work out how it will look (you can add whatever title you want):
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
    </head>
</html>
```
{:.reveal}
We will cover other things that you can put in the `<head>` much later, as some of them are quite complex and none of them are essential.

## The &lt;body&gt; element
Let's pause while you preview your code (see [this article][run-code]{:target="_blank"} if you don't know how). What? I tricked you? That's right - because there's *nothing there.* But what about all this stuff we've been coding? I mean, there's nothing *visible* there. The `DOCTYPE`, `<html>` and `<head>` tags are invisible. The `<body>` tag is where all the visible content goes, including all your HTML elements and tags. Try adding the `<body>` tag underneath the `<head>` and see if you got it correct:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
    </head>
    <body>
        
    </body>
</html>
```
{:.reveal}
In my next tutorial I will be going into all the different types of HTML tags and what they do, but for the purposes of this demo add the following content so that your HTML looks like this:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
    </head>
    <body>
        <h1>I am actually visible!</h1>
        <p>Code The Web is <i>really</i>, <b><i>really</i></b> awesome.</p>
    </body>
</html>
```
Don't worry about what the HTML inside means, I will talk about all that in the next article.

Now, save your file and open it up in your browser (or reload if you've already opened it). Now you'll see that there's content there! Most of the time, the part of the code that you will do the most with is in your `<body>`. The `<head>` is really only used for setting things up and linking files.

## Conclusion
So, now you've built the skeleton of an HTML document!
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
    </head>
    <body>
        <h1>I am actually visible!</h1>
        <p>Code The Web is <i>really</i>, <b><i>really</i></b> awesome.</p>
    </body>
</html>
```
In my next article, I'll be talking all about coding your actual website (the bit in the `<body>` tags) and about the main types of HTML tags and what they do. If you liked this article, don't forget to [share] and [subscribe to the newsletter][newsletter]. If you need some help or have something to say, [let me know in the comments][comments].


[last-post]: /2017/10/06/html-syntax/
[set-up]: /2017/10/06/web-development-on-your-computer/
[code-editor]: /2017/10/06/web-development-on-your-computer/#code-editor
[run-code]: /2017/10/06/web-development-on-your-computer/#running-your-code
[css]: /learn/css
[javascript]: /learn/javascript
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}