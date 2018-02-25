---
layout: post
title: Variables in JavaScript
image: '/assets/img/posts/javascript-variables/cover.jpg'
photoCred: [Markus Spiske,Skf7HxARcoc]
tags: JavaScript
keywords: ""
checked: []
---
Variables are a core part of JavaScript - in fact, they are a core part of almost any programming language. They let you store information, and are the basis of what makes JavaScript so powerful. Learn all about them in this article...

## What is a variable?
A variable is simply a place to store something. In fact, you can think of a variable like a cupboard. First, we need to *create* the cupboard to store stuff in. Next, we'll want to put something in the cupboard. Then later, we'll want to retrieve the item and use it. We might also want to replace the item with another item.

Time to see it in use! Let's say we wanted to alert the number `25`. Normally, we'd do it like so:
```javascript
alert(25);
```
But what about doing this using a variable? Here's how:
```javascript
var x = 25;
alert(x);
```
Let's take a look at what's going on here- first of all, we're *creating* (aka *declaring*) our variable called `x` by saying `var x`. On this same line, we're also giving the variable an inital value to store by saying `= 25`.

Now, when we run this code it will alert `25`! This is because `x` is now just a placeholder for the number 25. It is just like if you were editing a document and wanted to replace all instances of the word "banana" - in this case, the browser goes through our code and replaces all instances of the variable `x` with `25`.

> PS: Follow along! Create a new file called `index.html` and add the following code:
> ```html
> <!DOCTYPE html>
> <html>
>     <head>
>         <title>Hello world in JavaScript!</title>
>     </head>
>     <body>
>         <h1>JavaScript :)</h1>
>         <script>
>             var x = 25;
>             alert(x);
>         </script>
>     </body>
> </html>
> ```
> You can now put all of your JavaScript inside the `<script>` tag! &#x1F389;

But why does any of this matter? Well, the true power of variables is the fact that you can *change* them. For example:
```javascript
var x = 25;
x = 85;
alert(x);
```
As you can see, setting a variable that had already been declared is as simple as saying `x = 85`. You don't need the `var` bit, as it's already declared.

Now, we can alert `85` without even changing the line where it says `alert`! This might seem weird now, but variables are one of the core parts of JavaScript and will come in handy more as you write more complicated code.

## Types of variables
In JavaScript, there are different variable *types*. This is because it needs to know what type of data we are giving the variable, because, well, computers are dumber than you are. Note that **you can change a variable to a different type after it has been declared, it doesn't need to stay as the same type.** Here are some of the basic data types in JavaScript:

### Strings
A *string* is another way of saying some text. We have to surround it in quotes, because otherwise it would be considered a variable. Here is an example:
```javascript
var x = "I am a string!";
```
It doesn't matter if you have single or double quotes:
```javascript
var x = 'I am a string!';
```

### Numbers
Obviously, we can also set a variable to a *number* - like we did before! It can be a whole number:
```javascript
var x = 16;
```
Or a decimal:
```javascript
var x = 3.14;
```

### Booleans
*Booleans* are simply `true` or `false` values:
```javascript
var x = true;
var y = false;
```
This may sound very simple, but they can come in handy when using [`if` statements][if] - which let you execute bits of your code based on whether statements equal `true` or `false`.

## Conclusion
Yay! You now know all about variables! Let's go through what we've learned today.

First of all, we learned how to declare, set and change variables:
```javascript
var x = 12; /* Declared and set a variable */

x = "Helloooo!"; /* Change a variable (you can change it to a different type) */
```

We also learned about some of the basic types of data:
```javascript
var x = 2.71; /* Number */

var y = 'I <3 JavaScript!'; /* String */

var z = false; /* Boolean */
```

I'm honoured to be part of your coding journey, and I hope you found this useful! If so, why don't you [join the newsletter][newsletter] and recieve more articles like this in your inbox? Plus, I'll love you in return &lt;3

Also, if you are *really* nice and have $4 to spare, I'd really appreciate it if you [buy me a coffee &#x2615;][donate]. Thanks!

And if there's anyone who you think this article would really help out, don't forget to [share it with them!][share] Finally, if you wanna chat with me (or other people), head down to the [comments below][comments].

See you next time, when I'll be talking about [some basic interactions in JavaScript][interactions]. See you then!


[if]: {{site.newsletter}}

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css
[js]: /learn/js
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
[donate]: {{site.donate}}