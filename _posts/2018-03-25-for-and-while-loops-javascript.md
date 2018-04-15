---
layout: post
title: For loops and while loops in JavaScript
image: '/assets/img/posts/for-and-while-loops-javascript/cover.jpg'
photoCred: [Ian Romie Ona,x6QdZQkuroI]
tags: JavaScript
keywords: "For loop, While loop, For loops, While loops, For, While, For and while loops in JavaScript, For loops in JavaScript, While loops in JavaScript, Loops in JavaScript, JavaScript, Learn JavaScript"
checked: [grammarly]
---
Loops let you run code as many times as you want! They are really powerful, and a great thing to know. Learn them once and for all in this article from Code The Web!

## Getting started!
Welcome to another post on Code The Web! First of all, I want to encourage you to follow along in this article. It will help you learn better, and also help you to remember what you have done. Let's start by making a new HTML file with a `<script>` tag in it:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>For and while loops in JavaScript</title>
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

## What are loops in JavaScript?
Loops simply run a chunk of code multiple times. For example, take a look at this code:
```JavaScript
alert('Hi!');
```
If we wanted to repeat this five times, we could do this:
```JavaScript
alert('Hi!');
alert('Hi!');
alert('Hi!');
alert('Hi!');
alert('Hi!');
```
However, this is very bad programming and can get very unwieldy if you need to repeat large chunks of code hundreds of times. Also, it is not very useful. For example, what if wanted it to repeat `x` times? This is where loops come in handy. The amount of times is often determined by variables, but can also be determined by actual numbers. Loops can be especially useful for doing something to each element in an [array][arrays] (each item in a list) but come in handy in many of situations.

## While loops
> Wait, if we're doing while loops first then why did the title start with "for"? I don't know really, it just sounds better that way.

A while loop keeps repeating code over and over again while a certain statement is `true` (i.e. until it is `false`). Here is the syntax:
```JavaScript
while ( /* something that's true or false */ ) {
    // Do some stuff
}
```
It's that simple! Here's an example which keeps finding a random number from `0`-`1` until it is over `0.2`.
```JavaScript
while(Math.random() > 0.2) {
    alert('hi');
}
```
But what if we wanted it to alert the number? We can't write `alert(Math.random())` because then it would find a *new* random number to alert. So, we'd have to make a variable and then set it to the random number at the end of each loop. It would then compare *this* number, and would have it stored in a variable so we can alert it later:
```JavaScript
var randomNum = Math.random();

while(randomNum > 0.2) {
    alert(randomNum);
    randomNum = Math.random();
}
```
Take a moment to look at that code. First, we set the variable `randomNum` to a random number. We then see if it is greater than  0.2. If it is, we run the stuff inside the curly brackets. This alerts the number and then changes `randomNum` to a new number. We then check to see if *this* number is greater than `0.2`. If it is, we run the stuff inside the curly brackets again, and it goes on and on...

If the number is *not* greater than `0.2`, the stuff in the brackets doesn't run, and the program continues. It **does not** then keep running until the number is greater than `0.2` again.

> ## &#x2622;&#x2622; A word of warning... AVOID INFINITE LOOPS! &#x2622;&#x2622;
> Infinite loops are loops that will keep running forever. They can happen with both for loops *and* while loops. Here is a very basic example &mdash; **DON'T TRY IT UNLESS YOU'RE FINE TO LOSE ALL YOUR TABS**
```JavaScript
while(true) {
    // some code
}
```
> It will freeze the page, and even entire browser depending on your computer. You will usually not be able to close the tab, and will probably need to quit and reopen the entire browser! **So, always be on the lookout for infinite loops.** They might not always be as obvious as `while(true)`. It could be *any* statement that will always evaluate to `true`.

## For loops
Let's say you wanted to alert "Hi" five times. As I said earlier, this is a very bad way to do things:
```JavaScript
alert('Hi!');
alert('Hi!');
alert('Hi!');
alert('Hi!');
alert('Hi!');
```
However, how would we do this with a while loop? We'd have to set a counter variable, and then add one to it each time:
```JavaScript
var counter = 1;

while(counter <= 5) {
    alert('Hi!');
    counter = counter + 1;
}
```
First, let's make this code follow better programming conventions. Instead of using the `counter` variable, we should name it `i`. This is simply a convention and stands for 'iteration'. You don't have to use `i`, but it is a good idea to do so. It will make your code more easily integrated with other developers' codes, and make everything much more consistent.

Also, we're starting the counter on `1`. In programming, it is a convention to start counter variables on `0`. Why not `1`? Well, in most programming languages, the first element in an [array][arrays] (list) is item `0`, not item `1`. Seeing as loops are often with arrays, it is good programming convention to start all for loops at `0`. While it may seem confusing at first, it will make your code a lot less confusing as you progress in learning JavaScript. Because `i` is now one less, we'd say `counter < 5` instead of `counter <= 5`.

Finally, there's the line where we increment `i` by 1. Instead of saying `i = i + 1`, there's a better way to do this! You can simply say `i++;`.

So, here's what our while loop looks like after getting it to follow good programming conventions ('best practices'):
```JavaScript
var i = 0;

while(i < 5) {
    alert('Hi!');
    i++;
}
```

Believe it or not, there is a much faster, better and easier way to do this using JavaScript! It's by using a for loop:
```JavaScript
for(var i = 0; i < 5; i++) {
    alert('Hi!');
}
```
Let's take a look at this code. It's quite similar to a while loop, except all the different parts have been moved around. Again, we're using `i` as our counter variable.

So first, we're setting `i` to `0`. Instead of doing this before the loop, we do it inside the brackets of the for loop, right at the start.

After the semicolon, we have a [boolean][booleans] expression (something that evaluates to `true` or `false`). This is like the part from the while loop, and operates in the same way! The stuff inside the curly brackets will run while that statement is equivalent to `true` (in this case, `i < 5`).

After the second semicolon, we have our final bit of code inside the brackets: `i++`. This is just our last line inside the curly brackets from the while loop! In short, the code after the second semicolon will run at the end of each repetition of the loop.

Here's a summary of the for loop syntax to make it easier to understand:
```JavaScript
for( /* Set your counter variable */ ; /* Repeat while this is true */ ; /* Run this at the end of each repetition */ ) {
    // Your code!
}
```
(hover over the code and scroll sideways to see it all, or drag sideways on a touchscreen)

Try to make a for loop that alerts "Yay" three times. **Don't use the code for repeating five times to help!** See if you can do it using just the syntax code to help you (or try without, I've hidden the syntax code just in case you want to)
```JavaScript
for( /* Set your counter variable */ ; /* Repeat while this is true */ ; /* Run this at the end of each repetition */ ) {
    // Your code!
}
```
{:.reveal}
----
Click here for the answer, to see if you got it right!
```JavaScript
for(var i = 0; i < 3; i++) {
    alert('Yay');
}
```
{:.reveal}
----
Also, you can use `i` *inside* your code in the curly brackets! While this mostly comes in handy for iterating through [arrays][arrays], it can be used however you want. For example, alerting the numbers from 0 - 4:
```JavaScript
for(var i = 0; i < 5; i++) {
    alert(i);
}
```
Note that it is from 0 - 4 not 1 - 5, because all loops should start at 0! If you wanted to alert the numbers from 1 - 5, I would do the following:
```JavaScript
for(var i = 0; i < 5; i++) {
    alert(i + 1);
}
```

## Conclusion
Congrats on learning all about for loops and while loops! I know that when I was learning, I found the concept of for loops especially confusing. Remembering what the three parts inside the brackets went was quite hard, and the only way that I finally got it was through practice. So try making a few different things with for (and while) loops! It is the best way to learn it.

If you got something out of this article, I'd really appreciate if you [shared it][share] or [bought me a coffee][donate]. It's $4 that would go a long way, and make the rest of my day awesome.

If I'd spent the time on Code The Web working at the minimum wage instead, I would have earned $1,770 by now! But instead I've dedicated my time to you guys and to helping people learn, and only earned $16. So it would be great if you could [give a little thanks in return][donate], I'd really appreciate it! &#x1F618;

If you want to receive more articles like this on web development as well as awesome web development articles from around the web, [be sure to sign up for the weekly newsletter!][newsletter] I only send an email once a week with a roundup of awesome articles. I'll leave this handy little form below...
{% include newsletter.html %}
See you next time, where I'll be talking about [functions in JavaScript!][functions] They are one of the most integral parts of JavaScript (I know I've been saying that for like 4 articles now, but it's true &#x1F609;). [See you then!][functions]

> **P.S. In this post, I officially passed 50,000 words! &#x1F389;&#x1F601;** It's been an awesome time writing this blog (nearly 6 months!), and I will definitely continue into the future! I want to thank all the fans, [newsletter subscribers][newsletter] and readers for actually coming and reading what I have to say. I really didn't think that Code The Web would have so many visitors, and really appreciate every single one of you all. &#x1F496;

[arrays]: {{site.newsletter}}
[booleans]: /2018/02/28/if-statements-boolean-operators/
[functions]: /2018/04/05/javascript-functions/
[wordcount]: /wordcount/

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css
[js]: /learn/js
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
[donate]: {{site.donate}}