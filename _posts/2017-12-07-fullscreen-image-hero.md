---
layout: post
title: "How to create a full-page hero image (HTML & CSS)"
image: '/assets/img/posts/full-image-hero/cover.png'
photoCred: [ben o'bro,wpU4veNGnHg]
tags: CSS
keywords: "hero image tutorial, hero image, tutorial, hero image html, hero image css, hero image code, fullscreen hero image, fullsize hero image"
wordsAdjust: 496
checked: [grammarly]
---
Hero images are used by websites all over the internet and look awesome. Learn how to code one in this article...

## What we'll be making
Here's what we'll be making today:
![A full-screen image header][final-product-gif]

[You can view a live demo here.][demo]{:target='_blank'}

## Let's get going!
First of all, you will need to create a brand-new empty folder for this project. In it, create two new files: `index.html` and `style.css`.

## Creating the HTML
To begin with, we need to create the [HTML document structure][document-structure]:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        Hello!
    </body>
</html>
```

Don't forget to include the `<link>` to your stylesheet!

At this point save, open up your HTML file in a browser and check that everything is working.

### The hero HTML code
The image part of the page (see the demo) is called the *hero image*. Let's add our hero image and the content inside it to our HTML:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <section class="hero">
            <div class="hero-inner">
                <h1>My awesome website</h1>
                <h2>Look at this website and bask in its amazing glory!</h2>
                <a href="https://example.com/" class="btn">Go ahead...</a>
            </div>
        </section>
    </body>
</html>
```

Wooah, what's going on here? Let's break it down...

First, we create a `<section>` which will be our hero:
```HTML
<section class="hero">
    
</section>
```

A `<section>` acts just like a `<div>` except it tells browsers and search engines that it is a section on our page.

Next, we add an inner `<div>` - this is so we can get our [flexboxes][flexbox] working, which I'll delve into later in this tutorial.

```HTML
<section class="hero">
    <div class="hero-inner">
        
    </div>
</section>
```

Finally, we add our actual content - simply an `<h1>`, `<h2>` and a link (`<a>`).

### The main content HTML code
As you can see from the demo, we have some dummy text below the hero so that we can scroll. To keep this article on-topic, we won't be styling that in this article. So, let's add our dummy text!
```HTML
<!DOCTYPE html>
<html>

<head>
    <title>My awesome website</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <section class="hero">
        <div class="hero-inner">
            <h1>My awesome website</h1>
            <h2>Look at this website and bask in its amazing glory!</h2>
            <a href="https://example.com/" class="btn">Go ahead...</a>
        </div>
    </section>
    <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec nibh molestie, efficitur leo sed, viverra nunc. Donec vehicula accumsan erat facilisis ullamcorper. Donec commodo quis dui nec placerat. Donec mi orci, scelerisque eget nisl ac, hendrerit condimentum odio. Nam dictum odio eget quam tempus, a mattis odio ornare. Nullam auctor libero ut libero suscipit, ut accumsan nunc condimentum. Donec ullamcorper maximus sapien quis egestas.</p>

        <p>Mauris viverra scelerisque lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ultrices enim sit amet elit tincidunt maximus. Suspendisse vitae pellentesque lectus. Duis commodo leo suscipit augue mollis, non venenatis dolor ullamcorper. Duis tincidunt scelerisque lacus, vel vehicula leo consectetur vel. Duis posuere nisl non odio consequat ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <p>Etiam a leo nec mi blandit euismod. Etiam fringilla odio vitae risus ornare, id bibendum velit consequat. Fusce posuere risus sollicitudin condimentum ultrices. Fusce gravida, purus eget laoreet mattis, velit sapien ultrices diam, id dapibus erat leo id quam. Maecenas quis risus convallis, placerat elit non, iaculis tortor. Nullam porttitor magna risus, quis bibendum metus tincidunt in. Etiam vel ligula ac risus mattis tincidunt vel sit amet ante. Morbi et viverra ligula. Ut ac dignissim nisi, condimentum imperdiet mauris. Pellentesque ut ipsum vel diam tristique faucibus eu et lectus. Maecenas posuere neque non lacus bibendum, sit amet pharetra justo semper. Sed mi risus, tempor sit amet ligula eget, varius pretium est. Sed a odio in orci accumsan pretium suscipit ut quam.</p>
    </main>
</body>

</html>
```

As you can see, all we did was stick some `<p>`'s inside a `<main>`. Like `<section>`, `<main>` acts very similar to a `<div>` except that it tells browsers and search engines that it is the 'main' content of the page.

That's it for the HTML! Let's move on to styling our page...

## The CSS!
At the moment your website will look something like this:
![Only HTML content, no CSS :(][before-css]{:.screenshot-white}

That looks nothing like what we want - let's add some styling! We'll start with positioning the text and setting the sizing...

## Body styling

First of all, let's open up our `style.css` file and apply some general styling to the body:
```CSS
body {
    margin: 0;
    font-family: sans-serif;
}
```
The body has a default margin, which we do not want interfering without image header, which is why we have set it to 0. The reason that we have set the `font-family` to `sans-serif` is so that you're not stuck with Times New Roman &#128540;

You can actually set the text to be in any font you want, but it gets a little more complicated - I will go into that in a [later article][font-family].

## Hero positioning and sizing

Let's get the positioning and sizing of our elements worked out so we know where everything will be on the page.

First of all, we want to style the actual hero section itself:
```CSS
.hero {
    /* Sizing */
    width: 100vw;
    height: 100vh;
}
```

If you don't already know, [`vw` and `vh`][vw-vh] stand for the percentage of the viewport width and height. In this case, we are setting our hero to be 100% of the browser width and height.

Save and reload your browser - now the hero section takes up the whole screen! (you have to scroll down to see the rest of the page)

![The hero section now takes up the whole screen!][hero-sizing]{:.screenshot-white}

We want our text to be centered both horizontally *and* vertically within our hero section, so it shows up in the middle of the screen. The best way to do this is using [flexboxes][flexbox] (I wrote a little bit about perfect centering using flexboxes [here][perfect-centering]).

So, let's add some perfect centering to our hero!

```CSS
.hero {
    /* Sizing */
    width: 100vw;
    height: 100vh;
    
    /* Flexbox stuff */
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Now, when you save reload your page, the text will be centered on the screen!
![The text is centered... or not :P][flexbox-centered]{:.screenshot-white}

...or not.

You see, we also need to make sure that our actual *text* is centered, not just the elements that the text is in. We can do this simply by using `text-align: center`:
```CSS
.hero {
    /* Sizing */
    width: 100vw;
    height: 100vh;
    
    /* Flexbox stuff */
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* Text styles */
    text-align: center;
}
```

There we go! Our hero content is now perfectly centered!
![Our hero content is now perfectly centered!][properly-centered]{:.screenshot-white}

## Text styling

Now, let's make our main title larger so that we know it's the title:

```CSS
.hero h1 {
    /* Text styles */
    font-size: 5em;
}
```
Result:
![The title is now larger!][large-title]{:.screenshot-white}

However, now there is an oddly large space between our title and subtitle. This is because by default for header elements, as its `font-size` increases then so do its margins. So, let's tweak them a bit:
```CSS
.hero h1 {
    /* Text styles */
    font-size: 5em;
    
    /* Margins */
    margin-top: 0;
    margin-bottom: 0.5em;
}
```
Now it looks a bit better!
![The margins for the title have been tweaked][fixed-title-margins]{:.screenshot-white}

Now that our title and subtitle look good, let's style our button!

## Button styling

First of all, we need to give the button a `display` type of `block` (`<a>` elements are `inline` by default) so that it will behave like other elements. We also need to give it a `width` - otherwise, it will take up the full width of the screen. To help visualize what's going on, let's also add a border:
```CSS
.hero .btn {
    /* Positioning and sizing */
    display: block;
    width: 200px;
    
    /* Border styles */
    border: 3px solid black;
}
```
Result:
![The button now has a border and is 200px wide][btn-initial-styling]{:.screenshot-white}

Let's add some `margin` and `padding` to make the button look a bit nicer:
```CSS
.hero .btn {
    /* Positioning and sizing */
    display: block;
    width: 200px;
    
    /* Padding and margins */
    padding: 1em;
    margin-top: 50px;
    
    /* Border styles */
    border: 3px solid black;
}
```
![Margin and padding added to the button to space it out a bit][btn-margin-padding]{:.screenshot-white}

However, our button is still not centered! This is because it has a fixed width unlike the other elements in the flexbox. Luckily, the fix is quite simple - we simply add a `margin-left` and `margin-right` of `auto`! This works because `auto` takes up the maximum amount of space available, so that means there is an equal margin on both sides.

Let's try it out:
```CSS
.hero .btn {
    /* Positioning and sizing */
    display: block;
    width: 200px;
    
    /* Padding and margins */
    padding: 1em;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    
    /* Border styles */
    border: 3px solid black;
}
```
Result:
![The button is now centered!][btn-centered]{:.screenshot-white}

Next, let's add some styling to our button text, to override the default link styles and also make the text bigger. This is one big rule of web design, which is that **people are more likely to click on bigger things**. In this case, we want people to click on our button (call to action), so we will make the text bigger. So, let's add the CSS:
```CSS
.hero .btn {
    /* Positioning and sizing */
    display: block;
    width: 200px;
    
    /* Padding and margins */
    padding: 1em;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    
    /* Text styles */
    color: black;
    text-decoration: none;
    font-size: 1.5em;
    
    /* Border styles */
    border: 3px solid black;
}
```
Result:
![The text is now bigger and doesn't look like a default link][btn-text-styles]{:.screenshot-white}

All that's left is to round the edges of the button - we can do this using the `border-radius` property:
```CSS
.hero .btn {
    /* Positioning and sizing */
    display: block;
    width: 200px;
    
    /* Padding and margins */
    padding: 1em;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    
    /* Text styles */
    color: black;
    text-decoration: none;
    font-size: 1.5em;
    
    /* Border styles */
    border: 3px solid black;
    border-radius: 20px;
}
```
![The button is now rounded][btn-border-radius]{:.screenshot-white}

## Hero background styling
Woo! After all that, it's finally time to add our actual image to our hero!
We can do this using the `background-image` property, and also some other [background-related properties][advanced-bg-images]{:target='_blank'}:
```CSS
.hero {
    /* Sizing */
    width: 100vw;
    height: 100vh;
    
    /* Flexbox stuff */
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* Text styles */
    text-align: center;
    
    /* Background styles */
    background-image: url(https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
```
I'll quickly go through what each of these do:
```CSS
background-image: url('https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg');
```
Sets the background image of our hero to [this image][bg-image-link]
```CSS
background-size: cover;
```
Makes sure that our background is large enough to cover the entire hero.
```CSS
background-position: center center;
```
Positions the image so that it is in the center of the screen.
```CSS
background-repeat: no-repeat;
```
Stops the image from repeating/tiling.
```CSS
background-attachment: fixed;
```
Makes the background image stay in the same spot, even you scroll down the page.

Save, reload and take a look at the result:
![The results of the background-image property][bg-img-gif]

Awesome! However, it is very hard to see the text now. What if we tried making everything white?
Here are the lines of our CSS file to add/change:
```CSS
body {
    margin: 0;
    font-family: sans-serif;
}

.hero {
    /* Sizing */
    width: 100vw;
    height: 100vh;
    
    /* Flexbox stuff */
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* Text styles */
    text-align: center;
    color: white; /* ADD THIS LINE */
    
    /* Background styles */
    background-image: url('https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.hero h1 {
    /* Text styles */
    font-size: 5em;
    
    /* Margins */
    margin-top: 0;
    margin-bottom: 0.5em;
}

.hero .btn {
    /* Positioning and sizing */
    display: block;
    width: 200px;
    
    /* Padding and margins */
    padding: 1em;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    
    /* Text styles */
    color: white; /* CHANGE THIS LINE */
    text-decoration: none;
    font-size: 1.5em;
    
    /* Border styles */
    border: 3px solid white; /* CHANGE THIS LINE */
    border-radius: 20px;
}
```

You should have changed two lines and added one (see above).

Now, let's take a look at the result:
![The text is now white and its still hard to read][white-over-bg]

Hmm, it still doesn't work. However, if we darken the background image then it might! But how do we do this?

I'm going to tell you something cool - believe it or not, you can have multiple background-images for the same element! All you need to do is separate them with commas. So if we have our photo background image and then a semi-transparent black background-image on top, we will be able to see through - but it will have been darkened.

<a id="bg-gradient-overlay"></a>

The thing is that `background-image` doesn't take colors. But it does take [gradients][gradients]! So, we can make a gradient between two colors that are the same, and effectively use a 'color' as a `background-image`. Here is the CSS:
```CSS
.hero {
    /* Sizing */
    width: 100vw;
    height: 100vh;
    
    /* Flexbox stuff */
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* Text styles */
    text-align: center;
    color: white;
    
    /* Background styles */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
```
This concept may be a little confusing to grasp, but think of it as if the gradient on top is like a sunglasses lense - it is in between you and the view, and darkens it. If you need any further help, I'm happy to [in the comments][comments].

Anyway, let's preview our website - save and reload the page:
![The background has been darkened!][darkened-background]

Yay! The text is finally readable!

One more thing though - to help our button stand out against the background image, let's give it a `background-color` of its own!
```CSS
.hero .btn {
    /* Positioning and sizing */
    display: block;
    width: 200px;
    
    /* Padding and margins */
    padding: 1em;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    
    /* Text styles */
    color: white;
    text-decoration: none;
    font-size: 1.5em;
    
    /* Border styles */
    border: 3px solid white;
    border-radius: 20px;
    
    /* Background styles */
    background-color: rgba(147, 112, 219, 0.8);
}
```
Result:
![Yay! We've made our final product!][final-product-gif]

## Conclusion

Awesome, you've made it! Now your website should look just like the [demo] - congrats &#128512; - Hopefully it wasn't *too* confusing &#128540;

As always, if you need any help or have any feedback then just say so in the [comments below][comments] and I'll get back to you!

If you found this article helpful, I'd really love it if you [shared it][share] or [signed up to the newsletter][newsletter] to receive new posts in your inbox. If you do either/both of these things, you're officially awesome and deserve a taco &#127790; &#127790; &#128640;

Okay! Have fun, keep coding and I'll see you next time, where I'll be talking about [how to make and style a navigation bar using HTML & CSS][style-nav-bar]. See you then!



[demo]: /demo/full-image-hero/
[document-structure]: /2017/10/07/structure-of-an-html-document/
[flexbox]: /2017/12/05/css-flexboxes/
[font-family]: /2018/01/17/css-text-properties-and-google-fonts/#font-family
[vw-vh]: /2017/12/04/css-units/#vw--vh
[perfect-centering]: /2017/12/05/css-flexboxes/#perfect-centering
[advanced-bg-images]: /2017/12/02/css-advanced-background-images/
[bg-image-link]: /assets/img/posts/full-image-hero/image.jpg
[gradients]: {{site.newsletter}}
[style-nav-bar]: /2017/12/12/style-a-navigation-bar-css/

[final-product]: /assets/img/posts/full-image-hero/final-product.png
[final-product-gif]: /assets/img/posts/full-image-hero/final-product.gif
[before-css]: /assets/img/posts/full-image-hero/before-css.png
[hero-sizing]: /assets/img/posts/full-image-hero/hero-sizing.png
[flexbox-centered]: /assets/img/posts/full-image-hero/flexbox-centered.png
[properly-centered]: /assets/img/posts/full-image-hero/properly-centered.png
[large-title]: /assets/img/posts/full-image-hero/large-title.png
[fixed-title-margins]: /assets/img/posts/full-image-hero/fixed-title-margins.png
[btn-initial-styling]: /assets/img/posts/full-image-hero/btn-initial-styling.png
[btn-margin-padding]: /assets/img/posts/full-image-hero/btn-margin-padding.png
[btn-centered]: /assets/img/posts/full-image-hero/btn-centered.png
[btn-text-styles]: /assets/img/posts/full-image-hero/btn-text-styles.png
[btn-border-radius]: /assets/img/posts/full-image-hero/btn-border-radius.png
[bg-img-gif]: /assets/img/posts/full-image-hero/bg-img.gif
[white-over-bg]: /assets/img/posts/full-image-hero/white-over-bg.png
[darkened-background]: /assets/img/posts/full-image-hero/darkened-background.png

[html]: /learn/html
[css]: /learn/css`
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}