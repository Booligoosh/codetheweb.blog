---
layout: post
title: "Styling a navigation bar using CSS"
image: '/assets/img/posts/style-a-navigation-bar-css/cover.png'
photoCred: [Christopher Burns,C1J_eSGNPt0]
tags: CSS
keywords: "navigation bar, navbar, navbar css, navigation bar css, css navigation bar"
checked: [grammarly]
---
You can find navigation bars on almost any website on the internet. Learn how to code and style one in this article!

## The final product
Here is what we'll be making today:

![The final product][final-product]

[You can see a live demo here.][demo]{:target='_blank'}

## Terminology
> Lol, this sounds like the start of a legal agreement &#128514;

For the purposes of this article, a navigation bar (nav-bar) is the same thing as a header. I'll be using the term "nav-bar" in this article, but just know that they are basically the same.

## Getting started
I recommend that you follow along in each of my tutorials - it will really help you learn and grasp the concepts faster. Especially in tutorials like this, it will be fun to code along.

To get started, create a new project folder and create blank `index.html` and `style.css` files inside. Let's get going and fill them up!

## The HTML
As you know, the HTML is the start of any website. Add the following to your `index.html` file:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Navigation bar DEMO</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
           <img src="https://codetheweb.blog/assets/img/icon2.png">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat libero eget magna commodo, quis pharetra tellus pretium. Sed viverra ante in mauris finibus dapibus. Maecenas congue dapibus nulla, eu gravida orci consequat eu. Phasellus nec nunc malesuada, aliquam massa ac, accumsan metus. Fusce sed dignissim lectus. Nunc elit tellus, sollicitudin ac accumsan ut, egestas et dui. Maecenas aliquam est a ligula scelerisque, in aliquam neque sodales. Nullam condimentum euismod dictum. Curabitur non ex elementum, pretium enim ut, ornare ipsum.</p>
        </main>
    </body>
</html>
```
Inside the body, we have the header and navigation elements. If you are not familiar with this structure of a navigation bar in HTML, [take a look at this article][navigation-html].

Below the header, we have some dummy text inside the `<main>` element. This is so that we can see problems that will arise later in the tutorial.

Open up your `index.html` file in a browser - at this point, it should look like so:

![The basic HTML viewed in our browser][base-html]{:.screenshot-white}

Note that you will probably have to scroll down unless you are reeeaaaally zoomed out because our image is massive!

Time for our CSS...

## The basic CSS
First of all, our image is waaaaaay too big. Let's shrink it down to a height of `80px` - this will be the height of our nav-bar. Add the following to your `style.css` file:
```CSS
header img {
    height: 80px;
}
```
Result:
![The image is now a good size!][fixed-image-height]{:.screenshot-white}

Phew, I can breathe now &#128517;

Next, let's set our styling up so we will be able to see what's going on. First of all, we want to be able to scroll - we can do this by setting the `<body>` height to `125vh` ([viewport height][vh]). We want to be able to *see* when we are scrolling down, and we can do this by adding a `background-image`. While we're at it, let's set our font to `sans-serif` so it doesn't look as terrible. Here's the CSS:

```CSS
header img {
    height: 80px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
}
```

One more thing, let's add a `color` to our `<main>` so that we can see the dummy text better:
```CSS
header img {
    height: 80px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
}

main {
    color: white;
}
```
Here's the result of all that:
![The result of the styles so far][base-css]

Don't worry about changing the colors of the links because we will be styling those later anyway.

## Positioning the nav-bar
Okay, now our website is looking alright - but not our nav-bar! It still looks like a list, because **whenever you make a navigation bar, it has to have [a specific structure][navigation-html]** (the one containing an `<ul>`). This is because it is easier for web crawlers to navigate, and also [Google will like you][seo] &#128521;

First of all, let's start by positioning the actual `<header>` element. We'll also want to give the `<header>` a `background-color` so that we can see its position. Let's add some styles!

```CSS
header img {
    height: 80px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
}

main {
    color: white;
}

header {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
}
```

Here' we're positioning the `<header>` element [using`position : fixed`][position-fixed]. Then, we also set the `height` to `80px` like I mentioned earlier (the only reason that we're using that specific is because it looks good).

Here is the result:
![The header is now positioned!][header-positioning]{:.screenshot-white}

Yay, our header/nav-bar is now positioned! However, the dummy text in the `<main>` has been obscured &#128533;

Now that the nav-bar has a `position` of  `fixed`, the rest of the content on the page moves up. This means that the main text is actually *underneath* our nav-bar!

To fix this, we simply need to give the body a `margin-top` equal to the height of the nav-bar, `80px`:

```CSS
header img {
    height: 80px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
    margin-top: 80px;
}

main {
    color: white;
}

header {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
}
```
Result:
![The main text is no longer hidden under the nav-bar!][body-margin-top]{:.screenshot-white}

Woo! The only thing is that now the text is right up against the bottom of the nav-bar &#128533; Let's fix it by adding some `padding` (I totally didn't mean for that to rhyme &#128514;) - here is the CSS:

```CSS
header img {
    height: 80px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
    margin-top: 80px;
    padding: 30px;
}

main {
    color: white;
}

header {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
}
```
Result:
![Now the text has some padding][body-padding]{:.screenshot-white}
Much better!

Here are the `margin` and `padding` of the body visualized:
![The margin and padding of the body visualized][body-margin-padding-visualized]{:.screenshot-white}
(the margin is orange, the padding is green and the main part of the body is blue)

Congrats, now we've got our page pretty much working! However, not the stuff inside the `<header>` - it is overlapping the rest of the text and looks bad.

## Styling the contents of the nav-bar
Now, let's position the items inside the nav-bar! First of all, we want to make the items go horizontally instead of vertically. We can do this using `display: inline`:

```CSS
header img {
    height: 80px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
    margin-top: 80px;
    padding: 30px;
}

main {
    color: white;
}

header {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
}

header * {
    display: inline;
}
```
Here, we are using the selector `header *`. The `*` is a wildcard and can mean any element. So `header *` basically means any element inside the `header`. Also, note that when we use `display: inline`, the bullet points go away. The reason that the bullet points appear in the first place is that by default `<li>` elements have a `display` type of `list-item`. So when we override this and change it to `inline`, the bullet points disappear.

Here is the result:
![The header items are now displayed horizontally][header-items-inline]{:.screenshot-white}

However, our links now go to the bottom of the nav-bar! We can make them go to the top of the nav-bar by giving our `<header>` element a `display` property of [`flex`][flex]:

```CSS
header img {
    height: 80px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
    margin-top: 80px;
    padding: 30px;
}

main {
    color: white;
}

header {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
}

header * {
    display: inline;
}
```
Result:
![The nav-bar items are now at the top of the screen][header-display-flex]{:.screenshot-white}

However, the text is still not vertically aligned to the middle of the nav-bar. We can vertically align our items in the nav-bar using `align-items: center`. If you don't know about `display: flex` or `align-items: center`, check out my [flexbox tutorial][flex]. Here is the CSS:

```CSS
header img {
    height: 80px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
    margin-top: 80px;
    padding: 30px;
}

main {
    color: white;
}

header {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
}

header * {
    display: inline;
}
```
Result:
![Woo! Our nav-bar items are finally vertically aligned!][align-items-center]{:.screenshot-white}

However, all the links in the nav-bar are very squished together - we can space them out more by giving them a `margin` property:

```CSS
header img {
    height: 80px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
    margin-top: 80px;
    padding: 30px;
}

main {
    color: white;
}

header {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
}

header * {
    display: inline;
}

header li {
    margin: 20px;
}
```
Result:
![The items in the nav-bar are now much more spaced out][header-items-margin]{:.screenshot-white}

That looks better! Now that our nav-bar items are positioned, it's time to give them some styles! We want to take away the ugly default link styles, so let's go ahead and do that - we can set the `color` to `black` and the `text-decoration` to `none` (normally it would be `underline`). Here is the CSS:

```CSS
header img {
    height: 80px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
    margin-top: 80px;
    padding: 30px;
}

main {
    color: white;
}

header {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
}

header * {
    display: inline;
}

header li {
    margin: 20px;
}

header li a {
    color: black;
    text-decoration: none;
}
```
Result:
![The links in our nav-bar are now rid of the default styling :)][link-styling-override]{:.screenshot-white}

We're on the final stretch now! Our logo (well, my logo technically &#128540;) looks a bit weird, so let's fix up the positioning by adding a `margin-left`! Here is the CSS:

```CSS
header img {
    height: 80px;
    margin-left: 40px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
    margin-top: 80px;
    padding: 30px;
}

main {
    color: white;
}

header {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
}

header * {
    display: inline;
}

header li {
    margin: 20px;
}

header li a {
    color: black;
    text-decoration: none;
}
```
Result:
![There we are, the logo spacing looks better now][logo-margin-left]{:.screenshot-white}
Much more aesthetically pleasing! &#128536;

Okay, this is the last thing for today, and it's very cool. We're going to add a shadow to our navigation bar. What? A shadow? I thought that was stuff that you could only do in Photoshop???

Well, believe it or not, CSS has its own way of making shadows - in fact, multiple ways! In another article, I'll be going through [all the different types of CSS shadows][shadows] in more depth.

For the moment, we'll be using the `box-shadow` property. It simply creates a rectangular shadow around an element.

Here is the syntax for the `box-shadow` property:
![box-shadow: {x-offset} {y-offset} {blur} {spread}][box-shadow-syntax]

The `x-offset` and `y-offset` are how far to the side and up/down the shadow is, `blur` is how blurred the shadow is, and `spread` is how far out of the element the shadow spreads. All of these values can be negative, except for `blur`. Afterwards, we have the color that we want the shadow to be. Let's add a very simple (but effective) shadow to our nav-bar:

```CSS
header img {
    height: 80px;
    margin-left: 40px;
}
body {
    height: 125vh;
    background-image: url('https://codetheweb.blog/assets/img/posts/style-a-navigation-bar-css/background.jpg');
    background-size: cover;
    font-family: sans-serif;
    margin-top: 80px;
    padding: 30px;
}

main {
    color: white;
}

header {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 25px 0 black;
}

header * {
    display: inline;
}

header li {
    margin: 20px;
}

header li a {
    color: black;
    text-decoration: none;
}
```
As you can see, we're really only using the `blur` here - we are setting rest of the values (`x-offset`, `y-offset` and `spread`) to `0`. Here is the result:
![The nav-bar now has a shadow!][final-product]{:.screenshot-white}

Awesome!!! Our navigation bar now has a shadow!!! &#127881;

That's it for today &#128521;

## Conclusion
So, I hope you learned a lot in this article! Now you can go forth and make your own navigations bars. They are used by almost every website you visit, so are a very important thing to know how to code.

In future, I'll be writing a tutorial on [how to style a *responsive* navigation bar][responsive-nav], meaning that it will adapt to different screen sizes (eg. show a 'menu' icon on mobile).

In the meantime, I'd really love it if you [shared this][share] or [subscribed to the newsletter][newsletter] to receive new posts in your inbox. If you do either of those things, you are awesome and I will give you a lifetime supply of tacos &#127790; (not really, just my new marketing tactic &#128540; ).

Have fun, keep coding and I'll see you next time, where I'll be talking about [website icons in HTML][html-icons] (I thought I'd change it up a bit and do an HTML one). See you then!

[navigation-html]: /lists-and-navigation/#navigation
[demo]: /demo/style-a-navigation-bar-css/
[vh]: /css-units/#vw--vh
[seo]: {{site.newsletter}}
[position-fixed]: /css-position-property/#position-fixed
[flex]: /css-flexboxes/
[shadows]: {{site.newsletter}}
[responsive-nav]: {{site.newsletter}}
[html-icons]: /html-icons/


[final-product]: /assets/img/posts/style-a-navigation-bar-css/final-product.png
[final-product-gif]: /assets/img/posts/style-a-navigation-bar-css/final-product.gif
[base-html]: /assets/img/posts/style-a-navigation-bar-css/base-html.png
[fixed-image-height]: /assets/img/posts/style-a-navigation-bar-css/fixed-image-height.png
[base-css]: /assets/img/posts/style-a-navigation-bar-css/base-css.png
[header-positioning]: /assets/img/posts/style-a-navigation-bar-css/header-positioning.png
[body-margin-top]: /assets/img/posts/style-a-navigation-bar-css/body-margin-top.png
[body-padding]: /assets/img/posts/style-a-navigation-bar-css/body-padding.png
[body-margin-padding-visualized]: /assets/img/posts/style-a-navigation-bar-css/body-margin-padding-visualized.png
[header-items-inline]: /assets/img/posts/style-a-navigation-bar-css/header-items-inline.png
[header-display-flex]: /assets/img/posts/style-a-navigation-bar-css/header-display-flex.png
[align-items-center]: /assets/img/posts/style-a-navigation-bar-css/align-items-center.png
[header-items-margin]: /assets/img/posts/style-a-navigation-bar-css/header-items-margin.png
[link-styling-override]: /assets/img/posts/style-a-navigation-bar-css/link-styling-override.png
[logo-margin-left]: /assets/img/posts/style-a-navigation-bar-css/logo-margin-left.png
[box-shadow-syntax]: /assets/img/posts/style-a-navigation-bar-css/box-shadow-syntax.png

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
