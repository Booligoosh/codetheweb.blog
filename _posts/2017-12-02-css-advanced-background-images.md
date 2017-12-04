---
layout: post
title: "Advanced background image manipulation using CSS"
image: '/assets/img/posts/css-advanced-background-images/cover.jpg'
photoCred: [Alessandro Sacchi,NUFnfYd09iI]
tags: CSS
keywords: "learn CSS, CSS syntax, CSS, background images, background, images, CSS background images, CSS background image property, background image property"
---
Background images can do more than you think - learn about cool ways to manipulate background images using CSS...

## Getting started
I think that it is best to learn by doing, so I highly recommend following along in all my tutorials. To follow along start by making a new project folder with `index.html` and `style.css` files in it. Add the following code to your `index.html`:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>CSS advanced background images DEMO</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Background images</h1>
    </body>
</html>
```

The image that I will be using for the demos in this article is the following:
![An image of mountains][bg-img]

And add a `background-image` to the `body` element in your `style.css` file:
```CSS
body {
    height: 150vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg');
}
```
If you don't know how to use the `background-image` property, [check here first][background-image] - I'll be here when you get back!

The reason for the `body` height is so that we can scroll on our page - you will see why this is relevant later in the tutorial. `150vh` basically means [150% of the viewport height][units-vh].

When you open your HTML file in a browser, it should look like this:

![Text on top of the mountains background image][base-code]

If yours is looking right, let's continue!

## Background-image related properties
As well as the `background-image` property, there are many properties that modify how the `background-image` is *displayed*:
- `background-size`
- `background-position`
- `background-repeat`
- `background-size`

In this article, I'll be going through each one individually... Let's get started!

## background-size
Remember our original image?
![An image of mountains][bg-img]
However on our page, it is super-zoomed in on the sky!
![Text on top of the mountains background image][base-code]
This is because by default, the `background-image` is set to the actual dimensions of the image (`4272px` by `2848px`)

Let's fix this up!

The `background-size` property can be set to either `cover`, `contain` or any unit value (eg. `1500px`).

`background-size: cover` sets the image size so that it covers the entire element (in this case the `body`).

`background-size: contain` makes sure that all of the `background-image` is shown within the element.

In this case, we'll want to use `cover` - this way we can see most of the image, but it will cover the whole screen! Let's try it out:
```CSS
body {
    height: 150vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg');
    background-size: cover; /* Add this line */
}
```
Result:
![Most of the image is now shown!][bg-size-cover]
If you scroll down, you can see more of the image - this is because it is covering the `body` element (which is 150% of the viewport height), not the actual screen.

You can also set the `background-size` to an actual value - change your CSS to this:
```CSS
body {
    height: 150vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg');
    background-size: 2000px; /* Change this line from cover */
}
```
Result:
![The image width is 2000px][bg-size-2000px]
Again if you scroll down, you will see a bit more of the image.

## background-attachment: fixed
`background-attachment: fixed;` is used to to make the image stay in the same place as you scroll down. It is kind of like [`position: fixed`][position-fixed] but for background images. Let's try it out and see what it does:
```CSS
body {
    height: 150vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg');
    background-size: 2000px;
    background-attachment: fixed; /* Add this line */
}
```
Now when you scroll down the page, the `background-image` will not move with it:
![When you scroll down the page, the `background-image` does not move with it][bg-attachment-fixed]

> **IMPORTANT:**
> Before continuing, remove the `background-attachment: fixed` line, so that we can focus on the other properties. Your CSS should look like this:
> ```CSS
body {
    height: 150vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg');
    background-size: 2000px;
}
```

## background-position
As you can see, not the whole image is shown - but which part *is* shown?
![The top-left corner of the image is shown][default-position-highlight]

What if we want to show the center of the image?
![The center of the image][center-position-highlight]

This is where we can use the `background-position` property:
```CSS
body {
    height: 150vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg');
    background-size: 2000px;
    background-position-x: center; /* Add this line */
    background-position-y: center; /* Add this line */
}
```
Result:
![The website using position: center center][position-center-center]

The `background-position-x` and `background-position-y` are used to position the image horizontally (`x`) and vertically (`y`).

The accepted values for `background-position-x` are:
- `left`
- `center`
- `right`

And for `background-position-y`:
- `top`
- `center`
- `bottom`

In addition, both accept numerical values eg `200px`. They are calculated from the top-right corner. So for example, a `background-position-x` of `500px` would be `500px` from the left, and a `background-position-y` of `300px` would be `300px` from the top.

For the moment, let's leave both as `center`... (although you can play around if you want &#128521;<!--http://graphemica.com/%F0%9F%98%89-->)

## background-repeat

You know those tiled backgrounds? Often this looks ugly, but can work well with repeating textures. For this article we're just going to use our mountatin image, so the tiling is more obvious. Let's see what happens when we tile an image:
```CSS
body {
    height: 150vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg');
    background-size: 500px; /* Change this line from 2000px, so that we can see it tiling */
    background-position-x: center;
    background-position-y: center;
}
```
Result:
![The mountains image is now tiled!][tiled]

Wait, what? But this is a rip-off! We didn't even use `background-repeat`!

This is because a background has `background-repeat` turned on by default. The only reason that it didn't happen before was because our image was so large that it didn't need tiling.

The `background-repeat` property has two main values: `repeat` and `no-repeat`. It's as simple as that!

By default `background-repeat` is set to `repeat`, so you will not usually need to use that. However, what if you want to turn off the tiling? Let's try it out:
```CSS
body {
    height: 150vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg');
    background-size: 500px;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat; /* Add this line */
}
```
Result:
![The image is no longer tiled][no-repeat]{:.screenshot-white}
(the reason that the image is near the bottom of the screen is because the body height is 150%, remember?)

There we go! That's how the `background-repeat` property works in CSS!

## Multiple backgrounds
You will notice that now there is ugly white around our image. What if we wanted to make that, let's say, orange for example? Believe it or not, you can actually specify multiple backgrounds in CSS!

First background will be put on the screen, and other backgrounds after will be layered on top.

So, let's try it out! Remember, the `background-color: orange` comes first because we want it *below* the image:
```CSS
body {
    height: 150vh;
    background-color: orange;  /* Add this line */
    background-image: url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg');
    background-size: 500px;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat; /* Add this line */
}
```
Result:
![Now the white background has been replaced with orange][color-and-img]

## Conclusion
Okay, there we go! You've just learnt a bunch of cool stuff that you can do with background images, and these properties come in handy very often. If you have any feedback or need any help, [hit me up in the comments][comments].

Also if you liked this article, I'd love it if you [shared it][share] or signed up [to the newsletter][newsletter]. It takes a lot of time and effort to make a blog (25,000 words and counting), and I'd really appreciate if you did one (or both!) of those things.

Have fun and I'll see you next time, where I'll be talking about [the different types of units in CSS][units] and what they do - there are more than you think!

[background-image]: /2017/11/15/basic-css-properties/#the-background-image-property
[units-vh]: {{site.newsletter}}
[position-fixed]: /2017/11/21/css-position-property/#position-fixed
[units]: /2017/12/04/css-units/

[bg-img]: /assets/img/posts/css-advanced-background-images/cover.jpg
[base-code]: /assets/img/posts/css-advanced-background-images/base-code.png
[bg-size-cover]: /assets/img/posts/css-advanced-background-images/bg-size-cover.png
[bg-size-2000px]: /assets/img/posts/css-advanced-background-images/bg-size-2000px.png
[default-position-highlight]: /assets/img/posts/css-advanced-background-images/default-position-highlight.jpg
[center-position-highlight]: /assets/img/posts/css-advanced-background-images/center-center-highlight.jpg
[position-center-center]: /assets/img/posts/css-advanced-background-images/position-center-center.png
[tiled]:  /assets/img/posts/css-advanced-background-images/tiled.png
[no-repeat]: /assets/img/posts/css-advanced-background-images/no-repeat.png
[color-and-img]: /assets/img/posts/css-advanced-background-images/color-and-img.png
[bg-attachment-fixed]: /assets/img/posts/css-advanced-background-images/bg-attachment-fixed.gif

[html]: /learn/html
[css]: /learn/css`
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}