---
layout: post
title: All about IF statements and booleans in JavaScript!
image: '/assets/img/posts/if-statements-boolean-operators/cover.jpg'
photoCred: [Emily Morter,8xAA0f9yQnE]
tags: JavaScript
keywords: "If, If statements, Boolean, Booleans, If else, Else, Else if, Boolean operators, JavaScript, Learn JavaScript"
checked: [grammarly]
---
If statements are another core part of JavaScript: they let you control what code is actually executed, based on comparing values and/or variables. I'll also teach you about all the cool stuff that you can do with booleans! Read on below...

## Getting started!
First of all, I want to encourage you to follow along in this article! Let's start by making a new HTML file with a `<script>` tag in it:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>If statements are awesome!</title>
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

## What is an if statement?
In essence, an if statement simply executes some code if a value is equivalent to `true`.

> ## Terminology
> In this article, I'll be using the terms 'brackets' and 'curly brackets'. When I say brackets I mean these: `( )` And when  I say curly brackets I mean these: `{ }`. The only reason that I am saying this is because I know that depending on which part of the world you come from, you may have different names for your square, curly and normal brackets (eg. parentheses).

## The if statement syntax
Here's what a simple if statement looks like:
```JavaScript
if (true) {
    alert('Yay!');
}
```
Let's have a look at what's going on here. In essence, we're simply saying if the stuff inside the brackets is equivalent to `true`, execute the code inside the curly brackets. Note here that I said *equivalent* to `true`. This doesn't mean that the text between the brackets literally has to say `true`. It just means that it needs to be a statement that is true. For example: `1 + 3 == 4` is `true`.

Don't worry, I'll get into how this works later (I'll be speaking more about JavaScript [math][math] in a later article). It's basically just 1 + 3 = 4. 1 + 3 *does* equal 4, so it is equivalent to `true`. Therefore, if we put this inside the brackets our code will run! Let's try it out. Put the following code in your `<script>` tag, then reload the page:
```JavaScript
if (1 + 3 == 4) {
    alert('Yay!');
}
```
Now, let's try and make it so that the alert *doesn't* run. We would do this by making the statement inside the brackets equivalent to `false`:
```JavaScript
if (1 + 3 == 5) {
    alert('Yay!');
}
```
(your high school math teacher wouldn't be proud)

Now, because the statement in the brackets is `false`, the code inside the curly brackets will not run! Try it out yourself... It will no longer alert "Yay!"

You have now learned the basic `if` statement syntax!

## Boolean operators
It's time to take a bit of a closer look at what gives us `true` and what gives us `false`.

Let's use the statement from above as an example:
```JavaScript
1 + 3 == 4 /* Returns true */
```
Here, we're using the double equals sign (`==`) to compare the two sides: `1 + 3` and `4`. This comparison sign says is saying "if they are *equal*, then return `true`". But we can compare in other ways as well! For example:
```JavaScript
1 + 3 != 4 /* Returns false */
```
Here, we're telling the computer to return `true` if `1 + 3` is *not* equal to `4`. `1 + 3` is obviously equal to `4`, so it returns `false`.

There are a few other comparisons that we can use - here is a list of the basic comparison signs:

| Sign | Returns `true` *if*...                                        |
| ---- | ------------------------------------------------------------- |
| `==` | Both sides are **equal**                                      |
| `!=` | Both sides are **not equal**                                  |
| `<`  | The left side is **less than** the right side                 |
| `>`  | The left side is **greater than** the right side              |
| `<=` | The left side is **less than or equal to** the right side     |
| `>=` | The left side is **greater than or equal to** the right side  |

Let's try a few of them out... Challenge Time!

**Question 1:** Alert "Not fake news!" if `4` is less than `410`.
```JavaScript
if (4 < 410) {
    alert('Not fake news!');
}
```
{:.reveal}

**Question 2:** Alert "5 is the greatest!" if `5` is greater `6`.
```JavaScript
if (5 > 6) {
    alert('5 is the greatest!');
}
```
{:.reveal}

**Question 3:** Alert "JavaScript is awesome!" if `3` is less than or equal to `3`.
```JavaScript
if (3 <= 3) {
    alert('JavaScript is awesome!');
}
```
{:.reveal}

## Multiple true/false statements
What if we want to combine multiple statements? For example, what if we want to say if `3 + 5` equals `8` *and* `2 + 2` equals `4`? We have two main ways of combining statements like the one above: *and* and *or*. *And* is simply `&&`, and *or* is simply `||` (that's 2x the key with the vertical line on it, usually it will be `SHIFT + backslash`).

Here's how `&&` (*and*) works:
```JavaScript
true && true /* Returns true */
```
```JavaScript
true && false /* Returns false */
```
```JavaScript
false && false /* Returns false */
```

And here's how `||` (*or*) works:

```JavaScript
true || true /* Returns true */
```
```JavaScript
true || false /* Returns true */
```
```JavaScript
false || false /* Returns false */
```

It's important to note here that `true || true` is equal to `true`, not `false`. This is because **in JavaScript, _or_ actually means _and or_**. Don't ask me why, programming languages sometimes have weird things like that.

Now, let's substitute in a few real statements instead of just `true` and `false`. Here's an example:
```JavaScript
(65 > 25) || (5 + 1 == 5) /* Returns true */
```
You don't need to have the brackets, but I've put them in brackets just to make it a bit clearer (you are allowed to do that in JavaScript). As you can see, the code above is simply this:
```JavaScript
true || false /* Returns true */
```
The only difference is that `true` has been replaced with `65 > 25` which is *equivalent* to `true`, and similarly `false` has been replaced with `5 + 1 == 5` which is equivalent to `false`.

Your turn to try! See if you can complete the following tasks:

**Question 1:** Alert "The Universe is not broken" if `5` is equal to `5` and `3` is equal to `3`.
```JavaScript
if (5 == 5 && 3 == 3) {
    alert('The Universe is not broken');
}
```
{:.reveal}
**Question 2:** Alert "At least one of the statements is correct" if `1` plus `2` equals `4` or `1` plus `2` equals `3`.
```JavaScript
if (1 + 2 == 4 || 1 + 2 == 3) {
    alert('At least one of the statements is correct');
}
```
{:.reveal}
**Question 3:** Alert "I am such a rebel" if `5` plus `5` is not equal to `10` or `2` plus `4` is greater than or equal to `7`.
```JavaScript
if (5 + 5 != 10 || 2 + 4 >= 7) {
    alert('I am such a rebel');
}
```
{:.reveal}
**Question 4:** Alert "42 is between 21 and 47" if `42` is greater than `21` and `42` is less than `47`.
```JavaScript
if (42 > 21 && 42 < 47) {
    alert('42 is between 21 and 47');
}
```
{:.reveal}

Woo! Hopefully, you did okay &#x1F609;

### One more thing on boolean operators...
There's one final super-handy trick that you should know about booleans in JavaScript... By putting a single exclamation mark before a statement, you *reverse* the boolean. For example, `!true` would equal `false` and `!false` will equal `true`.

If putting the exclamation before a statement with spaces or symbols in between (eg. `1 + 2 == 3` as supposed to `true`), don't forget to surround it with brackets! This ensures that the exclamation mark works for the whole statement. Here's an example:
```JavaScript
if( !(5 + 2 < 3) && 5 + 6 == 11) {
    alert('Woo!');
}
```
As you can see, the `5 + 2 < 3` gets wrapped in brackets so that the exclamation mark applies to all of it.

It's worth noting that in the example above, we didn't really need the exclamation mark in the first place - `!(5 + 2 < 3)` is the same as `5 + 2 >= 3`. However, it is still useful to know about this feature and can come in handy when making more complex statements.

## ...Else?
We can also give our if statement an `else`, which will run if the code inside the first set of curly brackets *doesn't* run - in other words, if the statement inside the normal brackets is `false`. Here's what it looks like:
```JavaScript
if ( /* some statement... */ ) {
    /* some code to be run if that statement is true */
} else {
    /* some code to be run if that statement is not true */
}
```
Try it out! Write some code that will alert "2 is less than 1" if `2` is less than `1` and will alert "2 is not less than 1" otherwise...
```JavaScript
if (2 < 1) {
    alert('2 is less than 1');
} else {
    alert('2 is not less than 1');
}
```
{:.reveal}

There we go! Else statements are that simple! They simply run if the first set of curly brackets *doesn't* run.

> **NOTE:** It is very important that the `else` comes straight after the end of the `if`, with no other code in between.

## Else if
Wait, it could get even more confusing? Sort of. Here's what an `if` statement looks like with both an `else if` and an `else`:
```JavaScript
if ( /* some statement... */ ) {
    /* some code to be run if that statement is true */
} else if ( /* another statement... */ ) {
    /* some code to be run if the first statement is false and the else if statement is true */
} else {
    /* some code to be run if nothing has been run yet */
}
```

This may look confusing at first. However, let's pretend we're the computer and look at it from the computer's point of view.

First of all, we have an `if` statement. If the stuff inside the brackets is true, we execute the stuff in its set of curly and stop. If it is not true, we move on to the else if. If the stuff inside *that* set of brackets is true, we run the stuff in *its* set of curly brackets and stop. Finally, if we are still going and nothing has been true yet, we execute the stuff in the `else`'s pair of curly brackets.

Okay, you can stop being a computer now.

Try doing one of these yourself - we'll use the example from before:
```JavaScript
if (2 < 1) {
    alert('2 is less than 1');
} else {
    alert('2 is not less than 1');
}
```
Now, we want it to alert "2 is equal to 1" if `2 == 1`, otherwise alert "2 is less than 1" if `2 < 1` and alert "2 is greater than 1" if none of the others are true. Have a go!
```JavaScript
if(2 == 1) {
    alert('2 is equal to 1');
} else if (2 < 1) {
    alert('2 is less than 1');
} else {
    alert('2 is greater than 1');
}
```
{:.reveal}

Here, the computer would evaluate `2 == 1` - this is `false`, so we move on to the next statement - our `else if`, `2 < 1`. This is again `false`, so we move on to the `else` and execute the code inside of that set of curly brackets: `alert('2 is greater than 1')`.

### Extension:
1. Make a script where the `if` code runs, one where the `else if` code runs and one where the `else` code runs.
2. **You can have multiple else if's in an if / else if / else statement!!** Try making one like the example below:
```JavaScript
if (1 == 5) {
    alert('1 is 5');
} else if (1 == 4) {
    alert('1 is 4');
} else if (1 == 3) {
    alert('1 is 3');
} else {
    alert('None of those were correct!');
}
```

## Why does any of this matter?
In this article, I mainly used numbers to illustrate how if statements work more clearly. However, once we put variables in our if statements instead of just set values, they become a super-useful tool and one of the core parts of JavaScript!

## Conclusion
Woo! That was intense &#x1F525; &#x1F525;

I hope you learned a lot today, and it helped you in your [quest to learn JavaScript][js]! If it was helpful, I'd really appreciate it if you [shared this article][share] or [signed up to the newsletter][newsletter] to receive new posts fresh in your inbox!

Also, I'd really appreciate it if you [bought me a coffee][donate] &#x2615; - this article is over 2,500 words and has taken over 2.5 hours to write! And c'mon, it's only a few bucks. That said, I don't want you to feel like you have to. In fact, go ahead and don't. Be a rebel. I won't get offended and will love you all the same. I'm perfectly happy giving my content away free - otherwise, you would be paying to read this right now! &#x1F609; &#x1F911;

Okay, so that's it for today! Don't forget to head to the [comments][comments] if you have any questions or feedback.

Next time, I'll be writing about some basic math in JavaScript. I'll be talking about stuff like multiplication, rounding, square roots and more - way beyond the simple `1 + 2` that we learned today! See you [next time][math] &#x1F609;

> **P.S.** Tomorrow marks 5 months since my first article on Code The Web! &#x1F389; &#x1F389;  In that time, I've written nearly 50,000 words and 30 articles. I'm still really enjoying blogging, creating content and sharing my knowledge with Y'all, and love the chats that I have with [subscribers][newsletter] and other members of the community. Keep on being awesome, and if you wanna chat then feel free to [contact me!][contact]
> 
> (and if ya wanna say thanks, I wouldn't mind a [coffee][donate] &#x1F609; &#x2615;)

[math]: /2018/03/18/javascript-math/

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css
[js]: /learn/js
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
[donate]: {{site.donate}}