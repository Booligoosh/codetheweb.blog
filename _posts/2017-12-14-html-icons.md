---
layout: post
title: "The complete guide to HTML icons &mdash; iOS, Android, desktop and more..."
image: '/assets/img/posts/html-icons/cover.png'
tags: HTML
keywords: "favicon, favicons, icon, icons, HTML, HTML favicons, HTML favicon, HTML icon, HTML icons"
checked: [grammarly]
---
Learn how to make an icon for iOS, Android, desktop and more using HTML in this article...

## Getting started
Feel free to follow along! You may not have all the devices, operating systems or browsers I will be talking about, but you will at least be able to test one or two &#128521;

To get started create an HTML file with the following basic code:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Icons</title>
    </head>
    <body>
        <h1>HTML icons!</h1>
    </body>
</html>
```

Open it up in a browser - it should look like this:
![An HTML page with the words "HTML icons!"][base-code]

Now you're ready to go!

## The icon
In the examples today, we'll be using this waffle icon that I made (with ice-cream on top of course &#127846; &#128521;):
![Waffle icon][waffle-1200px]

> Doesn't that look delicious!

## Browser tab icons (favicons)
If you take a look at the little icon on your tab right now (these are also known as favicons), it will just give us a boring default icon - nobody wants that!

![The default 'page' icon][no-tab-icon-zoom]

> Note that depending on what browser you're using, the tabs and default icon might look slightly different. This and most of the other browser screenshots in this article are taken in Google Chrome.

So, let's add our own one! Simply add this line of code inside your `<head>`:
```HTML
<link rel="icon" type="image/png" sizes="64x64" href="https://codetheweb.blog/assets/img/posts/html-icons/icon64.png">
```
The `type` attribute depends on the image we are using. In this case, we are using a `.png` file, so we'll set our `type` to `image/png`. There are other `type`s you can use such as `image/ico` for `.ico` files.

[Click here for a list of supported file types.][favicon-file-types]

Also, make sure that your icon is either `16px` by `16px`, `32px` by `32px` or `64px` by `64px`. You need to make sure that the *actual image* has those dimensions as well as the `sizes` attribute - you can resize your images online. Note that other sizes also work, but they are not supported by all browsers. In this case, our image is `64px` by `64px` - I recommend that you use this size because it is the highest resolution out of the three.

Anyway, here is the result:
![Our favicon now shows up!][tab]

There is now an icon next to our page title! &#127881; &#127881;
![A close up of the favicon][tab-zoom]

## Safari home screen and bookmark icons
If we [add our website to the home screen][ios-add-to-home-screen] on iOS, it will give us a very ugly and weirdly-sized screenshot by default:
![A very ugly and weirdly-sized screenshot as the website icon][safari-default]

Let's add our own icon instead! To do so, add this line below your favicon line in your `<head>`:
```HTML
<link rel="apple-touch-icon" sizes="180x180" href="https://codetheweb.blog/assets/img/posts/html-icons/icon180.png">
```
As you can see, this is very similar to how we declare our favicon, except that we use `apple-touch-icon` as the `rel` attribute instead. Make sure that your icon is always `180px` by `180px`.

Now if we add it to the home screen again, we get a much better result!
![Now our waffle icon is on the home screen!][safari-custom]

This also gives our website an icon for Safari bookmarks on iOS:
![Bookmark icon on iOS][ios-bookmark-icon]

And on Mac:
![Bookmark icon on Mac][mac-bookmark-icon]

## Android icons
Websites can also be added to the home screen using Google Chrome on Android. Luckily, we don't need to specify icons just for Android! It will either use the favicon or an `apple-touch-icon` if you have one.

## Windows tiles
On Windows, if you don't know already, there are these things called tiles:
![Windows tiles][windows-tiles]

They are also used on Windows phones:
![Windows phone tiles][windows-phone-tiles]

As you can see in the photos above, we also need to create a rectangular version of our logo, for if the tile is rectangular. Here is a rectangular version of the waffle that I made:
![Rectangular waffle icon][icon-rect-2480]

In our HTML, we need to define this icon as well as three square icon sizes: `70px` by `70px`, `150px` by `150px` and `310px` by `310px`. Our rectangular icon needs to be `310px` wide by `150px` high.

One important thing though: **When making icons for Windows tiles, always have a transparent background.**

Here are our icons but with a transparent background:
![Square icon with transparent background][icon-trans-1200]
![Rectangular icon with transparent background][icon-rect-trans-2480]

Here is the HTML - add it below your Safari icon and favicon in the `<head>`:
```HTML
<meta name="msapplication-square70x70logo" content="https://codetheweb.blog/assets/img/posts/html-icons/icon70.png">
<meta name="msapplication-square150x150logo" content="https://codetheweb.blog/assets/img/posts/html-icons/icon150.png">
<meta name="msapplication-wide310x150logo" content="https://codetheweb.blog/assets/img/posts/html-icons/icon310.png">
<meta name="msapplication-square310x310logo" content="https://codetheweb.blog/assets/img/posts/html-icons/icon-rect-310.png">
```

These are slightly different to the icon types we've discussed so far, because they use `<meta>` tags instead of `<link>` tags.

But if the icons have a transparent background, won't it look weird? **Yes.** The reason that they need to have a transparent background is so that Windows can put a color beneath them. Take this tile as an example:
![Map icon tile][map-tile]
Here, the map icon would be the image (with a transparent background), and then Windows would put the pink/purple color beneath it. But how do we tell Windows which color? This is where the `msapplication-TileColor` meta tag comes in handy. In this case our waffle icon background [hex color][hex] is `#2e2e2e`. With that in mind, add this line underneath our icons inside the `<head>`:
```HTML
<meta name="msapplication-TileColor" content="#2e2e2e">
```

Here is the result of the icons and tile color meta tags:
![The square and rectangular icons as Windows tiles][custom-windows-tiles]

## If you're too lazy... &#128564;
There is this awesome website called [Real Favicon Generator][real-favicon-generator] which generates favicons, Safari icons, Windows icons and more for you. **However, I recommend that you don't use this until you are quite confident with doing it yourself** - otherwise, you will never learn. That said, you can always look it up if you need. So it's up to you.

## Conclusion
Woo! That's all there is for today. Hopefully, you learned something! If you did, I'd love it if you [shared it][share] or [signed up to the newsletter][newsletter] to get new posts in your inbox. If you do either of these things, you are awesome and deserve a space-taco if that's even a thing! &#128526; &#127790; &#128640;

I talked about icons for lots of different platforms today, and you don't have to use all of them - although it's a good idea. But for a start, you could just try getting used to favicons (the first part).

If you need help, have feedback or wanna say hi &#128075; then I'd be stoked if you did so in the [comments below][comments].

Next time, I'll be doing a special post on [Quick-reference sites to help you along your coding journey][reference-sites-to-help-you-learn-coding]. See you then!


[favicon-file-types]: https://en.wikipedia.org/wiki/Favicon#File_format_support
[ios-add-to-home-screen]: https://www.wikihow.com/Add-a-Link-Button-to-the-Home-Screen-of-an-iPhone
[hex]: /2017/11/15/basic-css-properties/#hex-values
[real-favicon-generator]: https://realfavicongenerator.net/
[reference-sites-to-help-you-learn-coding]: {{site.newsletter}}

[base-code]: /assets/img/posts/html-icons/base-code.png
[waffle-1200px]: /assets/img/posts/html-icons/icon1200.png
[no-tab-icon-zoom]: /assets/img/posts/html-icons/no-tab-icon-zoom.png
[tab]: /assets/img/posts/html-icons/tab.png
[tab-zoom]: /assets/img/posts/html-icons/tab-zoom.png
[safari-default]: /assets/img/posts/html-icons/safari-default.png
[safari-custom]: /assets/img/posts/html-icons/safari-custom.png
[ios-bookmark-icon]: /assets/img/posts/html-icons/ios-bookmark-icon.png
[mac-bookmark-icon]: /assets/img/posts/html-icons/mac-bookmark-icon.png
[windows-tiles]: /assets/img/posts/html-icons/windows-tiles.jpg
[windows-phone-tiles]: /assets/img/posts/html-icons/windows-phone-tiles.png
[icon-rect-2480]: /assets/img/posts/html-icons/icon-rect-2480.png
[icon-trans-1200]: /assets/img/posts/html-icons/icon-trans-1200.png
[icon-rect-trans-2480]: /assets/img/posts/html-icons/icon-rect-trans-2480.png
[map-tile]: /assets/img/posts/html-icons/map-tile.png
[custom-windows-tiles]: /assets/img/posts/html-icons/custom-windows-tiles.png

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}