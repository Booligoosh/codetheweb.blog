---
layout: post
title: Getting started with JavaScript!
image: '/assets/img/posts/hello-javascript/cover.png'
photoCred: [Markus Spiske,8OyKWQgBsKQ]
tags: JavaScript
keywords: ""
checked: [grammarly]
---
JavaScript is a programming language that makes websites *do stuff*. It can store variables, do certain actions based on logic and more. You can even change the HTML of a page and add CSS using JavaScript! It is a language that every web developer must learn at some point because it is just so *useful*.

Many programming languages require you to download compilers to run the code on your computer, but JavaScript doesn't! One of the main advantages of JavaScript is that it works in any browser, on any computer. This makes it very accessible and extremely easy to get started - by the end of this article, you will already have run your first line of JavaScript.

There's not really much point in continuing to convince you to learn JavaScript, because if you didn't already want to learn it then you wouldn't be on this page! &#128540;

## How to run JavaScript
Because JavaScript runs as part of websites, we execute it by having it in our HTML - there are two ways to do this.

The first way is to stick our JavaScript inside a script tag. Here's an example:
```html
<script>
    // Your JavaScript code here!
</script>
```

You might be wondering about the second line:
```javascript
// Your JavaScript code here!
```

The `//` in front of the text makes the entire line (after the `//`) a *comment*. This means that it won't be run as JavaScript, and is simply a message for us human (or half-human anyway) coders to read.

By now you're probably itching to write some code, and I don't blame you! First of all, create a new folder on your computer with an `index.html` file inside. Next, let's add some boilerplate HTML code:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello world in JavaScript!</title>
    </head>
    <body>
        <h1>JavaScript :)</h1>
    </body>
</html>
```

Time to add our `<script>` tag! It can be put in either the `<head>` or `<body>` tags. Note that it executes *at its position in the HTML*. This means that if we're modifying an `<h1>` but then `<h1>` is after the `<script>` tag then it won't have been loaded yet, and the code will not work. Because of this, `<script>` tags are usually placed just before the ending `</body>` tag, so everything has loaded first.

Let's add it in!
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello world in JavaScript!</title>
    </head>
    <body>
        <h1>JavaScript :)</h1>
        <script>
            // Your JavaScript code here!
        </script>
    </body>
</html>
```

If you save and reload the page, nothing will have changed - this is because our script doesn't do anything yet!

## Writing some JavaScript!
Get ready for it - you're just about to write your very first line of JavaScript (not including the comment of course &#128540; )

We're going to be creating a popup saying "Hello World!" - This is a classic message that programmers often use when they first try using a new technology or language.

Here's the code:
```javascript
alert('Hello World!');
```

**WAIT!** Don't copy the code into your editor yet! Before we try out this code, we need to understand what's going on here first. Do I see your mouse slowly moving over to your code editor? Just stay with me here a bit.

This line is made up of a word, some brackets, some quotes with text inside them and a semicolon. The `alert(...)` bit is called a *function*. A function is basically a specific action that you tell the computer to do. A function can have *inputs*, which are the bits in the brackets. If a function doesn't have inputs, we just leave the brackets empty (eg. `myFuction()`). A function can also have outputs, which I will go into in [a later article][functions]. Here our `alert` function doesn't have an output because it does something (in this case creates a popup) instead of returning a value. I'll go more into functions in a [later article][functions].

Now let's have a look at what is *inside* the brackets - the input for the `alert` function. As you can see, we have our message, `Hello World!`, inside some quotes. This signifies that the stuff inside the quotes is *text*. Well isn't that obvious? Not really. Computers are dumb, and can't tell what is what. This is why we need to specifically tell it that this is text (a "String" in programmer-lingo) by putting it in quotes. In JavaScript, it doesn't really matter if you use single or double quotes as long as the one at the start is the same as the one at the end.

Finally, there is a semicolon at the end of the line. Technically they are not always needed, but you should always put a semicolon at the end of each line. This can be quite hard to remember at first - that's why every JavaScripter wishes that one of these actually existed:

![A keyboard with a giant semicolon key][semicolon-keyboard]
> Source: [Reddit](https://www.reddit.com/r/ProgrammerHumor/comments/283he1/if_somebody_were_to_make_this_keyboard_i_would/)

Anyway, that's it! Now when you type your first line of JavaScript, you'll actually know what it does! Sorry for the wait &#128514;

So, here's the moment you've been waiting for - go type the line inside your `<script>`, under the comment...
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello world in JavaScript!</title>
    </head>
    <body>
        <h1>JavaScript :)</h1>
        <script>
            // Your JavaScript code here!
            alert('Hello World!');
        </script>
    </body>
</html>
```

If you're feeling super-inspired, type it yourself instead of being a copy-paste wizard &#128521;

Reload the page, and see what happens...

![An alert pops up!][alert]{:.screenshot-white}

Woo! You're now officially a JavaScripter! &#127881; &#127881;

We're nearly done, I just want to tell you about another way of putting JavaScript in your HTML...

## An alternate way to run your JavaScript
You know how you can link `.css` files for your CSS? Well, you can do a similar thing with JavaScript! However, instead of using a `<link>` tag we use a `<script>` tag. Here's an example:
```html
<script src="script.js"></script>
```
As you can see, we use the same `<script>` tag as before but leave it empty. Instead, we give the opening tag and `src` attribute with the URL of the JavaScript file. Let's try it out! In the folder with your `index.html`, create a `script.js` file. Inside the file, add our JavaScript from earlier on:
```javascript
// Your JavaScript code here!
alert('Hello World!');
```
Next in the HTML, update the `<script>` tag:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello world in JavaScript!</title>
    </head>
    <body>
        <h1>JavaScript :)</h1>
        <script src="script.js"></script>
    </body>
</html>
```

Now if you reload the page, the script will still work! This is just an alternate way of writing our JavaScript, and can be especially good to prevent cluttering our HTML with a lot of JavaScript.

## Conclusion
Well done, you made it! You now know how to write some JavaScript, link it to our HTML and call a basic function!

It is really awesome to have been able to help you write your first line of JavaScript, who knows where you'll be in a few years' time! If you liked this article and want to continue learning JavaScript, I will be releasing one JavaScript tutorial each week, which you can find [here][js].

Also, these articles take time and effort, so I'd really appreciate it if you [shared it][share] :)

If you want to stay up to date and get these articles in your inbox as I write them (a great way to stay motivated to keep learning JavaScript), [enter your email here!][newsletter] - I'd really appreciate it &#128521;

Finally, if you have any questions or feedback, [tell me about it in the comments][comments].

See you next time, where I'll be talking about [variables][vars] - one of the *most important* parts of JavaScript. See you then!

[returning-functions]: {{site.newsletter}}
[functions]: {{site.newsletter}}
[vars]: {{site.newsletter}}

[semicolon-keyboard]: /assets/img/posts/hello-javascript/semicolon-keyboard.png
[alert]: /assets/img/posts/hello-javascript/alert.png

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css
[js]: /learn/js
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}