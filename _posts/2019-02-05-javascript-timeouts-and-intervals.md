---
layout: post
title: JavaScript Timeouts and Intervals
image: '/assets/img/posts/javascript-timeouts-and-intervals/cover.jpg'
photoCred: [Agê Barros,rBPOfVqROzY]
tags: JavaScript
keywords: "setTimeout, setInterval, clearTimeout, clearInterval, JavaScript timeout, JavaScript interval, setTimeout JavaScript, JavaScript sleep, JavaScript setInterval stop, JavaScript setTimeout loop, clearInterval javascript, timer, timers, clock, JavaScript clock, JavaScript, Learn JavaScript"
checked: [grammarly]
---

Timeouts and intervals let you execute pieces of code at specific times &mdash; they're really useful! Learn how to use them in this article.

<br>

> ### Before we begin...
> I highly recommend following along in this article! It'll help you understand and remember the concepts better. To get started, create this HTML file and then open it up in your browser:
> 
> ```HTML
> <html>
>     <head>
>         <title>JavaScript — Timeouts and Intervals</title>
>     </head>
>     <body>
>         <script>
>             // Exciting code coming soon!
>         </script>
>     </body>
> </html>
> ```
> <a id="console"></a>
> If you want to try out some JavaScript, you can put it in the `<script>` tag, save, reload the page and see what happens! In this tutorial, I'll be using `console.log` &mdash; this prints stuff to the console so you can see it. To open up the console:
> 1. Right-click
> 2. Go to 'Inspect Element'
> 3. Go to the 'Console' tab
> 
> You're all set up now! Enjoy...

<br>

## Timeouts
Timeouts let us execute some code after a certain period of time. We can create a timeout using the `setTimeout` function:
```JavaScript
var myTimeout = setTimeout(/* We'll fill this soon! */);
```
`setTimeout` has two inputs &mdash; the first input is a [*function*](functions) which we will use to store the code that we want to run. Let's create a function that we can use! (make sure you have the console open ([see above](#console)), so you see the `console.log`)
```JavaScript
function myTimeoutFunction() {
    console.log('3 seconds have passed!');
}

var myTimeout = setTimeout(myTimeoutFunction);
```
If you run your code now, it will log this instantly &mdash; because we haven't set how long we want to wait for! We do this using the second input of `setTimeout` &mdash; this is the amount of time that we want to wait in *milliseconds*. A millisecond is 1/1000 of a second. So if we want to wait 3 seconds, we'd set it to `3000`! Let's try it out&hellip;
```JavaScript
function myTimeoutFunction() {
    console.log('3 seconds have passed!');
}

var myTimeout = setTimeout(myTimeoutFunction, 3000);
```
Run your code &mdash; now it logs three seconds after loading the page!

You can tweak the number of milliseconds to change how long it waits :)

## Intervals
Intervals let you run a piece of code over and over again, with a particular amount of time in between each repetition. Similarly to `setTimeout`, it has two inputs &mdash; the function that you want to repeat, and the amount of time that you want to wait (in between each repetition).

See if you can make our code `console.log` something every 5 seconds using the information above (if you can't that's fine &#x1F609;)&hellip;
```JavaScript
function myIntervalFunction() {
    console.log('I will log every 5 seconds!');
}

var myInterval = setInterval(myIntervalFunction, 5000);
```
{: .reveal}

Awesome! That's how you can do a certain task every X seconds. This can be very useful for many tasks such as checking internet connection or seeing if there are updates for some data.

## Clearing timeouts and intervals
Let's say you set a timeout for 1 minute, but then you change your mind and don't want it to run? Or if you've set an interval and want to stop it repeating forever? This is where `clearTimeout` and `clearInterval` come in handy.

It's pretty simple &mdash; we can just use `clearTimeout(myTimeout)` or `clearInterval(myInterval)`.

Let's try clearing our timeout as soon as it's set &mdash; this means that it won't do anything! See if you can work out what the code will be&hellip;
```JavaScript
function myTimeoutFunction() {
    console.log('3 seconds have passed!');
}

var myTimeout = setTimeout(myTimeoutFunction, 3000);

clearTimeout(myTimeout);
```
If you run this code, it won't log anything. This is because the timeout is canceled before it's finished waiting!

Now let's try out `clearInterval`! Start by putting this code from before into your JavaScript:
```JavaScript
function myIntervalFunction() {
    console.log('I will log every 5 seconds!');
}

var myInterval = setInterval(myIntervalFunction, 5000);
```
Run the code &mdash; just like before, you'll see it logging every 5 seconds in the console. When you're ready, type `clearInterval(myInterval)` into the console. This is just like putting it in our JavaScript, except we can run it when we want to. After you type that and press the Enter key, you'll see that it stops logging every 5 seconds.

Let's put a few of these concepts together, and stop the interval automatically after 22 seconds. See if you can work it out all by yourself! You can always take a peek if you need some help&hellip;
```JavaScript
function myIntervalFunction() {
    console.log('I will log every 5 seconds!');
}

var myInterval = setInterval(myIntervalFunction, 5000);

function myTimeoutFunction() {
    clearInterval(myInterval);
}

var myTimeout = setTimeout(myTimeoutFunction, 22000);
```
{: .reveal}

There we go! As you can see, we start by setting an interval. Then we set a timeout to stop the interval! If you're bothered to wait 22 seconds, you should see that it stops after 4 `console.log`s.

## Extension &mdash; log the time every second!
See if you can make your code `console.log` the time every second! If you don't already know about JavaScript times, you might want to check [this article][dates-and-times] first.

See if you can get it working! Below is a solution, but there are many different ways of doing it! (hint: you might want to convert the time to a string)

```JavaScript
function myIntervalFunction() {
    console.log(new Date().toLocaleTimeString());
}

var myInterval = setInterval(myIntervalFunction, 1000);
```
{: .reveal}

Managed to solve it? Congrats! Now you have a basic clock! You could even try [combining it with some HTML][dom] and CSS to make a pretty clock website &#x1F60F;

Didn't quite get it? That's okay, you'll get more used to this the more you practice!

## Conclusion
Woo! That's the end! I hope you learned something useful. Timeouts and intervals can be really handy for once you want to start having specific timings for different things on your website.

If you found this article helpful, [share it][share]! Someone else might find it helpful too, and then I'll feel happy inside &#x1F917;&#x1F604;

If you have any feedback, need help or just wanna say hi, feel free to do so [down in the comments][comments], or via the live chat widget in the corner.

If you found this article valuable, I'd really appreciate it if you [bought me a coffee][coffee] &mdash; it takes lots of time and effort to write these articles and maintain this site, and you get to read it all for free!

And finally, don't forget to [join the newsletter][newsletter] to receive great quality curated web development tutorials once a week from Code The Web and around the internet.

See you next time!! &#x1F600;

[functions]: /javascript-functions/
[loops]: /for-and-while-loops-javascript/
[dates-and-times]: /javascript-dates-and-times/
[dom]: /javascript-dom/

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css
[js]: /learn/js
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
[coffee]: {{site.donate}}
[patreon]: {{site.patreon}}
