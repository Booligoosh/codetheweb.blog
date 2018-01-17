---
layout: post
title: "CSS text properties, and how to use Google Fonts on your website"
image: '/assets/img/posts/css-text-properties-and-google-fonts/cover.png'
tags: CSS
keywords: "CSS, fonts, CSS fonts, Google Fonts, learn CSS, CSS tutorial, tutorial"
checked: [grammarly]
---
Learn how to change the way text appears on a website, and learn how to use the most extensive and powerful free font database in the world!

Hey everyone! Welcome back to another year of Code The Web! Hopefully, you had a good New Year's, and have made some good resolutions for 2018...

![What exactly is a "new years resolution?" - It's a To Do list for the first week of January][new-year-1]

Today I'm going to be talking about text-related CSS properties, as well as how to spice up your website with this nifty thing called [Google Fonts][g-fonts].

Let's get going!

## Getting started
I recommend following along in all of my tutorials, as it really helps you get a better grasp on the subject. If you want to follow along through this tutorial, here's how to get started.

First, create a new project folder with blank `index.html` and `style.css` files inside.

Next, let's write some basic HTML to test our font properties on. Add the following to your `index.html`:

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Fonts!</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <span>Look at me, I am some awesome text!</span>
    </body>
</html>
```
Open your `index.html` file in a browser - it should look something like this:

![A blank page with the text "Look at me, I am some awesome text!" on it][base-code]{:.screenshot-white}

Now we're good to go!

## font-size
You may already know about `font-size` because it is a very common property, but I'll go through it anyway (you can [skip](#font-weight) if you want).

`font-size` is quite straight-forward, it determines the size of the text. It accepts a value in any [CSS unit][css-units]. Let's try it out!

Open up your `style.css` file, and style the `<span>` to have a `font-size` of `50px` - see if you can work out the code on your own...
```CSS
span {
  font-size: 50px;
}
```
{:.reveal}

Here is the result:

![The text is now much larger][font-size]{:.screenshot-white}

## font-weight
`font-weight` sets the thickness of the text (eg. **bold**). It takes the following values:
- `lighter`
- `normal`
- `bold`
- `bolder`
- One of the following numbers: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`

The numbers go from `100` being the thinnest to `900` being the thickest. `400` is equivalent to `normal` and `700` is equivalent to `bold`. **Note that the numbers _do not_ have a unit after them.**

Let's try making our font `lighter` - add the following to your CSS file:
```CSS
span {
  font-size: 50px;
  font-weight: lighter; /* Add this line */
}
```

Result:
![Nothing happened!][font-size]{:.screenshot-white}

What?! Nothing happened! This is because _**not all fonts come with all weights**_. This is because the designer of the font needs to design each weight of the font individually, and lots of font designers will not end up designing up to 9 versions of the same font. In this case, the designer of this font has not made a `lighter` version - so the browser just shows the closest equivalent which is `normal`.

In my [next article][custom-fonts], I'll go into the behind-the-scenes of how the different font weight files are actually specified.

Okay, let's try making our text `bold` - the designer of this font *has* made a `bold` version...
```CSS
span {
  font-size: 50px;
  font-weight: bold; /* Change this line */
}
```
Result:
![The text is now bold!][font-weight-bold]{:.screenshot-white}

Woo! Let's move on...

## line-height
`line-height` basically controls how high each line of text is. The larger the `line-height`, the more vertical space between the text.

Like `font-size`, `line-height` accepts a value in any [CSS unit][css-units]. Let's try it out!

First of all, let's split our text onto two lines so we can see the `line-height` properly by adding a `<br>` in our HTML:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Fonts!</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <span>Look at me, <br>I am some awesome text!</span> <!-- Change this line -->
    </body>
</html>
```
Result:
![The text is now on two lines][two-lines]{:.screenshot-white}

Now, let's try setting our `line-height` to `200px`:
```CSS
span {
  font-size: 50px;
  font-weight: bold;
  line-height: 200px; /* Add this line */
}
```
Now, take a look at the result:
![There is now much more space between the lines of text][line-height-200px]{:.screenshot-white}

As you can see, there is now much more space between the lines of text.

But you may be wondering - how does the line *height* create more space *between* the lines? This is because technically, there is no space between the lines. The lines are each `200px` high, and the text is *vertically centered* on the lines. This means that as the `line-height` gets bigger but the `font-size` stays the same, the gaps between the actual text will get bigger. Here is a diagram:

![Each line has a line-height of 200px, but the text itself is not that high][line-height-200px-annotated]{:.screenshot-white}

`line-height` works well when using [`em` units][em] because it means you can set the `line-height` relative to the `font-size`. For example, `line-height: 2em` would make the `line-height` double to size of the text.

## letter-spacing
`letter-spacing` determines the amount of space in between each letter and takes any types of units. Let's jump right in and try it out!

Try giving the text a `letter-spacing` of `5px`...
```CSS
span {
  font-size: 50px;
  font-weight: bold;
  line-height: 200px;
  letter-spacing: 5px; /* Add this line */
}
```
{:.reveal}
Here's the result:
![The letters are much more spread out][letter-spacing]{:.screenshot-white}

As you can see, the letters are much more spread out. This example looks kind of ridiculously spread out to make the `letter-spacing` clear, but often it is good for minor adjustments (similar thing goes for `line-height`).

## font-family
The `font-family` tells the browser which font to display the text in. Here are the default fonts available:
> - <span style="font-size: 1.5em; font-family: serif">serif</span>
> - <span style="font-size: 1.5em; font-family: sans-serif">sans-serif</span>
> - <span style="font-size: 1.5em; font-family: cursive">cursive</span>
> - <span style="font-size: 1.5em; font-family: fantasy">fantasy</span>
> - <span style="font-size: 1.5em; font-family: monospace">monospace</span>

Let's try setting our font to `fantasy` (don't ask me why it is called that):
```CSS
span {
  font-size: 50px;
  font-weight: bold;
  line-height: 200px;
  letter-spacing: 5px;
  font-family: fantasy; /* Add this line */
}
```
Here is the result:
![The text is now in the 'fantasy' font from above!][font-family-fantasy]{:.screenshot-white}

Awesome!

Note that the default fonts *might be different on different computers or browsers* because it is what the browser deems to be the default font for that category. Generally, the fonts will look similar though.

You can also specify any font name that is installed on the computer system (if the font name contains a space, surround it with quotes eg. `font-family: "Modern Sans"`). The problem is, _**the font will not work if it is not installed on the user's machine**_. This is where Google Fonts comes in...

## Google Fonts
[![Google Fonts][g-fonts-logo]][g-fonts]

[Google Fonts][g-fonts] is a library filled with thousands of awesome (and free &#128523; ) fonts.

> Talking of free: Always be careful when using a font online, sometimes the license doesn't allow it to be used online or for commercial use, or you may have to buy a license. Luckily all the fonts on Google Fonts are completely free, so you don't have to worry!

The good thing about using a font from Google Fonts is that they host and create a font stylesheet for you. This means that all you need to do is link to one of their files and the font will work for everyone - even if the user doesn't have it installed on their computer.

Let's add a font from Google Fonts to our website!

First of all, go to the [Google Fonts website][g-fonts] if you haven't already. When you get there, you will see a bunch of font specimens:

![Google Fonts][g-fonts-home]{:.screenshot-white}

There is also a search box and many advanced filters to find your favorite font - you can even filter by things such as thickness or width!

In this case, I have chosen the font [Ribeye Marrow][ribeye-marrow]. You can either follow along with me using that font or pick your own.

Once you have a font, click the red plus button - the image below shows how to do it on a specific font page or straight from the home page:
![The position of the red plus button on the font specimen pages and home page][g-fonts-select-font]

After doing this, a small panel will appear in the bottom right corner of your screen:
![A small panel will appear in the bottom right corner of your screen][g-fonts-selected-panel-closed]{:.screenshot-white}

Open it by clicking on it...
![The opened panel][g-fonts-selected-panel-opened]

First of all, we will need to link to the font so that the browser knows where to find the files. There are two ways to do this: using HTML (standard) or CSS (@import). Personally, I prefer CSS as the font is part of the styling of the page so it makes sense to put it together.

To use the CSS option, click on "@IMPORT"

![Click on "@IMPORT"][g-fonts-css-import-button]

Next, copy the *middle line* of code (the one with `@import` in it):
![Copy the middle line of code][g-fonts-css-import-copy]

Now, we need to paste it into our CSS code - but where? `@import` statements must always be outside of the curly brackets, but it really doesn't matter where in the document - *as long as it is above the place where the font is used* (the `font-family` property). As a general rule, I like to put Google Font imports *at the top* of CSS files so that the rest of the CSS file has access to it.

I'll explain more about CSS `@import`s in [another article][imports].

Let's paste in our line of code:
```CSS
@import url('https://fonts.googleapis.com/css?family=Ribeye+Marrow'); /* Add this line */

span {
  font-size: 50px;
  font-weight: bold;
  line-height: 200px;
  letter-spacing: 5px;
  font-family: fantasy;
}
```
Reload the page - you will see that nothing has changed! This is because we still need to declare the font using `font-family`. The reason for using the `@import` line is so that the font will work even if it is not installed on the user's computer.

Let's use our font! We simply do this by giving the name of the font as a value to the `font-family` property:
```CSS
@import url('https://fonts.googleapis.com/css?family=Ribeye+Marrow');

span {
  font-size: 50px;
  font-weight: bold;
  line-height: 200px;
  letter-spacing: 5px;
  font-family: "Ribeye Marrow"; /* Change this line */
}
```

Remember to include quotation marks if the name has a space!

Here is the result:
![Our text is now in the font Ribeye Marrow!][font-family-ribeye-marrow]{:.screenshot-white}

Now our text is in the font Ribeye Marrow!

## Conclusion

Woo! That's it for today! Hopefully, this article was useful and helped you along your coding journey. As always, if there was anything that you didn't get or if you have any feedback, [tell me in the comments][comments].

Also, these articles don't come out of thin air! Looking at my [Pomodoro Timer][pomodoro], so far I've spent 3 hours and 20 minutes on this article, and have just passed to 40,000 word mark on this blog!

While your nice comments and knowing that I am helping you all make it worthwhile, I'd really appreciate it if you [shared this][share] or [this blog](/#share) with your friends or [signed up to the newsletter][newsletter] to get the latest articles in your inbox.

See you next time, where I'll be talking about [using custom font files][custom-fonts] to extend your font choices beyond Google Fonts. See you then! Have a great and productive 2018 filled with lots of coding fun! &#128588; &#127878; &#128640;

[g-fonts]: https://fonts.google.com/
[css-units]: /2017/12/04/css-units/
[custom-fonts]: {{site.newsletter}}
[em]: /2017/12/04/css-units/#em
[ribeye-marrow]: https://fonts.google.com/specimen/Ribeye+Marrow
[imports]: {{site.newsletter}}
[pomodoro]: https://en.wikipedia.org/wiki/Pomodoro_Technique

[new-year-1]: /assets/img/posts/css-text-properties-and-google-fonts/new-year-1.jpg
[base-code]: /assets/img/posts/css-text-properties-and-google-fonts/base-code.png
[font-size]: /assets/img/posts/css-text-properties-and-google-fonts/font-size.png
[font-weight-bold]: /assets/img/posts/css-text-properties-and-google-fonts/font-weight-bold.png
[two-lines]: /assets/img/posts/css-text-properties-and-google-fonts/two-lines.png
[line-height-200px]: /assets/img/posts/css-text-properties-and-google-fonts/line-height-200px.png
[line-height-200px-annotated]: /assets/img/posts/css-text-properties-and-google-fonts/line-height-200px-annotated.png
[letter-spacing]: /assets/img/posts/css-text-properties-and-google-fonts/letter-spacing.png
[font-family-fantasy]: /assets/img/posts/css-text-properties-and-google-fonts/font-family-fantasy.png
[g-fonts-logo]: /assets/img/posts/css-text-properties-and-google-fonts/cover.png
[g-fonts-home]: /assets/img/posts/css-text-properties-and-google-fonts/g-fonts-home.png
[g-fonts-select-font]: /assets/img/posts/css-text-properties-and-google-fonts/g-fonts-select-font.png
[g-fonts-selected-panel-closed]: /assets/img/posts/css-text-properties-and-google-fonts/g-fonts-selected-panel-closed.png
[g-fonts-selected-panel-opened]: /assets/img/posts/css-text-properties-and-google-fonts/g-fonts-selected-panel-opened.png
[g-fonts-css-import-button]: /assets/img/posts/css-text-properties-and-google-fonts/g-fonts-css-import-button.png
[g-fonts-css-import-copy]: /assets/img/posts/css-text-properties-and-google-fonts/g-fonts-css-import-copy.png
[font-family-ribeye-marrow]: /assets/img/posts/css-text-properties-and-google-fonts/font-family-ribeye-marrow.png

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}