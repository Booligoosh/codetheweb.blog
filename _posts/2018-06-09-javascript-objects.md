---
layout: post
title: JavaScript Objects
image: '/assets/img/posts/javascript-objects/cover.png'
tags: JavaScript
keywords: "JavaScript Objects, objects, object, objects in JavaScript, JavaScript, Learn JavaScript"
checked: [grammarly]
---
Objects are ways of storing data in JavaScript and are a key part of Object Oriented Programming. Learn the syntax and more about them in this article...

<!-- https://carbon.now.sh/?bg=rgba(171,%20184,%20195,%201)&t=dracula&wt=bw&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=false&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=18px&si=false&code=%2520%2520%2520%2520%2520%2520obj.ects%2520%2520%2520%2520%2520%2520&es=4x&wm=false -->

> While it's not completely necessary, a basic understanding of [JavaScript arrays][arrays] may help you understand objects.

## What is an object?
An object in JavaScript is quite similar to an [array][arrays] &mdash; it is a data type which stores lots of values. These values can be any data type &mdash; numbers, strings, booleans, functions, and even arrays and objects!

The difference between an array and an object is how the values are referenced. In an array, you reference a value with a number (its position in the array) &mdash; for example:
```JavaScript
myArray[3]
```

When referencing a value in an object, you do so using a *name* instead of a number. For example:
```JavaScript
myObject['superFlashyName']
```

That's it! *Name instead of number*.

## How to declare an object
The syntax for declaring an object is different to the syntax for an array. Here's what it looks like:
```JavaScript
var myFriend = {firstName: 'John', lastName: 'Smith', age: 27, nationality: 'British'};
```
As you can see, it's *kind of* similar to the array syntax, but it has curly brackets instead of square brackets. The items are still comma-separated. However, the items now have a 'name' as well as a value. For example:
```JavaScript
age: 27
```
Here, `age` is the name (aka 'key') of the item and `27` is the item's value. They are separated by a colon.

We call this a *key-value pair*. It has a key and a value... (*really?* &#x1F61C;)
```JavaScript
key: value
```

So an object is made of key-value pairs separated by commas, and the whole thing is wrapped in a set of curly brackets.

Here's our object again:
```JavaScript
var myFriend = {firstName: 'John', lastName: 'Smith', age: 27, nationality: 'British'};
```
It is perfectly acceptable to write it this way:
```JavaScript
var myFriend = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    nationality: 'British'
};
```
Some people prefer the first option, while some prefer the second. It's up to you &mdash; choose the one that makes the most sense in your head.

## How to get/set a value in an object

As I mentioned near the beginning, this is how you reference an item in an object:
```JavaScript
myObject['key']
```

You can express it this way as well:
```JavaScript
myObject.key
```

With the second option, you can't have variables or special characters (including spaces) as the key. For example, these wouldn't work:
```JavaScript
myObject[someVarContainingTheKey]
myObject['I have spaces and special characters ;)']
```
As you can see, they don't turn out so well!
```JavaScript
myObject.someVarContainingTheKey // No longer a variable - equivalent to myObject['someVarContainingTheKey']
myObject.I have spaces and special characters ;) // \0_0/ The syntax errors are killing me
```

It's worth saying that it is bad programming practice to use special characters in variable names or object keys. The exception would be if you were using a form of user input (which might include spaces) as your key.

Unless you have special characters or a variable as your key, it is best to use the second option (`myObject.key`). Why? It just looks nicer (it also makes more sense for functions, which you'll see soon). But it's up to you.

## Functions in objects
I told you at the start that objects can have any types of data inside them. This includes functions! But how would you actually put one inside an object?

Let's use our friend example from earlier:
```JavaScript
var myFriend = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    nationality: 'British'
};
```

Now let's say we had this function:
```JavaScript
function sayHi() {
    alert('Hi!');
}
```

And we want to add it to our object. This means that we could call it like so:
```JavaScript
myFriend.sayHi()
```

Look familiar? This is why `console.log()` is `console.log()`! `console` is an object with a `log` function inside of it!

Anyway, here's how we'd put `sayHi()` into our function:
```JavaScript
var myFriend = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    nationality: 'British',
    sayHi: function() {
        alert('Hi!');
    }
};
```
What?! Let's take a look at what's going on here. When you say:
```JavaScript
function sayHi() {
    alert('Hi!');
}
```
, it is actually just shorthand for:
```JavaScript
var sayHi = function() {
    alert('Hi!');
}
```

So, just like `var age = 27` becomes `age: 27`, this:
```JavaScript
var sayHi = function() {
    alert('Hi!');
}
```
becomes this:
```JavaScript
sayHi: function() {
    alert('Hi!');
}
```

As you can see, it makes sense to use the `object.key` syntax as supposed to the `object['key']` syntax when it comes to functions. Imagine having to write this!
```JavaScript
myFriend['sayHi']()
```
Eugh, ugly &#x1F648;

## `this` in objects
Let's say we wanted to give our friend another function: an `introduce()` function. It would alert this:
> My name is John Smith. I'm British and I'm 27 years old.

However, we can't just alert this as a simple string! We'll want to use the object values. So if we changed the `age` to `30`, it would say that instead.

It is bad programming practice to say `myFriend.age`. This is because if the function was put into another object instead (let's say `myEnemy`), it would still alert the age of `myFriend` instead of `myEnemy`.

Instead, we use `this.age`. `this` simply refers to the object that the function is in.  See if you can work the function and put it in the object. Remember that you can merge strings and variables together with this syntax:
```JavaScript
'Here is a variable: ' + myVar + ' ...yay!'
```
Good luck!
> NOTE: Use double quotes so you don't interfere with the apostrophe in the word I'm

```JavaScript
var myFriend = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    nationality: 'British',
    sayHi: function() {
        alert('Hi!');
    },
    introduce: function() {
        alert('My name is ' + this.firstName + ' ' + this.lastName + ". I'm " + this.nationality + " and I'm " + this.age + ' years old.');
    }
};
```
{:.reveal}

Awesome! That's how `this` works!

## Converting between objects and strings
> In this section, you're going to need to open up the JavaScript console. Do that by right-clicking, clicking on 'Inspect Element', and going to the 'Console' tab.

To convert an array to a string, you can use `.join()` or `.toString()`:
```JavaScript
var myArray = [1,2,3,4];
console.log(myArray.join());
// logs '1,2,3,4'
console.log(myArray.toString());
// logs '1,2,3,4'
```

How would we do this with an object? Let's try `.toString()` (`.join()` is for arrays only):
```JavaScript
var myObject = {favoriteFood: 'Pizza', hobby: 'Coding'};
console.log(myObject.toString());
// logs '[object Object]'
```

Ewww! That's not what we want! &#x1F4A9;

Instead, there's a special function that we use just for objects:
```JavaScript
var myObject = {favoriteFood: "Pizza", hobby: "Coding"};
console.log(JSON.stringify(myObject));
// logs '{"favoriteFood":"Pizza","hobby":"Coding"}'
```

That's better! Note that it's `JSON.stringify(myObject)`, not `myObject.stringify()` like with `.toString()` and `.join()`.

`JSON` stands for JavaScript Object Notation. I'll go into that a bit further down.

In JavaScript, you can also make an array from a string with the `split` function like so:
```JavaScript
var myString = 'how,are,you';
console.log(myString.split(','));
// logs ["how", "are", "you"]
```

The equivalent of this for objects is `JSON.parse`:
```JavaScript
var myString = '{"favoriteFood":"Pizza","hobby":"Coding"}';
console.log(JSON.parse(myString));
// logs {favoriteFood: "Pizza", hobby: "Coding"}
```
Note that it logs the array without the single quotes around it, meaning it is now an object and no longer a string. To see it yourself, paste the above code snippet into your console. It will display it like an object, not a string!

Try these two new functions out further! Make up some objects and objects as strings, then convert between them.

## So, what's that JSON thingo?
JSON simply stands for **JavaScript Object Notation**. In other words, simply the object syntax you have been learning about in this article!

People liked this syntax so much that they thought it would be a good idea to use it to store data, so now JSON is used in many ways outside of JavaScript. That's why we have things like `JSON.parse`: we're simply parsing (interpreting) a JavaScript object.

You can find out more about JSON at [json.org][json.org] (but don't overload your brain, it's not that relevant to this tutorial).

## Object.keys()
With an array, if you know its size then you know how to find all the values. For example &mdash; in an array with a length of `4`, you know that to find all the values you could reference `array[0]`, `array[1]`, `array[2]`, and `array[3]`. However, we can't do this with an object because we don't know what all the keys are &mdash; they don't follow a pattern like 0,1,2,3 because we can set them to whatever we like.

Luckily, there is a function we can use to get all the keys:
```JavaScript
var myFriend = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    nationality: 'British',
    sayHi: function() {
        alert('Hi!');
    },
    introduce: function() {
        alert('My name is ' + this.firstName + ' ' + this.lastName + ". I'm " + this.nationality + " and I'm " + this.age + ' years old.');
    }
};

console.log( Object.keys(myFriend) );
// logs ["firstName", "lastName", "age", "nationality", "sayHi", "introduce"]
```

As you can see, it returns an array with all the keys! Remember that the syntax is this:
```JavaScript
Object.keys(myFriend) // RIGHT :)
```
**NOT** this:
```JavaScript
myFriend.keys() // WRONG!!!
```

`Object.values()` simply makes an array of all the keys in an object.

## Object.values()
As well as finding all the keys in an object, we can also find all the values! This *sort of* turns an object into an array, except all the keys will obviously be lost. Here is how it works:
```JavaScript
var myFriend = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    nationality: 'British',
    sayHi: function() {
        alert('Hi!');
    },
    introduce: function() {
        alert('My name is ' + this.firstName + ' ' + this.lastName + ". I'm " + this.nationality + " and I'm " + this.age + ' years old.');
    }
};

console.log( Object.values(myFriend) );
// logs ["John", "Smith", 27, "British", function() { alert('Hi!'); }, function() { alert('My name is ' + this.firstName + ' ' + this.lastName + ". I'm " + this.nationality + " and I'm " + this.age + ' years old.'); }]
```
Note that the console may abbreviate the functions with an `ƒ` symbol like so:
```JavaScript
["John", "Smith", 27, "British", ƒ, ƒ]
```

This is how `Object.values()` works &mdash; it simply makes an array of all the values in an object.

## Conclusion
That's it for today! Hopefully, this article has given you a good understanding of objects. If so, I'd really appreciate it if you shared this article on social media ([click here to do so][share]) to help spread the word and help others like you.

Once you have played around with objects for a bit longer and have gotten all your initial confusion out of the way, it's worth looking into some weird behavior with objects (called 'mutability'), and why it can be scary &mdash; [I highly recommend reading this article on it by Zell Liew][mutation]. It is more advanced, which is why I recommend playing around a bit with objects first.

If you need help understanding these concepts, with web development in general or want to give feedback, head to the [comments below...][comments] (or type in that live chat thingo)

If you want more quality articles like this, [sign up to get my weekly email of curated content from Code The Web and around the internet][newsletter] (no spam).

If you happen to be a real-life superhero who appreciates my work, go ahead and [buy me a coffee or two or three][coffee] or [become my patron][patreon].

See you next time, where I'll be talking all about [how to modify HTML and CSS in JavaScript][dom]. This is one of the most important parts of JavaScript and is the intersection between all three web languages.

[arrays]: /javascript-arrays/
[mutation]: https://alistapart.com/article/why-mutation-can-be-scary
[dom]: /javascript-dom/
[json.org]: https://json.org/

[contact]: {{site.contact}}
[html]: /learn/html/
[css]: /learn/css/
[js]: /learn/js
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
[coffee]: {{site.donate}}
[patreon]: {{site.patreon}}