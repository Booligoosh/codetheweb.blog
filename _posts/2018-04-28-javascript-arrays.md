---
layout: post
title: The complete guide to JavaScript arrays
image: '/assets/img/posts/javascript-arrays/cover.png'
tags: JavaScript
keywords: "JavaScript arrays, arrays, array, arrays in JavaScript, join, reverse, indexOf, lastIndexOf, includes, find, findIndex, map, filter, reduce, sort, splice, nested arrays, JavaScript nested arrays, nested arrays in JavaScript, JavaScript, Learn JavaScript"
checked: [grammarly]
---
Arrays are a very useful part of JavaScript, and come in handy for things from text manipulation to image processing!

Whether you're a complete beginner or coming for some more advanced array functions, this article is for you!

## The contents of this article:
First of all, sorry for another clickbait-y title. However, I promise that this is a complete guide! In fact, so complete that it needs a table of contents! I never thought I'd have to do this, but here we go...
- [What is an array?](#what-is-an-array)
- [How to reference a value in an array](#how-to-reference-a-value-in-an-array)
- [Array functions](#array-functions)
    - [string.split()](#stringsplit)
    - [array.join()](#arrayjoin)
    - [array.reverse()](#arrayreverse)
    - [array.indexOf()](#arrayindexof)
    - [array.lastIndexOf()](#arraylastindexof)
    - [array.includes()](#arrayincludes)
    - [array.find()](#arrayfind)
    - [array.findIndex()](#arrayfindindex)
    - [array.map()](#arraymap)
    - [array.filter()](#arrayfilter)
    - [array.reduce()](#arrayreduce)
    - [array.sort()](#arraysort)
    - [array.splice()](#arraysplice)
- [Nested arrays](#nested-arrays)

I know that some of you may already know the basics of arrays, in which case feel free to go to whichever of those sections you don't know already. Otherwise, start from the beginning and enjoy the ride!

Note that if you're a complete beginner to arrays, you might want to only read part of this article for the moment. Or, depending on your learning style, you might want to read the whole thing! If you're going to only read part of it, I recommend that you stop after [How to reference a value in an array](#how-to-reference-a-value-in-an-array) or [array.includes()](#arrayincludes). But don't forget to scroll down for the [conclusion](#conclusion)!

Let's get started already!

> ## &#x1F4A1; Follow along!
> First of all, I encourage you to follow along in this article. It will help you learn better, and also help you to remember what you have done. Let's start by making a new HTML file with a `<script>` tag in it:
> ```HTML
> <!DOCTYPE html>
> <html>
>     <head>
>         <title>JavaScript arrays</title>
>     </head>
>     <body>
>         <h1>JavaScript :)</h1>
>         <script>
>             // Our script will go here!
>         </script>
>     </body>
> </html>
> ```
> Once that's done, open it up in your web browser and you're ready to go! (don't forget to save and reload the page every time you make a change)

## What is an array?
An array is simply a list of values. Here is what an array looks like in JavaScript:

```JavaScript
var myArray = ['String', 8, true, myFunction()];
```

As you can see, an array is a value usually assigned to a variable. In this case, we're assigning it to the `myArray` variable. So we start by saying `var myArray = `. After that, we have a set of square brackets. Inside the square brackets are four items, separated by commas. These items can be any type of value &mdash; a string, number, boolean, [function][functions], [object][objects], or even another array! (I'll get onto that further down)

## How to reference a value in an array
Normally, we might write something like this:
```JavaScript
alert(1234);
```
However, what if we wanted to alert the `8` in the array above? Here's how you'd do it:
```JavaScript
alert( myArray[1] );
```
What!? But `8` is the second item in the array! This is because...
<blockquote style="text-align: center; font-size: 2em;"><b>Arrays start at 0!</b></blockquote>
What I mean by this is that if you want to refer to the first item of an array, you say `array[0]`, not `array[1]`. The reason isn't that important, but the point is that arrays start at `0`. In *nearly every programming language*, in fact. Because arrays start at `0`, it means that all the other numbers are one less than you expect. So above, the second item became `myArray[1]`. Similarly, the fourth item would become `myArray[3]`. The number inside the square brackets (eg. `1` from above) is the *index* of that particular item in the array.
<blockquote style="text-align: center; font-size: 2em;">&#x1F4A5;&#x1F4A5;&#x1F4A5;&#x1F4A5;&#x1F4A5;&#x1F4A5;<br><b>Arrays start at 0!</b><br>&#x1F4A5;&#x1F4A5;&#x1F4A5;&#x1F4A5;&#x1F4A5;&#x1F4A5;</blockquote>

Sorry for all the emphasis (&#x1F602;), but this is a very important point. You're going to want to remember it, or else you will get very confused later on.

Try your skills! Here's an array:
```JavaScript
var array = [4, 5, 3, 7, 'Hello', 2, 1, true, false, 0];
```
Try alerting:
1. `5`
2. `'Hello'`
3. `false`

Have a go! Put it in your `<script>` tag! See below for the answer...
```JavaScript
var array = [4, 5, 3, 7, 'Hello', 2, 1, true, false, 0];
alert(array[1]);
alert(array[4]);
alert(array[8]);
```
{:.reveal}

## Array functions
Now we're done with the basics, let's look at some functions that we can use to create, convert, and manipulate arrays. Let's get right into it! (be excited &#x1F609;)

For this section, I'm going to be using `console.log` instead of `alert`, so we can see properly what is an array and what isn't. To open the console in your browser, right-click and then click 'Inspect Element' (or something similar to that). Then click the 'Console' tab up the top. It looks something like this:
![The JavaScript console][console]

### string.split()
We can use `.split()` to turn a string into an array. Here is an example:
```JavaScript
var myString = 'Pineapples, Bananas, Carrots, and Mangoes are awesome.';
console.log( myString.split(',') );
// => ["Pineapples", " Bananas", " Carrots", " and Mangoes are awesome."]
```
(When outputted to the JavaScript console, it would look like this:)
![An array in the JavaScript console][array.split]

But **what's actually going on here?** Well, see how we say `.split(',')`? That's telling the browser to cut the string up into array items, separating them at the `,` character. Here's another example:
```JavaScript
var myString = 'Code+The+Web+Is+Awesome';
console.log( myString.split('+') );
// => ["Code", "The", "Web", "Is", "Awesome"]
```
As you can see here, we're simply splitting the string into chunks based on where the `+` symbols are. These chunks are stored in an array format.

The parameter for `.split()` doesn't have to be only one character! Take a look at the example below:
```JavaScript
var myString = 'I^$^Like^$^Money^$^!';
console.log( myString.split('^$^') );
// => ["I", "Like", "Money", "!"]
```

One awesome use for `.split()` is for splitting strings into individual characters. But how would we do this? By splitting with an empty string! Here's what I mean:
```JavaScript
var myString = 'Hello how are you today?';
console.log( myString.split('') );
// => ["H", "e", "l", "l", "o", " ", "h", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "t", "o", "d", "a", "y", "?"]
```
As you can see, we split by an empty string (`''`) and ended up with each character separated in a nice neat array! This can come in handy when you want to manipulate text in certain ways.

Moving on!

### array.join()
This is the exact opposite of `.split()`. Instead of turning a string into an array, we are turning an array into a string! The parameter is what the items will be separated by in the string. For example:
```JavaScript
var myArray = ['Dashes', 'are', 'awesome','!'];
console.log( myArray.join('-') );
// => "Dashes-are-awesome-!"
```
As you can see, it's the opposite of `.split()`. In fact, try this:
```JavaScript
var myArray = ['Dashes', 'are', 'awesome','!'];
console.log( myArray.join('-').split('-') );
// => ['Dashes', 'are', 'awesome','!']
```
As you can see, we're just joining it with dashes and then splitting it up again, making it return the original array!

Next up...

### array.reverse()
This does just what you expect &mdash; it reverses an array! Here's an example:
```JavaScript
var myArray = [4,5,6,7,8];
console.log( myArray.reverse() );
// => [8, 7, 6, 5, 4]
```
Try it yourself &#x1F609;

### A challenge!
Using all three functions you've learned about so far, try to `console.log` the following string but reversed:
```JavaScript
'Why does text always look so weird when reversed?'
```
Here's what your code should log:
```JavaScript
'?desrever nehw driew os kool syawla txet seod yhW'
```
Have a go! See if you can work it out...
```JavaScript
var myString = 'Why does text always look so weird when reversed?';
console.log( myString.split('').reverse().join('') );
```
{:.reveal}

As you can see here, first we convert it to an array of characters:
```JavaScript
["W", "h", "y", " ", "d", "o", "e", "s", " ", "t", "e", "x", "t", " ", "a", "l", "w", "a", "y", "s", " ", "l", "o", "o", "k", " ", "s", "o", " ", "w", "e", "i", "r", "d", " ", "w", "h", "e", "n", " ", "r", "e", "v", "e", "r", "s", "e", "d", "?"]
```
Next, we reverse this array:
```JavaScript
["?", "d", "e", "s", "r", "e", "v", "e", "r", " ", "n", "e", "h", "w", " ", "d", "r", "i", "e", "w", " ", "o", "s", " ", "k", "o", "o", "l", " ", "s", "y", "a", "w", "l", "a", " ", "t", "x", "e", "t", " ", "s", "e", "o", "d", " ", "y", "h", "W"]
```
Finally, we stitch it back together! We don't want anything in between each character, so we leave the parameter as an empty string. Then we get our final output!
```JavaScript
'?desrever nehw driew os kool syawla txet seod yhW'
```

Let's continue now!

### array.indexOf()
Remember above when I was talking about the *index* of an array item? It's just the number you use when referring to it. For example in the array below, the index of `true` would be `7` (**ARRAYS START AT 0**):
```JavaScript
var array = [4, 5, 3, 7, 'Hello', 2, 1, true, false, 0];
```
But what if we wanted to check the index of an array item? We can use the `.indexOf()` function. Here's how it works:
```JavaScript
var array = [4, 5, 3, 7, 'Hello', 2, 1, true, false, 0];
console.log( array.indexOf(true) );
// => 7
```
Try it yourself &mdash; find the index of `7`!
```JavaScript
var array = [4, 5, 3, 7, 'Hello', 2, 1, true, false, 0];
console.log( array.indexOf(7) );
// => 3
```
{:.reveal}

But what would happen if we had multiple of a particular value in an array?
```JavaScript
var array = ['a', 'b', 'a', 'a', 'b', 'a' ,'b', 'b', 'a'];
```
Let's try finding the index of `'a'`:
```JavaScript
var array = ['a', 'b', 'a', 'a', 'b', 'a' ,'b', 'b', 'a'];
console.log( array.indexOf('a') );
// => 0
```
As you can see, `.indexOf()` simply returns the first index of that value! For example with `'b'`, it returns the index of first `'b'` in the array:
```JavaScript
var array = ['a', 'b', 'a', 'a', 'b', 'a' ,'b', 'b', 'a'];
console.log( array.indexOf('b') );
// => 1
```

### array.lastIndexOf()
So, `.indexOf()` should really be called `.firstIndexOf()`. But it isn't, because JavaScript is weird. But if we want to find the last index of a value, we can use `.lastIndexOf()`! It works just like `.indexOf()`, except that it finds the last, not the first, of a value. Let's try it in our array from above:
```JavaScript
var array = ['a', 'b', 'a', 'a', 'b', 'a' ,'b', 'b', 'a'];
console.log( array.lastIndexOf('a') );
// => 8
```
And with `'b'`:
```JavaScript
var array = ['a', 'b', 'a', 'a', 'b', 'a' ,'b', 'b', 'a'];
console.log( array.lastIndexOf('b') );
// => 7
```
In these cases, `.lastIndexOf()` is simply finding the index of the last `'a'` and `'b'` in the array.

### array.includes()
This is a simple function for checking whether an array contains a particular value. For example:
```JavaScript
var array = [4, 5, 3, 7, 'Hello', 2, 1, true, false, 0];
console.log( array.includes(3) );
// => true
console.log( array.includes(9) );
// => false
```
Try it yourself! Does the array from above contain the string `'Hello'`?
```JavaScript
var array = [4, 5, 3, 7, 'Hello', 2, 1, true, false, 0];
console.log( array.includes('Hello') );
// => true
```
{:.reveal}

### array.find()
`.find()` finds the first item in an array which passes a certain test. The input parameter is a function which either returns `true` or `false`. If it returns `true`, it means that the item has passed the test. If it returns `false`, it means the item has not passed the test. Here is an example, which finds the first item over `10`:
```JavaScript
var myArray = [4,6,2,5,8,9,2,3,2,5,3,7,10,4,16,32,44,3,1,6];
console.log( myArray.find(isOver10) );
// => 16

function isOver10(num) {
    return(num > 10);
}
```
As you can see, the function `isOver10` will return `false` until `num` is greater than `10`. So, `.find()` will keep looping through the array until `isOver10` finally returns `true` (meaning the number is greater than `10`).

**Time to try it out! See if you can find the first vowel (`a`, `e`, `i`, `o`, or `u`) in the word `stronger`...**
> Hints:
> - You'll need to use `.split()`
> - You'll need to make an `isVowel(letter)` function
> - You'll need to use the [OR (`||`) boolean operator][or] inside the function

```JavaScript
var wordArray = 'stronger'.split('');
console.log( wordArray.find(isVowel) );
// => 'o'

function isVowel(letter) {
    var lowerCase = letter.toLowerCase();
    return(lowerCase == 'a' || lowerCase == 'e' || lowerCase == 'i' || lowerCase == 'o' || lowerCase == 'u');
}
```
{:.reveal}
Your program should end up logging `'o'`. Note the `letter.toLowerCase()` &mdash; we want it to count even if the vowel is a capital! As you can see, arrays have many cool uses!

### array.findIndex()
`array.findIndex()` simply returns the index of what you'd get if you did `.find()`. For example, in the puzzle above, instead of outputting `'o'` it would output `3` (because the index of `'o'` in the array is `3`).

### array.map()
`array.map()` returns a new array with the outputs of calling a function on every element in the array. For example, let's say you wanted to increase every element in an array by `2` &mdash; you could write:
```JavaScript
var myArray = [3, 6, 2, 5, 1, -5];
console.log( myArray.map(addTwo) );
// => [5, 8, 4, 7, 3, -3]

function addTwo(num) {
    return(num + 2);
}
```
As you can see, each element from the original array has been increased by `2`!

Time to try it yourself! Here is an array:
```JavaScript
[0, 4, 2.5, -47, 8]
```
You need to log a new array containing every element in this array, but squared (multiplied by itself).  It should return the following result:
```JavaScript
[0, 16, 6.25, 2209, 64]
```
Reveal the code when you think you have a solution!
```JavaScript
var myArray = [0, 4, 2.5, -47, 8];
console.log( myArray.map(square) );
// => [0, 16, 6.25, 2209, 64]

function square(num) {
    return(num * num);
}
```
{:.reveal}

Awesome!

By the way, good job for hanging in there. I know it's a lot to process all at once, so take it slowly if you need to. You can always come back to this article for reference later.

### array.filter()
`array.filter()` returns a new array with all the elements from the existing array that past a test. Like `array.find()`, the test is a function which returns `true` if the element passes and `false` if it doesn't pass. For example, let's say that you wanted to filter an array so that it only contained numbers below `5`:
```JavaScript
var myArray = [3, 14, -21, 0, 662];
console.log( myArray.filter(isBelowFive) );
// => [3, -21, 0]

function isBelowFive(num) {
    return(num < 5);
}
```
As you can see, `14` and `662` have been removed because they are greater than `5`!

Let's make a fun program which removes all vowels from a sentence, leaving only the consonants, spaces and punctuation. As a bonus, try to pronounce it all at the end!

You can use your `isVowel(letter)` function from earlier, and turn it into an `isNotVowel(letter)` function. This means we want the opposite output! To do this, you can put a `!` in front of the brackets like so:
```JavaScript
return !(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u');
```
That space after `return` is important!

Okay, time to try creating your program. Start with the following sentence:
```JavaScript
'I am having a fun time learning about arrays in JavaScript from Code The Web!'
```
Stitch it back into a string at the end using `.join('')`.

```JavaScript
var sentenceArray = 'I am having a fun time learning about arrays in JavaScript from Code The Web!'.split('');
console.log( sentenceArray.filter(isNotVowel).join('') );
// => ' m hvng  fn tm lrnng bt rrys n JvScrpt frm Cd Th Wb!'

function isNotVowel(letter) {
    var lowerCase = letter.toLowerCase();
    return !(lowerCase == 'a' || lowerCase == 'e' || lowerCase == 'i' || lowerCase == 'o' || lowerCase == 'u');
}
```
{:.reveal}
Try pronouncing it!
```JavaScript
' m hvng  fn tm lrnng bt rrys n JvScrpt frm Cd Th Wb!'
```
I'm not gonna send you an audio recording...

### array.reduce()
`array.reduce()` turns an entire array into one value. What?! Don't worry. All this means is that it loops through every element in the array, does something with them and returns a final value. An example of this is adding all the elements in an array of numbers. We're taking an array, and end up with just one value (the sum). To do this, `.reduce()` goes through each of the elements from left to right.

`array.reduce()` takes a function as input, just like the previous few array functions we've looked at. However, instead of the function having one parameter (for the element) it has two: one for the element, and one for the existing value from all the previous items in the array.

Let's try adding all the elements in an array:
```JavaScript
[2, 3, 5, 110]
```
For this, our function would look like so:
```JavaScript
function addTogether(total, num) {
    return(total + num);
}
```
Let's go through what would happen here.

The program would start on the first element in the array, `2`. The total so far is `0`, and the number is `2`. So we add these together and get a *new* total of `2`. Next up is `3`. The total is now `2`, which means that we add `3` to `2`. This gives us a new total of `5`. Now, our total is `5` and our new number is also `5`. We add these together and get a new total of `10`. The total is now `10` and the new number is `110`. We add these together, giving us our final output of `120`.

This is how `.reduce()` works! The full code would look like this:
```JavaScript
var myArray = [2, 3, 5, 110];
console.log( myArray.reduce(addTogether) );
// => 120

function addTogether(total, num) {
    return(total + num);
}
```
Try using the same array, except multiplying the values instead of adding them...
```JavaScript
var myArray = [2, 3, 5, 110];
console.log( myArray.reduce(multiply) );
// => 3300

function multiply(total, num) {
    return(total * num);
}
```
{:.reveal}

There we go! Reduce is one of the hardest array concepts, but you'll get the hang of it eventually! Practice is always the key.

### array.sort()
`array.sort()` sorts the elements of an array (wow, who would have guessed? &#x1F602;). An example of this is putting elements in an array in alphabetical or numerical order.

When called on an array without any parameters, it sorts it alphabetically by default:
```JavaScript
var languages = ['HTML', 'CSS', 'JavaScript'];
console.log( languages.sort() );
// => ['CSS', 'HTML', 'JavaScript']
```

Unfortunately, it tries to sort numbers alphabetically too! This means that `5` would come after `30`, because `5` comes after `3`. Let's see JavaScript sort this array of numbers alphabetically:

```JavaScript
var numbers = [1, 2, 3, 12, 22, 32, 199, 299, 399];
console.log( numbers.sort() );
// => [1, 12, 199, 2, 22, 299, 3, 32, 399]
```

NOOOOOO! That isn't how counting goes! Let's see if we can manage to sort it numerically.

The `array.sort()` function can have an optional parameter. This is a function, which compares two elements in the array. The function takes two inputs &mdash; the two elements to compare. If it outputs a negative number, the first input element comes *before* the second input element. If the function returns a positive number, the first input element comes *after* the second input element. You'll see what I mean as we go create our numerical sorting function...

First, let's make our actual function.
```JavaScript
function compare(num1, num2) {
    
}
```

In our sorted array, we'll want a smaller number to come *before* a larger number So let's say our function is asked to compare `3` and `5`. We'll want to output a negative so that `3` comes *before* `5` in the array. If we had something like `6` and `1`, we'd want to output a positive so that `6` comes *after* `1`.

A cool way that we can do this is with subtraction! If we subtract the second number from the first number, both of these cases work. `3 - 5` is negative, which is what we want. `6 - 1` is positive, which is also what we want! So our sorting function would look like so:
```JavaScript
function compare(num1, num2) {
    return(num1 - num2);
}
```

Let's try it out on our array!

```JavaScript
var numbers = [1, 2, 3, 12, 22, 32, 199, 299, 399];
console.log( numbers.sort(compare) );
// => [1, 2, 3, 12, 22, 32, 199, 299, 399]

function compare(num1, num2) {
    return(num1 - num2);
} 
```

Yess! That looks so much better now! &#x1F60D;

See if you can sort the array in reverse numerical order (don't cheat and use `.reverse()`!)

```JavaScript
var numbers = [1, 2, 3, 12, 22, 32, 199, 299, 399];
console.log( numbers.sort(compare) );
// => [399, 299, 199, 32, 22, 12, 3, 2, 1]

function compare(num1, num2) {
    return(num2 - num1);
} 
```
{:.reveal}

As you can see, we simply need to subtract `num1` from `num2` instead of `num2` from `num1`! This will reverse all the positive and negative outputs, meaning we end up with the array in reverse order.

### array.splice()
`array.splice()` is a way to add or remove items from an array. Here's what the syntax looks like:

```JavaScript
array.splice(index, amount, anItem, anotherItem, infinitelyManyItems);
```
The first parameter is the index in the array where you want to start from. Next is the amount of elements in the array that you want to remove from there. This can be `0` if you're only adding elements! After that, you can list any elements you want to add in at that spot as parameters. Note that *`.splice()` inserts the items __before__ the element with that index*.

Let's do an example. We'll use the following array:
```JavaScript
[1, 2, 3, 4, 5]
```
Time to try splicing things up! (sorry for the puns &#x1F62D;)

Let's remove the `3` and replace it with an `8` and a `9`. First of all, we need to provide the index &mdash; which in this case is `2`. We also need to provide the number of items we will be removing, which in this case is just `1` &mdash; the `3`! Next, we need to specify all the items we want to add. The final function would look like this:
```JavaScript
array.splice(2, 1, 8, 9);
```

Let's try it out!
```JavaScript
var myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 1, 8, 9)
console.log(myArray);
// => [1, 2, 8, 9, 4, 5]
```

Note that we didn't say `console.log( myArray.splice(2, 1, 8, 9) );`. This is because the function doesn't create a new array &mdash; it just modifies the existing one! However, `.splice()` does actually have an output. It outputs an array of all the elements that were removed! Try it out...
```JavaScript
var myArray = [1, 2, 3, 4, 5];
console.log( myArray.splice(2, 1, 8, 9) );
// => [3]
```

Time to write some code yourself! Start with the following array:
```JavaScript
['I', 'like', 'writing', 'very', 'much.']
```
Remove the word `'writing'`, and replace it with a couple of your (other) hobbies. Don't forget to add the word `'and'`!
```JavaScript
var myArray = ['I', 'like', 'writing', 'very', 'much.'];
myArray.splice(2, 1, 'coding', 'and', 'camping');
console.log(myArray);
// => ['I', 'like', 'coding', 'and', 'camping', 'very', 'much.']
```

There we go! That's all the array functions for today, and probably all that you'll need for quite a while! Good on you for making it through this far &#x1F44F;

We're nearly at the end of this article. However, there's one more thing to cover...

## Nested arrays
I said near the beginning of this article that arrays are just lists of values &mdash; and that those values can be anything! But what if some of those values were arrays? Yup, that's right. Introducing..... An array of arrays! (\*slow clap\*)
```JavaScript
var nestedArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
```
Depending on your personal taste, you may prefer to express it like this:
```JavaScript
var nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```
It's entirely up to you which you decide to do! (yay rhyming)

But how would you access an element in this nested array? Let's try and get the `6`.

First of all, think about how you'd get the array containing the `6`. It's the second item in the `nestedArray` array, meaning we can refer to it like this:
```JavaScript
nestedArray[1]
```
Now, let's say that `nestedArray[1]` was actually just an array named `a`. How would you access the `6`? You'd simply say:
```JavaScript
a[2]
```
So, we just need to replace the `a` with `nestedArray[1]`! This gives us....
```JavaScript
nestedArray[1][2]
```
Tada! This is how you get an element in a nested array! Try and get the `8`...
```JavaScript
nestedArray[2][1]
```
{:.reveal}
By the way, there's no reason why you can't have an array in an array in an array. Before I show you this, just a warning: don't panic! It's a huge confusing array, but you really don't need to worry about it unless you're curious. Here it is...
```JavaScript
var nestedArray = [
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
    ],
    [
        [19, 20, 21],
        [22, 23, 24],
        [25, 26, 27]
    ]
];
```
In this array, you'd refer to the `22` as:
```JavaScript
nestedArray[2][1][0]
```
Remember, if this confuses you don't worry! You don't need to fuss about it.

But what are actual uses for nested arrays? Well, `nestedArray[2][1]` looks remarkably like coordinates. It has two position values, which could be used as coordinates to track something's position! And  `nestedArray[2][1][0]` can be used as 3D coordinates! As such, nested arrays come in handy a lot when programming games. Developers will often use a nested array as the 'grid' on which a game is played, and store information about what is at each location. Nested arrays are also often used in image processing, where the coordinates are the coordinates of pixels in an image.

Nested arrays are quite advanced stuff, so you will probably only use them much further down the track. However, for the sake of completeness, I've added them in here anyway.

## Conclusion
This article is meant as a complete guide to JavaScript arrays, but you may not need to know it all at the moment. Just start with the basics I discussed near the top, then go further when you're confident and ready.

Anyway, wow! This is the longest article I've ever written on Code The Web, with close to 5,000 words! It's taken me nearly 5 hours to write this article, and my fingers, eyes, and brain are all hurting! I think I'm definitely in need of a coffee. So if you got something out of this article, I'd really appreciate if you paid whatever you want and bought me a coffee or two or three on my [Buy Me A Coffee page][coffee]. Thanks! &#x1F605;

If you know a fellow human who would get benefit from this article, share it with them! They'll thank you for it... I'll make it easy for you by sticking [this nice, juicy link right here...][share]

I know that this was a challenging article, so if you need help don't hesitate to [leave a comment][comments], [contact me via email][contact] or use the fancy chat widget that should be in the corner of your screen!

Have fun, and I'll see you next time where I'll be talking about something similar to arrays but different &mdash; [Objects!][objects] See you then...

---

> P.S. [I've started a Patreon page][patreon]! I'd really appreciate it if you supported me with an ongoing donation &mdash; even if it's only $1 a month! Rewards include getting featured on a special thanks page with other awesome people, and getting massive discounts off anything from Code The Web (I'm currently not selling anything, but my first book will be done in a few weeks!)
> 
> If there's anything else which you feel you should get as a patron, feel free to contact me :)
> 
> [Click here to check it out! &#x1F60D;][patreon]

{% comment %}
Image generator URL:
https://carbon.now.sh/?bg=rgba(0,0,0,1)&t=lucario&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=18px&si=false&code=%252F%252F%2520All%2520about%2520arrays%2520in%2520JavaScript%2520%257C%2520Code%2520The%2520Web%250Avar%2520array1%2520%253D%2520%255B%27String%27%252C%25208%252C%2520true%252C%2520myFunction()%255D%253B%250Avar%2520nestedArray%2520%253D%2520%255B%2520%255B1%252C2%252C3%255D%2520%252C%2520%255B4%252C5%252C6%255D%2520%255D%253B%250Aalert(array1.reverse().join(%27%2520%27))%253B%250Aalert(nestedArray%255B1%255D%255B2%255D)%253B&es=2x&wm=false
{% endcomment %}

[functions]: /javascript-functions/
[objects]: /javascript-objects/
[or]: /if-statements-boolean-operators/#multiple-truefalse-statements

[console]: /assets/img/posts/javascript-arrays/console.png
[array.split]: /assets/img/posts/javascript-arrays/array.split.png

[contact]: {{site.contact}}
[html]: /learn/html/
[css]: /learn/css/
[js]: /learn/js
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
[coffee]: {{site.donate}}
[patreon]: {{site.patreon}}