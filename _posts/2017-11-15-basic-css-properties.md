---
layout: post
title: 'Basic CSS properties'
image: '/assets/img/posts/basic-css-properties/cover.jpg'
photoCred: [Pineapple Supply Co.,VHpDp_GkGgc]
tags: CSS
keywords: "learn CSS, how to learn CSS, CSS syntax, CSS"
---
So, what can CSS actually do? Learn about basic CSS properties such as `color`, `background-color`, `font-size` and more...

## Getting started
If you don’t already know the syntax and structure of CSS, [check out my last article][syntax] before reading this. If you  know the CSS syntax already, let's continue!

For this tutorial, we're going to have some very basic HTML - we will be focusing on the actual CSS. Make a new project folder with `index.html` and `style.css` files in it. Add the following code to your `index.html`:

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Basic CSS properties</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>I am a heading!</h1>
    </body>
</html>
```

In this tutorial, we will be testing our styles on that `<h1>` element above. Now you're ready go dive in!

## The `color` property
The first property that I want to cover today is the `color` attribute. It does exactly what you'd think - changes the text color of an element. Open up your CSS code and type the following:

```CSS
h1 {
    color: red;
}
```

If you don't understand the layout of this code, you might want to go back to my [CSS syntax tutorial][syntax] for a quick reminder. Here, we are styling the `<h1>` with our `color` property, which has a value of `red`.

> **IMPORTANT NOTE** - `color` is spelt *the American way*. Deal with it. If you spell it "colour", CSS will have no idea what you are going on about. If you are getting annoyed right now, think of all the terabytes saved worldwide by removing that one letter &#128539;

When you [preview] your code, you should see this:

![A red heading][color-screenshot]{:class='screenshot-white'}

So here we are giving `color` a value of `red`, but what values can we even give `color`?

### Color names
Color names are like in the example above, where we used the color name `red`. There are common colors (such as `yellow` and `blue`) as well as less common ones (such as `MediumSpringGreen` or `BlanchedAlmond`).

[You can see the full list of color names here.][color-names]

> NOTE: The next section goes into some more advanced color types. If you're not interested, you can [skip past](#the-background-color-property).


## RGB values
RGB stands for Red, Green and Blue, which are addded together to produce many colors. The values for R,G and B range from 0-255. Here is an example of an RGB color:
```CSS
h1 {
    color: rgb(244, 188, 66);
}
```
Try replacing your existing CSS with this and see what happens.
![A pink heading][rgb-screenshot]{:class='screenshot-white'}

### RGBA values
This is exactly the same as RGB, except with the added **A** value, standing for alpha (opacity). The value for A is a decimal from 0.0 (completely transparent) to 1.0 (completely opaque). Try adding a 50% opacity to our rgb value from above - see if you can guess what the code will be:
```CSS
h1 {
    color: rgba(244, 188, 66, 0.5);
}
```
{:class='reveal'}
Update your CSS file and see what effect it has on the text:
![A pink heading with a 50% opacity][rgba-screenshot]{:class='screenshot-white'}

### Hex values
Hex values are another way of writing RGB values (they do not support RGBA). Hex uses characters 0-f, in hexadecimal (base 16). Hex codes in CSS are made up of a `#`, followed by six characters - for example, `#37e22b`. Hex colors are made up of two-character pairs: 
- `#37e22b`
    - `37` - Red
    - `e2` - Green
    - `2b` - Blue

Sound confusing? Don't worry - all that you need to remember is that they are another way of writing RGB and how to write them. Try replacing your CSS color value with the hex code from above:
```CSS
h1 {
    color: #37e22b;
}
```
{:class='reveal'}
Now, preview your code and see what happens:

![A green heading with a hex value of #37e22b][hex-screenshot]{:class='screenshot-white'}

Hex values are the most used way of representing colors in CSS.

### Other types of colors
There are a few less common color types allowed in CSS such as [HSL] and [CMYK].

### Color converter
If you need help converting colors, check out [this handy tool][color-converter].

### Color picker
If you need help finding the RGB or HEX value of a particular color that you have in mind, check out this [color picker][color-picker].

## The `background-color` property
The `background-color` property changes the background color of an element. It takes the same values as the `color` property (the types I discussed above). Remove your existing `color` property, and replace it with this:
```CSS
h1 {
    background-color: lightskyblue;
}
```
Reload the page to see how the `background-color` property works:
![A black heading with a light blue background][bg-color-screenshot]{:class='screenshot-white'}

In the [next tutorial][sizing-and-positioning], I'll be teaching you how to make this look a lot better with the `padding`, `width` and `height` properties.

> By the way - the stuff that we're making at the moment looks __*TERRIBLE*__. But don’t lose hope - it all starts somewhere. You need to know the actual CSS properties and how they work before you can make complex stuff that looks good. That's my inspiring pep-talk done for the moment &#128539;

## The `background-image` property
Here is where things start to get fun - let's play with some images! Like in [HTML][html], images are linked from URLs (see [this article][images]). The same thing applies in CSS! Here is how you declare a background image in CSS:
```CSS
h1 {
    background-image: url('https://codetheweb.blog/assets/img/header-img.jpg');
}
```
The single quotes are not necessary, but it is good practice to put them in.

Try replacing the `background-color` in your CSS with the `background-image` url from above. See what happens:
![A black heading with an image as a background][bg-img-screenshot]{:class='screenshot-white'}

It cuts off some of the image, but at least there is an image there! In [this post][advanced-bg-images], I’ll be talking about more cool ways to manipulate the background image.

OOOKAY. Now we're done with colors and backgrounds!

## The `font-size` property
This property is used to change the size of the text, and takes an amount of pixels as a value, eg. `100px`. See if you can work out what the syntax will look like:
```CSS
h1 {
    font-size: 100px;
}
```
{:class='reveal'}

Remove your `background-image` property and replace it with a `font-size` of `100px`. Reload the page and see what happens:
![A large black heading][font-size-screenshot]{:class='screenshot-white'}

WOAAH! Now it's huge! Play around with the values and see what you think looks good.

## The `text-align` property
This is the last property I'll be covering in this tutorial. The `text-align` property is used to, well, align text. It accepts four values: `left`,`right`, `center` and `justify`. By default, text is aligned to the left in CSS. See if you can work out how to center it:
```CSS
h1 {
    text-align: center;
}
```
{:class='reveal'}

Now, remove `font-size` fromm your CSS file (again so we can focus on `text-align`) and add the above CSS instead. Preview it and see what happens:
![A centered heading][text-align-center-screenshot]{:class='screenshot-white'}

You can also align it to the right (with `text-align: right;`):
![A right-aligned heading][text-align-right-screenshot]{:class='screenshot-white'}

## Conclusion
Okay, that's it for today! I hope you enjoyed it ;)

If you have any questions, feedback or need help then [let me know below in the comments][comments]. If you liked this article, I'd love it if you [shared it with your friends][share] and [joined the newsletter for new posts][newsletter].

Have fun, and I'll see you next time where I'll be talking about [CSS sizing and positioning][sizing-and-positioning]. See you then!

> This article is the second post in my [Learn CSS series][css]. You can view all my CSS tutorials __*in order*__ [here][css] - to help you along your coding journey.

[syntax]: /2017/11/11/css-syntax/
[preview]: /2017/10/06/web-development-on-your-computer/#running-your-code
[color-names]: http://htmlcolorcodes.com/color-names/
[HSL]: https://www.w3schools.com/colors/colors_hsl.asp
[HWB]: https://www.w3schools.com/colors/colors_hwb.asp
[CMYK]: https://www.w3schools.com/colors/colors_cmyk.asp
[color-converter]: https://www.w3schools.com/colors/colors_converter.asp
[color-picker]: http://htmlcolorcodes.com/color-picker/
[sizing-and-positioning]: /2017/11/17/css-sizing-and-positioning/
[images]: /2017/10/14/links-images-about-file-paths/
[advanced-bg-images]: /2017/12/02/css-advanced-background-images/

[color-screenshot]: /assets/img/posts/basic-css-properties/color-screenshot.png
[rgb-screenshot]: /assets/img/posts/basic-css-properties/rgb-screenshot.png
[rgba-screenshot]: /assets/img/posts/basic-css-properties/rgba-screenshot.png
[hex-screenshot]: /assets/img/posts/basic-css-properties/hex-screenshot.png
[bg-color-screenshot]: /assets/img/posts/basic-css-properties/bg-color-screenshot.png
[bg-img-screenshot]: /assets/img/posts/basic-css-properties/bg-img-screenshot.png
[font-size-screenshot]: /assets/img/posts/basic-css-properties/font-size-screenshot.png
[text-align-center-screenshot]: /assets/img/posts/basic-css-properties/text-align-center-screenshot.png
[text-align-right-screenshot]: /assets/img/posts/basic-css-properties/text-align-right-screenshot.png

[html]: /learn/html
[css]: /learn/css
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}