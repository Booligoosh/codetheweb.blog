---
layout: post
title: The complete guide to JavaScript functions
image: '/assets/img/posts/javascript-functions/cover.jpg'
photoCred: [Luca Bravo,XJXWbfSo2f0]
tags: JavaScript
keywords: "JavaScript functions, functions, functions in JavaScript, returning functions, JavaScript returning functions, JavaScript, Learn JavaScript"
checked: [grammarly]
---
Functions are one of the most useful features of JavaScript. Learn about function inputs, outputs, variable scopes and more in this article!

## Getting started!
First of all, I encourage you to follow along in this article. It will help you learn better, and also help you to remember what you have done. Let's start by making a new HTML file with a `<script>` tag in it:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript Functions</title>
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

## What is a function?
A function is simply a bit of JavaScript code which you can run again and again. You can even give it with different inputs and outputs!

## The syntax
For the moment, let's look at the simplest type of function:
```JavaScript
function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}
```
First, we're declaring the function. We do this by saying the word `function ` and then the name of your function. This is similar to how we declare variable (`var variableName` is similar to `function functionName`). After the name, there is an empty set of brackets / parentheses / whatever you call these things: `()`.

What's the point of them if they're empty though? Well, this is where we put *inputs* for the function. At the moment, our function doesn't have any inputs so we leave it empty. I'll get onto inputs a bit further on in this article (get excited &#x1F609;).

After that, we have a set of curly brackets (the ending one is on the fourth line). Inside these curly brackets goes all the code in the function.

## Running (aka *'calling'*) a function
Now you know how it works, let's run it! Put it in your `<script>` tag, save, and reload the page...

What!?? Nothing happened! Well, here's the thing &mdash; we've only *declared* the function, not actually run it. We've just said "hey magical computer, here's this bit of code and it's called `myFirstFunction`". However, we haven't told the computer to run the code inside the function! Here's how we do it:
```JavaScript
myFirstFunction();
```
As you can see, we run it by referring to its name. We then have an empty set of brackets. This is where the inputs for the function would go, but we don't have any inputs just yet so again we leave them empty. Time to run your function! See if you can work out where to put it in the code:
```JavaScript
function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}

myFirstFunction();
```
{:.reveal}
In this bit of code, it's at the end. However, it can be before the function too! This is very different to variables, where you have to declare the variable *before* using it. This wouldn't work:
```JavaScript
alert(myVariable);

var myVariable = "Hello";
```
However, this would:
```JavaScript
myFirstFunction();

function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}
```
It is common practice to put all your function definitions at the bottom of your script, but it doesn't really matter that much.

Ooookay, here's the moment that you've probably been waiting for &mdash; time to try it out! Make sure that your script looks like the code above (although remember that it doesn't matter if you run the function before or after declaring it). Save, reload and Ta-da! Our code inside the function has now been run!

At first, this may seem like overkill &mdash; why not just run the code? Well, imagine if you wanted to make this particular bit of code run at many different points inside your script &mdash; inside loops, if statements, and more. Well, then only having to say `myFirstFunction();` would come in handy! Especially if your function was 30 lines long &#x1F605;

## Functions with inputs
In the function `myFirstFunction`, we set a variable (`x`) to `5` and then alerted that (`10`). What if we were to make a function called `alertDouble` which alerted double *any* number?

In this case, we'd have one input &mdash; let's call it `num`. Here's how the function declaration would look with `num` as our input:
```JavaScript
function alertDouble(num) {
    
}
```
Now inside the curly brackets, we can use `num` as a variable! (**only inside the curly brackets**)

See if you can work out how the finished function would look...
```JavaScript
function alertDouble(num) {
    alert(num * 2);
}
```
{:.reveal}

Did you get it right? If so, great! If not, don't worry &mdash; hopefully, you'll start to get it by the end of this article &#x1F64F;

## Running functions with inputs
Time to run our function! Let's try doubling a few different numbers:
- 2
- 70
- 1024

First of all, you can leave this part of your existing code if you want:
```JavaScript
function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}
```
However, we're done with it and don't want to run it anymore. So, delete or comment out this line:
```JavaScript
myFirstFunction();
```

Instead, we want to call our new function `alertDouble`! First, we need to add the function declaration to the end of the code:
```JavaScript
//myFirstFunction();

function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}

function alertDouble(num) {
    alert(num * 2);
}
```

Time to run our function! If it didn't have any inputs, we would simply say `alertDouble()`. However, we need to put the input for `num` inside the brackets! So, let's try doubling 2 &mdash; see if you can guess the code!
```JavaScript
alertDouble(2);
```
The `2` inside the brackets then becomes `num` inside the function when it is run! Try it out...
```JavaScript
//myFirstFunction();

alertDouble(2);

function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}

function alertDouble(num) {
    alert(num * 2);
}
```

Woo! It alerted `4`! &#x1F389;
Let's try with the other values...
```JavaScript
//myFirstFunction();

alertDouble(2);
alertDouble(70);
alertDouble(1024);

function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}

function alertDouble(num) {
    alert(num * 2);
}
```
Yay! Now it alerts `4`, `140` and then `2048`. Time to move on...

## Functions with multiple inputs
In the function `alertDouble`, we multiplied `num` by `2`. What if we wanted to make a function called `alertMultiplied` where we alerted one input multiplied by another input? Here we'd need two inputs: let's say `num1` and `num2`.

First of all, we need to declare the function! When functions have multiple inputs, they are separated by commas &mdash; see if you can work it out!
```JavaScript
function alertMultiplied(num1, num2) {
    
}
```
{:.reveal}
Then, it's just a simple matter of alerting `num1` multiplied by `num2`!
```JavaScript
function alertMultiplied(num1, num2) {
    alert(num1 * num2);
}
```
## Running functions with multiple inputs
First of all, comment out (or delete) all the `doubleMe` function calls like so:
```JavaScript
//myFirstFunction();

//alertDouble(2);
//alertDouble(70);
//alertDouble(1024);

function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}

function alertDouble(num) {
    alert(num * 2);
}
```
Now, let's add the `alertMultiplied` function declaration to the end of the code!
```JavaScript
//myFirstFunction();

//alertDouble(2);
//alertDouble(70);
//alertDouble(1024);

function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}

function alertDouble(num) {
    alert(num * 2);
}

function alertMultiplied(num1, num2) {
    alert(num1 * num2);
}
```
Finally, it's time to run the function. Let's try multiplying `5` by `3` and `8` by `21`. See if you can work out the code (hint: the inputs are separated by commas just like in the declaration &#x1F609;)
```JavaScript
//myFirstFunction();

//alertDouble(2);
//alertDouble(70);
//alertDouble(1024);

alertMultiplied(5, 3);
alertMultiplied(8, 21);

function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}

function alertDouble(num) {
    alert(num * 2);
}

function alertMultiplied(num1, num2) {
    alert(num1 * num2);
}
```
{:.reveal}
Save, reload and see what happens! It should alert `15` followed by `168`.

## Functions with an output (functions that 'return' something)
As well as having inputs, functions can also have outputs! However, a function can only have one output (unlike inputs).

Let's make a function called `triple`. However, unlike `alertDouble`, it won't alert the result. It will output it!

To output the result, we simply say inside the function `return ` and then whatever we want to output. Here's an example:
```JavaScript
function introduce() {
    return 'Hello, I'm Johnny.';
}
```
Note that it *doesn't require brackets!* However, you can put them in because they're optional. I prefer to put them in because it makes it easier to understand, but it's up to you. It would look like this with brackets:
```JavaScript
function introduce() {
    return('Hello, I'm Johnny.');
}
```
Obviously, the value returned doesn't have to be a string.

Let's try making our `triple` function! It will need one input, `num`. And it will need to output triple that number. See if you can work out how the function would look!
```JavaScript
function triple(num) {
    return(num * 3);
}
```
{:.reveal}

## Running functions with an output (getting the output)
That's all fine and well, but how do we actually *get* the output of this function? We do that by running it!

The actual function call will become equal to the output, just like a variable is equal to a value. We can then use the function just like a variable. For example, we could say the following:
```JavaScript
alert( triple(10) );

function triple(num) {
    return(num * 3);
}
```
Here, we are alerting the output of `triple(10)`. Try it out! Don't forget to add the declaration and comment out the calls of `alertMultiplied`:
```JavaScript
//myFirstFunction();

//alertDouble(2);
//alertDouble(70);
//alertDouble(1024);

//alertMultiplied(5, 3);
//alertMultiplied(8, 21);

alert( triple(10) );

function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}

function alertDouble(num) {
    alert(num * 2);
}

function alertMultiplied(num1, num2) {
    alert(num1 * num2);
}

function triple(num) {
    return(num * 3);
}
```
Woo! The code will alert `30`! We can also use the `triple` function just like any other number:
```JavaScript
var x = (triple(6) + 3) * 2;
alert(x);
```
This is simply like saying `(18 + 3) * 2`, which is equal to `42` (the meaning of life of course &#x1F609;). Try it out!
```JavaScript
//myFirstFunction();

//alertDouble(2);
//alertDouble(70);
//alertDouble(1024);

//alertMultiplied(5, 3);
//alertMultiplied(8, 21);

alert( triple(10) );
var x = (triple(6) + 3) * 2;
alert(x);

function myFirstFunction() {
    var x = 5;
    alert(x * 2);
}

function alertDouble(num) {
    alert(num * 2);
}

function alertMultiplied(num1, num2) {
    alert(num1 * num2);
}

function triple(num) {
    return(num * 3);
}
```
Now after alerting `30`, our code will also alert `42`! &#x1F389;

## Variable scopes within functions
We're nearly done now! &#x1F605;
However, there's one more important thing that you need to know about functions &mdash; Variables declared inside functions do not work outside of functions. Whaaat? Here's an example &mdash; try it out!
```JavaScript
function myFunc() {
    var myVar = 3;
}

myFunc();
alert(myVar);
```
It should alert 3, right? Nope! Because `myVar` was declared *inside* the function, it does not exist outside the function. The code will not work and give you the following error:
> Uncaught ReferenceError: myVar is not defined

However, this *does* work!
```JavaScript
var myVar = 1;

function myFunc() {
    myVar = 3;
}

myFunc();
alert(myVar);
```
The code will alert `3`! Because `myVar` has already been declared *outside* the function, the code knows that it exists. It will be changed inside the function, and then the code can still alert it because it was defined outside the function.

This is known as the *global* scope. It means that for the rest of the code, `myVar` will be defined. In the first example where `myVar` was declared inside the function, it declared in the *function* scope. It means that the variable will only be defined *inside* the curly brackets of the function.

This might take a while to wrap your head around, but you'll get it eventually. The main thing that you need to remember is that **if you want to use a variable outside a function, declare it outside the function first**. You don't even have to say `var myVar = 1;` &mdash; you can literally just say `var myVar;` and that is enough. I may do an article focusing more on variable scopes in [future][scopes].

## Conclusion
Whew! &#x1F605;
That was a lot to cover, so good job making it all the way through! As always, keep practicing and you will eventually get it. If you need any help, feel free to [shoot me an email][contact] or [hit the comments][comments].

If you learned something from this article, I'd really appreciate it if you [bought me a coffee][donate]. I've written 53,000 words and counting all for free, to help people like you learn web development. It would be really awesome if you could give me a small tip in return &#x1F609;. While it may not seem like a lot, it all adds up. If every person who read an article on this site gave $1, I'd probably be earning close to the minimum hourly wage by now!

If you know someone who this article or this blog would benefit, go ahead an [share it with them][share] &mdash; they'll thank you later &#x1F61C;

Finally, if you want to receive some web-dev goodness in your inbox each week to help you learn JavaScript, enter your email and I'll do just that &#x1F61C;
{% include newsletter.html %}

Okay, that's it for today! Have fun coding and I'll see you next time, where I'll be talking all about [arrays (aka. lists) in JavaScript][arrays]. See you then! &#x1F44A;

[scopes]: {{site.newsletter}}
[arrays]: /javascript-arrays/

[contact]: {{site.contact}}
[html]: /learn/html/
[css]: /learn/css/
[js]: /learn/js
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
[donate]: {{site.donate}}