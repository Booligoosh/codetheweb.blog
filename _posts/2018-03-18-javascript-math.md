---
layout: post
title: JavaScript Maths functions and operators
image: '/assets/img/posts/javascript-math/cover.jpg'
photoCred: [Volkan Olmez,aG-pvyMsbis]
tags: JavaScript
keywords: "Math, Maths, Math in JavaScript, Maths in Javascript, JavaScript Math, JavaScript Maths, JavaScript, Learn JavaScript"
checked: [grammarly]
---
Learn how to use addition, subtraction, multiplication, division, powers, rounding, modulo and more in this article...

## Getting started!
Welcome to another post on Code The Web! First of all, I want to encourage you to follow along in this article. It will help you learn better, and also help you to remember what you have done. Let's start by making a new HTML file with a `<script>` tag in it:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript Math</title>
    </head>
    <body>
        <h1>JavaScript :)</h1>
        <script>
            // Our script will go here!
        </script>
    </body>
</html>
```
Once that's done, open it up in your web browser and you're ready to go! (don't forget to save and reload the page every time you make a change)

## Types of numbers
There are two main types of numbers in JavaScript: *floats* and *integers*. Integers are whole numbers without decimals. Here are a few examples:
- `3`
- `0`
- `156`

Floats are numbers which contain a decimal. It is important to note that *floats can be whole numbers*. Wait whaaat? I thought you said that integers were whole numbers? Well, stuff like `5.0` is still considered a float, because it has a decimal and *could* be `5.1`.
- `2.225345`
- `0.0`
- `42.0`

For the most part, you won't have to worry about these different types because JavaScript will automatically convert them for you (&#x1F60D;). However, in some programming languages, you will have to do it yourself. There are also some cases in JavaScript where you *will* have to work with converting stuff between floats and integers.

## Basic operators
Let's start right from the beginning - with the basic operations!

### Addition
Addition in JavaScript is really simple - all you need to do is put a plus sign between two numbers, just like in real life. Try it out! Add the following to your script, save, then reload the page:
```javascript
alert(1 + 2);
// Equal to 3
alert(2.5 + 3.5);
// Equal to 6
alert(-2 + -3);
// Equal to -5
```
You can also add floats and integers in the one expression:
```javascript
alert(7 + 1.25);
// Equal to 8.25
```
Obviously, the number that is returned will be a float. Moving on!

### Subtraction
Subtraction also works just as it does in real life. Easy, huh? Here are some examples - you can try them out if you want:
```javascript
alert(5 - 3);
// Equal to 2
alert(33 - 42);
// Equal to -9
alert(-3.3 - 1.1);
// Equal to -4.4
```

### Multiplication
Multiplication is slightly different to how you would do it on paper. Normally, we would just use a cross symbol - the letter `x` on a keyboard. However, we can't use that! In programming, we try to give each character only one meaning. Since `x` is already a letter, we have to use something else. In JavaScript, we use the asterisk (`*`) symbol. Here are some examples of multiplication in JavaScript:
```javascript
alert(1 * 3);
// Equal to 3
alert(9 * 8);
// Equal to 72
alert(-2.23 * 7.92);
// Equal to -17.6616
alert(-4 * -3);
// Equal to 12
```

### Division
Division also works differently to on paper. While there is a [Unicode symbol][unicode] for division (&divide;), it is not something that you can type easily on your keyboard and is not that commonly used. Instead, we use the slash (`/`) sign to mean 'divided by'. Here are some examples:
```javascript
alert(1 / 2);
// Equal to 0.5
alert(20 / -4);
// Equal to -5
alert(0 / 5);
// Equal to 0
alert(64 / 0);
// Equal to Infinity
```
I just want to highlight the last one on that list:
```javascript
alert(64 / 0);
// Equal to Infinity
```
In maths, anything divided by 0 is equal to infinity ([explanation here][divided-by-0]). However, in JavaScript it can't equal to "`infinity`" - otherwise JavaScript would think it was a variable! So, we need to capitalize it to make it `Infinity`. This is a *special value* in JavaScript (**not** a variable). It doesn't really have many use cases but is the outcome of statements like the one above.
> Fun fact: [`Infinity - Infinity` in JavaScript *does not* equal `0`!][infinity-infinity]

### Modulo
Modulo is something that you may not have heard of before, unlike the four operations above. Put simply, modulo is the *remainder* when dividing two numbers. It is done by putting a `%` sign between the two numbers. For example:
```javascript
alert(24 % 5);
// Equal to 4
```
Let's break it down a bit further. We have the numbers `24` and `5`, separated by the modulo (`%`) sign. This means that to calculate the answer in our heads, we'd first need to divide `24` by `5` (into groups of five). Here, we can make four groups of five. However, we'd still have an extra `4` left over as a remainder. So, the answer is `4`. Here are some other examples - if you still don't get it, try and do the process above on these:
```javascript
alert(10 % 4);
// Equal to 2
alert(30 % 3);
// Equal to 0, 3 goes into 30 ten times without a remainder
alert(6 % 5);
// Equal to 1
```

## `Math` functions
As well as the operators above, there are also some functions that we can use to carry out slightly more advanced tasks. These functions generally follow the form of `Math.whateverTheFunctionIs()`. This is because `Math` is an [object][objects] containing lots of different math-related functions. I'll talk more about objects in a [later article][objects], but you don't really have to worry about how it works for the moment. Just use the syntax that I put here and you'll be fine.

### To the power of
We do this using the `Math.pow(number,power)` function. For example, let's say we wanted to square the number `5`:
```javascript
alert(Math.pow(5,2));
// Equal to 25
```
Wait whaaat? A function *inside* the `alert` function? Yup. This is because `Math.pow` is a function that [*returns* something][returning-functions]. You can think of it just like a variable. So instead of `x` being equal to `25`, `Math.pow(5,2)` is equal to `25`.

You can also go to higher powers if you want (pun intended &#x1F64F; *\*sigh\**):
```javascript
alert(Math.pow(3,3)); // 3 to the power of 3
// Equal to 27
alert(Math.pow(2,10)); // 2 to the power of 10
// Equal to 1024
```

### Square root & Cube root
You can calculate square an cube roots in JavaScript using the `Math.sqrt()` and `Math.cbrt()` functions. Here are some examples which you can try out:
```javascript
alert(Math.sqrt(25));
// Equal to 5
alert(Math.cbrt(8));
// Equal to 2
```

### Rounding
We can round a number to a whole number using the `Math.round()` function. Here are some examples:
```javascript
alert(Math.round(35.82562));
// Equal to 36
alert(Math.round(35.22353));
// Equal to 35
alert(Math.round(4));
// Equal to 4 (already rounded)
alert(Math.round(6.5));
// Equal to 7 (.5 rounds up)
```
It will round *up* if the decimal part of the number is greater than or equal to `0.5`. Otherwise it will round down.

### Specifically rounding up or down
But what if we want to specifically round up or down? For example, what if before we wanted to round `35.82562` *downwards*? This is where *floor* and *ceiling* come in handy. `Math.floor()` rounds the number *down* no matter what, while `Math.ceil()` rounds the number *up* no matter what. Note that `Math.ceil(6)` or even `Math.ceil(6.0)` would not round up to `7`. Here are some examples:
```javascript
alert(Math.floor(35.82562));
// Equal to 35
alert(Math.ceil(35.82562));
// Equal to 36
alert(Math.ceil(4.0));
// Equal to 4
alert(Math.ceil(4.01));
// Equal to 5
alert(Math.floor(0.99999));
// Equal to 0
```

## Conclusion
That's it for today! This just covered some basic math operations, but there are many more. [Click here][math-object-ref] for a list of all the functions in the `Math` object (the ones that start with `Math.`). As well as having functions, the `Math` object also has some static values such as `Math.PI` - they are listed on that page as well.

Hopefully, you learned a lot from this article! If you did, I'd be stoked if you [shared it][share] on social media.

Also, it takes me a lot of time to write these articles. So far I've spent 1 hour and 45 minutes on this article, and I spend over 3 hours on some articles! At the time of writing, I currently don't have any ads on here, so the only way that I can get support for all this content is via donations.

If you want to give me a little thanks and make my entire day feel awesome, I'd really appreciate if you'd [buy me a coffee &#x2615;][donate]. It's only $4, and it makes a big difference. In fact, at the moment I'm only 49 cents short of covering my costs for Code The Web, and it would be really cool if you were the one to help me reach that milestone. Okie, enough about that &#x1F609;

If you need any help with the topics covered in this article or want to give feedback (I love myself some scrumptious feedback), please do so in the [comments below][comments] or via the cool live chat widget that is probably in the bottom-right corner of your screen right now.

Also, if you want the latest web development articles from Code The Web and around the internet in your inbox about once a week, enter your email below! You can unsubscribe at any time.
{% include newsletter.html %}
That's it for today! Next time, I'll be writing about [for loops and while loops in JavaScript][js-loops] - they are really cool, because you can tell the browser to repeat bits of your code over and over again (even with different values each time)! See you then &#x1F680;


[unicode]: {{site.newsletter}}
[divided-by-0]: https://math.stackexchange.com/questions/1399099/why-is-any-number-divided-by-0-is-infinite/1399100
[infinity-infinity]: https://stackoverflow.com/questions/27074158/infinity-infinity-nan
[objects]: {{site.newsletter}}
[returning-functions]: /2018/04/05/javascript-functions/#functions-with-an-output-functions-that-return-something
[math-object-ref]: https://www.w3schools.com/js/js_math.asp
[js-loops]: /2018/03/25/for-and-while-loops-javascript/

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css
[js]: /learn/js
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
[donate]: {{site.donate}}