---
layout: post
title: 'How to learn web development'
image: '/assets/img/posts/how-to-learn-web-development/cover.jpg'
tags: Other HTML CSS JavaScript
checked: [grammarly]
---
So you want to learn web development. But how do you actually go about learning it? Read on to find out...

> **Looking to jump right in and learn a language? [Do so here.][learn]**

## What is web development?
You've probably heard of coding, or programming (actually I'm sure you have!). Well, web development is just a type of coding - specifically, coding websites or web applications (websites that do stuff). It is one of the most common forms of programming in this day and age, and a great place to start for beginner programmers.

## Why you should learn web development
If you are just learning to code, web development is a great place to start - but why?
1. It is relatively easy at first (but you can get much more advanced)
2. It is fun (yay!)
3. You are coding things that you would use every day - websites

If you are curious, enjoy a challenge and enjoy learning new things, web development is for you. That said, I also agree with this [great article from Simple Programmer][dont-code] that coding should be done because you want to, not because you think it will lead to some irrational future outcome.

## How I learned web development
Well, I wanted to learn to code. I looked at tutorials from all over the internet and got the rest of my knowledge from actually coding and what I needed as I went along.

## Your learning strategy
Read this blog every second of your life. Wait what? - yeah, of course I was going to say that. But seriously:

First I would recommend learning the syntax of your language - as in how to actually write it, what it does and the main features of the language (I'll be writing about that soon, so stay tuned!).

Next, instead of learning *every single minute feature* of the language, just get going. By this point, you will have enough under your belt to make some basic websites, and you can pick more up as you go along. Whenever you don't know how to do something that you need to do, look it up. Actually, I'll tell you a secret right now - StackOverflow (it's free, I'm not paid to promote it or anything).

[StackOverflow] is a programming help forum website. Nine times out of ten, when you look something up on there someone has already answered it - and if not, you can post a question. There is a massive community so you will usually get an answer to your question only a few minutes after posting it (unless it's really obscure). The people on there are really generous, nice and also very smart. Okay, enough ranting about StackOverflow.

> **EDIT:** [I have wrote an article about 5 other quick-reference sites that you can go to look things up on.][reference-sites-to-help-you-learn-coding]{:target='_blank'}

Also, there will be some things that you'll want to memorize, and the best way to do this is by using them for real projects over and over again. Don't worry though, these days your memory doesn't even matter that much - you can look up whatever it is that you don't remember. 

So now you hopefully know how you're going to learn web development, but *what is it that you actually need to learn?*

## Where to start
First, you are going to want to learn front-end programming - this is what you actually see. Back-end programming is all that confusing stuff that goes on the actual server like databases and request handling. It is possible to make an entire website without coding anything on the back-end, so you should definitely start with front-end programming.

There are three main languages that are part of front-end programming: *HTML*, *CSS*, and *JavaScript*. Let's have a quick look at what each of them is:

**NOTE:** you will see some code here, but don't panic - it's just to show you what they look like.

### HTML
HTML stands for Hypertext Markup Language. This is what makes up the actual content of the website - for example, the paragraph above might look something like this:

```HTML
<h2 id="where-to-start">Where to start</h2>

<p>First, you are going to want to learn front-end programming - this is what you actually see. Back-end programming is all that confusing stuff that goes on the actual server like databases and request handling. It is possible to make an entire website without coding anything on the back-end, so you should definitely start with front-end programming.</p>

<p>There are three main languages that are part of front-end programming: <em>HTML</em>, <em>CSS</em>, and <em>JavaScript</em>. Let’s have a look at what each of them is:</p>
```
{: .wrap}

As you can see, it has some normal text but then also some other bits of code. This is called markup - hence the name Hypertext Markup Language.

### CSS
CSS stands for Cascading Style Sheet and controls what a webpage looks like. Without CSS, the entire web would look something like this:
![This article without CSS][no-css]
Here is a snippet of CSS:
```CSS
#where-to-start {
    color: red;
    text-align: center;
    border: 5px solid red;
}
```

### JavaScript
JavaScript is what makes web pages do stuff. It has stuff like if/else statements and functions (which you will learn about later). Here is a snippet of JavaScript:

```JavaScript
var x = 5;

if(x < 10) {
    console.log("x is a one-digit number.");
} else {
    console.log("x has more that one digit.");
}
```

JavaScript is much harder to master than HTML and CSS as it doesn't just display stuff - it does stuff. JavaScript can also change the HTML and CSS of a webpage.

You will eventually need to learn all three of these languages if you want to make a website (you don't always need JavaScript but it's good to know, especially for web-apps). I recommend learning them in this order:

1. HTML
2. CSS
3. JavaScript

This order goes from easiest to most difficult, and also most important to least important - you can't have a webpage without HTML, and you will need CSS if you don't want your website to look crap (but at least you have one). Because of this, I'm going to be writing my posts in this order - common HTML, common CSS, common JavaScript and then extra cool stuff. You can [keep up to date and follow along here][newsletter].

## How much time to spend
Now here's the biggie: How much time do you need to spend on coding to learn it? Even if you are short on time, you can still learn to code - you will just learn at a slower pace. You shouldn't really be aiming to do a certain amount of coding each week - just set some time aside, and code for as long as you want (or until your brain hurts). Ideally, you will enjoy coding and it won't be a matter of trying to sit down for a certain amount of time. That said, there will be times along the way when something isn't working as expected and you have no idea what to do, but keep persevering. In terms of frequency, I would recommend at least once a week - but do it as often as you want if you have the time.

## Conclusion
Congrats on starting your journey to becoming a web developer! There will be times when you want to give up, but keep going and you will enjoy it. To get started with web development, [look out for my next post, where I'll be talking about how to get your computer set up for web development][set-up].

So, what did you think of that article? Don't hesitate to [tell me in the comments][comments] or [share it with your friends][share] if you liked it.

> UPDATE:<br>
> **Interested in learning any of the three languages I talked about in this article?**<br>
> I have made pages for HTML, CSS, and JavaScript with all of my posts you should read to learn that language *in order*.<br><br>
> [You can get going right away here!][learn]


[dont-code]: https://simpleprogrammer.com/2016/02/22/please-dont-learn-to-code-unless/
[StackOverflow]: https://stackoverflow.com/
[reference-sites-to-help-you-learn-coding]: /2017/12/16/web-development-reference-sites/
[no-css]: /assets/img/posts/how-to-learn-web-development/no-css.png
[set-up]: /2017/10/04/how-to-learn-web-development/
[learn]: /learn

[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}