---
layout: post
title: Dates and times in JavaScript
image: '/assets/img/posts/javascript-dates-and-times/cover.jpg'
photoCred: [Djim Loic,ft0-Xu4nTvA]
tags: JavaScript
keywords: "Date, Dates, JavaScript Date, JavaScript Dates, time, times, JavaScript date methods, JavaScript date functions, JavaScript date format, JavaScript date now, JavaScript date parse, JavaScript date add days, JavaScript date timezone, JavaScript date to string, JavaScript timestamp to date, timezone, time zones, JavaScript get current time, JavaScript new date format, new Date(), JavaScript new Date(), Date object, JavaScript Date object, JavaScript, Learn JavaScript"
checked: [grammarly]
---

If you're a developer, you're bound to use JavaScript dates and times sooner or later! Learn all about them in this article...

## Getting started
I highly recommend following along in this article! It'll help you understand and remember the concepts better. To get started, create this HTML file and then open it up in your browser:

```HTML
<html>
    <head>
        <title>Dates and times in JavaScript</title>
    </head>
    <body>
        <script>
            // Exciting code coming soon!
        </script>
    </body>
</html>
```
If you want to try out some JavaScript, you can put it in the `<script>` tag, save, reload the page and see what happens! In this tutorial, I'll be using `console.log` &mdash; this prints stuff to the console so you can see it. To open up the console:
1. Right-click
2. Go to 'Inspect Element'
3. Go to the 'Console' tab

You're all set up now! Enjoy...

## Why are dates useful?
Often when building websites or web applications, you'll want to do something related to time. Convert an ugly date into a readable format, find durations, convert between time zones, print a date in the user's local format and more.

You can do all that with the JavaScript `Date` object!

In JavaScript, times (hours, minutes, seconds, milliseconds) are all considered part of the 'date'. So for the rest of this article, when I'm talking about the 'date', remember that it includes the time (unless I tell you otherwise, of course).

## Creating a new Date object
To create a new date object, we can call `new Date()`:
```JavaScript
var myDate = new Date();
```
This will let us do a bunch of calculations to do with dates and times.

If you leave the brackets empty, it'll automatically set this date object to the current date/time. We can see this by `console.log`ging it!
```JavaScript
var myDate = new Date();

console.log(myDate);
// Output: Mon Jan 28 2019 08:40:07 GMT+1100 (Australian Eastern Daylight Time)
// Output may be different for you
```
<script>var myDate = new Date('Mon Jan 28 2019 08:40:07 GMT+1100 (Australian Eastern Daylight Time)');</script>

That's what it shows for me right now, here in Australia (dates are in your timezone by default), as I'm writing this. Obviously, it will be different for you. Try it out!

When you `console.log` a `Date` object, the output contains the date (`Mon Jan 28 2019`), followed by the time (`08:40:07`), followed by the timezone (`GMT+1100`) and timezone name (`Australian Eastern Daylight Time`). As you can see, it also adjusts the timezone for daylight savings time.

You can also create a `Date` object set to a particular date (not the current one). I'll tell you about this later in the article, once you're more familiar with some date concepts!

## Timestamps
A timestamp is one number that represents the current date and time. In JavaScript, this is the number of milliseconds since it was midnight on Jan 1, 1970 (and you can have negative numbers to get a date before that). Because of time zones, it's slightly more confusing.

It's actually the number of milliseconds since it was midnight on Jan 1, 1970 *in Greenwich, England* &mdash; where the timezone is GMT (Greenwich Mean Time), also known as UTC (Coordinated Universal Time). So if your timezone was 2 hours behind Greenwich, then the timestamp `0` would actually be 10pm on Dec 31, 1969 in your timezone.

It's a bit confusing, but all you really need to remember is that a timestamp is a unique number in milliseconds that represents the current date and time.

Let's get a timestamp from our `Date` object! We do this using `.getTime()`&hellip;
```JavaScript
var myDate = new Date();

console.log(myDate.getTime());
// Output: 1548625207000
// Output may be different for you
```

We can also set the date object to a particular timestamp using `.setTime()`. Let's set it to the timestamp `0`, then `console.log` it:
```JavaScript
var myDate = new Date();

myDate.setTime(0);

console.log(myDate);
// Output: Thu Jan 01 1970 10:00:00 GMT+1000 (Australian Eastern Standard Time)
// Output may be different for you
```

As you can see, we've changed the time that `myDate` is storing.

Like I was saying before, the timestamp `0` will be different depending on your timezone. If your timezone is GMT, it will be exactly `00:00:00`. But here my timezone is AEST, which is 10 hours ahead of Greenwich. So for me, the timestamp `0` is 10:00:00 (10am) on Jan 1, 1970. Try the code above yourself, to see what the timestamp `0` would be in your timezone!

You can try getting our `myDate` object to store any date &mdash; even in the future!

```JavaScript
var myDate = new Date();

myDate.setTime(9999999999999);

console.log(myDate);
// Output: Sun Nov 21 2286 04:46:39 GMT+1100 (Australian Eastern Daylight Time)
// Output may be different for you
```

Wow!! That's pretty far into the future!

![Back To The Future!][back-to-the-future-img]

### Getting the duration between two timestamps
To get the duration (in milliseconds) between two timestamps, we can simply subtract one from the other! To make sure the answer is always positive (because you can't have a negative duration), you can use `Math.abs`:
```JavaScript
var myDate1 = new Date();
var myDate2 = new Date();
myDate2.setTime(1541325072000);

console.log(Math.abs(myDate1.getTime() - myDate2.getTime()));
// Output: 7300135000
// Output may be different for you
```

## Getting/setting parts of the Date object
The `Date` object is so useful because of how many things you can do with it! The functions below let you get different bits of information about our date&hellip;

### .getDate()
`getDate` gets the day of the month &mdash; here's an example!
```JavaScript
var myDate = new Date();

console.log(myDate.getDate());
// Output: 28
// Output may be different for you
```

You can also change the day of the month using `myDate.setDate(yourNumber)`.

### .getDay()
`getDay` gets the day of the week. Sunday is represented as `0`, Monday as `1`, etc.
```JavaScript
var myDate = new Date();

console.log(myDate.getDay());
// Output: 1
// Output may be different for you
```

If you want to show the name instead of the number, you can do it using an [array][arrays]:

```JavaScript
var myDate = new Date();
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(daysOfWeek[myDate.getDay()]);
// Output: Monday
// Output may be different for you
```

### .getMonth()
`getMonth` returns a number representing the month. `0` is January, `11` is December&hellip;
```JavaScript
var myDate = new Date();

console.log(myDate.getMonth());
// Output: 0
// Output may be different for you
```

Again, if you want to show the name instead of the number, you can do it using an [array][arrays]:

```JavaScript
var myDate = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(months[myDate.getMonth()]);
// Output: January
// Output may be different for you
```
You can also change the day of the month number using `myDate.setMonth(yourNumber)`.

### .getFullYear()
`getFullYear` simply gets the current year number! Try it out&hellip;
```JavaScript
var myDate = new Date();

console.log(myDate.getFullYear());
// Output: 2019
// Output may be different for you
```

You can set the year using `myDate.setFullYear(yourNumber)`.

Wait a sec! Why is it `getFullYear`, not `getYear`? &#x1F914;

`.getYear()` does something else &mdash; it's actually quite weird&hellip;
```JavaScript
var myDate = new Date();

console.log(myDate.getYear());
// Output: 119
// Output may be different for you
```

What?!?!?!? Welcome to the year 119, folks! For some strange reason, `getYear` outputs the same thing as `getFullYear`, but minus `1900`. I don't really see a reason to use this, but I'm just letting you know that it's there, which is why we use `getFullYear` instead.


### .getHours(), .getMinutes(), .getSeconds() and .getMilliseconds()
These functions give each component of `myDate`'s time.

For example, let's have a look at this time:
```
11:34:24:22
```

We'd normally just say 11:34am, but this time has seconds and milliseconds for extra precision.

It's pretty simple really &mdash; for the time above, `.getHours()` would return `11`, `.getMinutes()` would return `34`, `.getSeconds()` would return `24` and `.getMilliseconds()` would return `22`.

A millisecond, in case you're wondering, is 1/1000 of a second.

Let's try these all out on `myDate`!

```JavaScript
var myDate = new Date();

console.log(myDate.getHours());
// Output: 8
console.log(myDate.getMinutes());
// Output: 40
console.log(myDate.getSeconds());
// Output: 7
console.log(myDate.getMilliseconds());
// Output: 0

// Outputs may be different for you
```

We can also use `myDate.setHours(yourNumber)`, `myDate.setMinutes(yourNumber)`, `myDate.setSeconds(yourNumber)` and `myDate.setMilliseconds(yourNumber)` to change these values individually!

### .getTimezoneOffset()
We can use `getTimezoneOffset` to get the timezone offset of our date. What's a timezone offset, you ask? It's how far ahead or behind UTC/GMT your timezone is, in minutes (remember what I was saying about time zones earlier?). If you're ahead of Greenwich the offset will be negative &mdash; because you have to *subtract* to get back to UTC/GMT. If you're behind Greenwich the offset will be positive, because you need to *add* to reach UTC/GMT. Try it out!
```JavaScript
var myDate = new Date();

console.log(myDate.getTimezoneOffset());
// Output: -660
// Output may be different for you
```

## Printing the date
As well as getting different parts of the `Date` so we can do our own calculations, we can also get JavaScript to format it for us!

### .toString()
This lets us turn our date into a string. It returns what you'd see when `console.log`ging it. However, the console is actually just showing a preview of what the date looks like. So we can use `.toString()` get the date as a string! We could then use this string to do stuff such as [updating the HTML][dom].

Let's have a look!
```JavaScript
var myDate = new Date();

console.log(myDate.toString());
// Output: Mon Jan 28 2019 08:40:07 GMT+1100 (Australian Eastern Daylight Time)
// Output may be different for you
```

### .toDateString()
If we want a string with just the date part (not including the time), we can use `.toDateString()`!
```JavaScript
var myDate = new Date();

console.log(myDate.toDateString());
// Output: Mon Jan 28 2019
// Output may be different for you
```
### .toTimeString()
If we want only the time part (not including the date), we can use `.toTimeString()`:
```JavaScript
var myDate = new Date();

console.log(myDate.toTimeString());
// Output: 08:40:07 GMT+1100 (Australian Eastern Daylight Time)
// Output may be different for you
```
As you can see, this includes the timezone information as well!

### .toUTCString()
The UTC timezone is supposed to be a timezone that we should all use when sharing dates and times cross-timezone. As in the name, it's meant to be something that we can use to *coordinate* with each other. So sometimes you'll want to print the date and time in UTC. We can do this quickly using `.toUTCString()`&hellip;
```JavaScript
var myDate = new Date();

console.log(myDate.toUTCString());
// Output: Sun, 27 Jan 2019 21:40:07 GMT
// Output may be different for you
```
Note that it says `GMT`, not `UTC`. These are actually the exact same timezone, UTC is just another name for it. So don't be alarmed!

### .toLocaleString(), .toLocaleDateString() and .toLocaleTimeString()
People all over the world display dates in different ways. We can use these locale functions to display the date and time in a way that the user is familiar with. `toLocaleString` is the equivalent of `toString`, `toLocaleDateString` is the equivalent of `toDateString` and `toLocaleTimeString` is the equivalent of `toTimeString`.

Let's try them out!
```JavaScript
var myDate = new Date();

console.log(myDate.toLocaleString());
// Output: 28/01/2019, 08:40:07
console.log(myDate.toLocaleDateString());
// Output: 28/01/2019
console.log(myDate.toLocaleTimeString());
// Output: 08:40:07

// Outputs may be different for you
```
You might notice a change here. I live in Australia &mdash; and in Australia, we write the day before the month (unlike other countries such as the US). So "January 28th" would be "28th of January", and "01/28/2019" would be "28/01/2019". As you can see, it's automatically put the day before the month since it knows I'm in Australia!

It's also removed the timezone from the time &mdash; because when you're in a local timezone, you don't say "It's 1pm AEST" &mdash; you just say "It's 1pm".

### .toISOString()
ISO is a globally recognized format for storing dates in strings. They're often used to send data between servers. If you paste an ISO date into most places (such as a spreadsheet cell or date input), it will work. To get an ISO string for our date, we can use `.toISOString()`. Let's see what it looks like!
```JavaScript
var myDate = new Date();

console.log(myDate.toISOString());
// Output: 2019-01-27T21:40:07.000Z
// Output may be different for you
```

## Creating a Date object from other dates!
We can create a new Date object using a variety of formats representing dates &mdash; any valid date string, date string with time, ISO string, timestamp and more. Here are some examples:
```JavaScript
console.log(new Date('Sun Dec 07 1975'));
// Sun Dec 07 1975 00:00:00 GMT+1100 (Australian Eastern Daylight Time)
11:46:27.261

console.log(new Date('Sun Dec 07 1975 08:40:07 GMT+1100 (Australian Eastern Daylight Time)'));
// Output: Sun Dec 07 1975 08:40:07 GMT+1100 (Australian Eastern Daylight Time)
11:46:27.262 

console.log(new Date('1991-11-12T03:03:00.000Z'));
// Output: Tue Nov 12 1991 14:03:00 GMT+1100 (Australian Eastern Daylight Time)
11:46:27.262 

console.log(new Date(1525582800000));
// Output: Sun May 06 2018 15:00:00 GMT+1000 (Australian Eastern Standard Time)
11:46:27.267 


// Outputs may be different for you
```

## Conclusion
That's it for today! I hope you learned something useful.

Time zones can be really confusing, but you'll get the hang of it eventually!

If you found this article helpful, [share it][share]! Someone else might find it helpful too &#x1F604;

If you have any feedback, need help or just wanna say hi, feel free to do so [down in the comments][comments], or via the live chat widget in the corner.

If you found this article valuable, I'd really appreciate it if you [bought me a coffee][coffee] &mdash; it takes lots of time and effort to write these articles and maintain this site, and you get to read it all for free!

And finally, don't forget to [join the newsletter][newsletter] to receive great quality curated web development tutorials once a week from this site and around the internet.

See you next time, where I'll be talking about [timeouts and intervals][js-timeouts-and-intervals] &mdash; another part of JavaScript involving durations!

[arrays]: /2018/04/28/javascript-arrays/
[dom]: /2018/06/18/javascript-dom/
[js-timeouts-and-intervals]: {{site.newsletter}}

[back-to-the-future-img]: /assets/img/posts/javascript-dates-and-times/back-to-the-future.gif

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css
[js]: /learn/js
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
[coffee]: {{site.donate}}
[patreon]: {{site.patreon}}
