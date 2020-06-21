---
layout: post
title: "How to create a website using HTML and CSS"
image: '/assets/img/posts/steps-to-creating-a-website/cover.png'
tags: Other HTML CSS
keywords: "how to create a webpage using html and css, how to create a website using html and css, steps to creating a website, how to create a website using html css and javascript step by step, how to create a website using html"
checked: [grammarly]
---
Often when making a website, it can be overwhelming. I'll show you how to approach creating a website from scratch in this article...

## Just a note...
This article is more about guiding you through the though-process of creating a website, rather than the techncical side of things. If you're coming here because you want to learn how to code websites, check out [How to learn web development][how-to-learn-web-development], or my series on [learning HTML][html].

## The final product
[Here's the final product of the site I'll be building today.][demo]{:target='_blank'} Take a look at it, and keep it in mind as we go through the tutorial.

<!-- ![The final product!][final-product] -->
{% gifvid /assets/img/posts/steps-to-creating-a-website/final-product %}

It's going to be a fictional site about Boberick the llama (I get the strangest ideas sometimes...)

## 1. Plan your layout
The first step of any website is always to know what you want on it and (vaguely) how you want it to look. So, the first step is to do a rough sketch - either on paper or on the computer, depending on which you find easier.

Remember, _**it doesn't have to look good.**_ Here's mine:
![A sketch of what the website will look like][sketch]

As you can see, it's *very* rough. The lines aren't straight and nothing is even but I can still see how the site is going to look and what sections I need to have.

In this layout, I have a header (navigation bar), three sections and a footer.

## 2. Get the 'boilerplate code' set up
Now, it's time to get the basic code that you have at the start of any website (this is commonly called the *boilerplate*).

Do this by:
1. Creating a new folder on your computer for the website
2. Create new empty `index.html` and `style.css` files inside
3. Add [the basic 'boilerplate code'][html-doc-structure] to your `index.html` file:

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Boberick the llama</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Just testing this works!</h1>
    </body>
</html>
```
Finally, open up your `index.html` in a web browser to check everything's working:
![The boilerplate code][base-code]{:.screenshot-white}


> This article will be more about explaining the process of creating a website, so I won't be explaining the actual code in detail - but you can still follow along if you want.
> 
> If so, follow the steps above to get started!

## 3. Create the elements in your layout
Now it's time to create the layout/section elements that you planned in step 1!

The best way to do this is by using [semantic elements][semantic]: `<header>`,`<main>`,`<section>`, and `<footer>`.

Here is the HTML:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Boberick the llama</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            
        </header>
        <main>
            <section id="hero">
                
            </section>
            <section id="about">
                
            </section>
            <section id="contact">
                
            </section>
        </main>
        <footer>
            
        </footer>
    </body>
</html>
```
Note that we are giving the `<section>`s `id`s, so we can refer to them later.

If you reload the page, you will see there is nothing there - this is because we are just creating the sections of the page, not the actual stuff in them.

## 4. Fill in the HTML content
Once you have the sections of the page, it's time to fill them up! If you know what content you are going to be using, put that in. If not, put in some [dummy text][dummy-text] and replace it with the actual content later.

Here is the HTML after filling in some content:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Boberick the llama</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <img src="https://codetheweb.blog/assets/img/posts/steps-to-creating-a-website/llama.jpg" class="profile-img">
            <nav>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section id="hero">
                <div class="section-inner">
                    <img src="https://codetheweb.blog/assets/img/posts/steps-to-creating-a-website/llama.jpg" class="profile-img">
                    <h1>Hi, I'm Boberick the llama.</h1>
                </div>
            </section>
            <section id="about">
                <div class="section-inner">
                    <h2>About me</h2>
                    <p>I'm a really awesome llama. Every day I wake up, munch on some grass, do some coding and then go back to sleep.</p>
                    <h3>Achievements</h3>
                    <ul>
                        <li>Bachelor of photogenic posing, 2010</li>
                        <li>Llamaness certification from the Llama Institute, 2014</li>
                        <li>I coded a website, 2017</li>
                    </ul>
                </div>
            </section>
            <section id="contact">
                <div class="section-inner">
                    <h2>Contact me</h2>
                    <p>You can find me on:</p>
                    <ul>
                        <li><a href="https://twitter.com/llama">Twitter</a></li>
                        <li><a href="https://www.reddit.com/user/llama">Reddit</a></li>
                        <li><a href="https://www.instagram.com/llamasporfavor/">Instagram</a></li>
                    </ul>
                    <p>Or, you can <a href="mailto:llama@codetheweb.blog">send me an email</a>.</p>
                </div>
            </section>
        </main>
        <footer>
            © Copyright Boberick The Llama, 2017
        </footer>
    </body>
</html>
```
If you reload the page, you will see that we now have some content!
![The HTML content of our site (without CSS)][html-content]{:.screenshot-white}

## 5. Add some basic layout CSS
Once we're done with our HTML, it's time to move on to CSS! The first and most important part to focus on first is to get it looking like our layout - then we can focus on the details.

This means that we need to focus on properties like `width`, `height`, `margin`, `padding`, `position`, and `display`. Also, we need to make sure the images are the right size so that they don't obliterate the page.

Here is the CSS that we will add to our `style.css`:
```CSS
body {
    margin: 0;
    margin-top: 50px;
}

header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    background-color: #eee;
}

header * {
    display: inline;
    height: 50px;
}

header ul {
    padding: 0;
}

header li {
    margin-left: 20px;
}

section {
    height: 100vh;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#hero .profile-img {
    width: 300px;
}

footer {
    text-align: center;
    padding: 50px;
}
```
Here, we are only adding styles to make our overall layout look similar - not the individual content. We make sure that the sections are set to [100% viewport height][vh], make the header have a [fixed position][position-fixed], position the items [in the header][style-header], and more. We also use [flexboxes][flexboxes] to center the content in our sections.

This is the result:
<!-- ![Now our page looks similar to the sketch!][layout-css]{:.screenshot-white} -->
{% gifvid /assets/img/posts/steps-to-creating-a-website/layout-css %}

## 6. Add more specific styles
Once the basic framework of the site is done, we can add more specific styles.

Now we can make our website look good!

Here's our CSS:
```CSS
body {
    margin: 0;
    margin-top: 50px;
    font-family: sans-serif; /* Add this line */
}

header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    background-color: #eee;
}

header * {
    display: inline;
    height: 50px;
}

header ul {
    padding: 0;
}

header li {
    margin-left: 20px;
}

section {
    height: 100vh;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#hero .profile-img {
    width: 300px;
    border-radius: 50%; /* Add this line */
}

footer {
    text-align: center;
    padding: 50px;
}

/* Add everything below here */

#hero h1 {
    font-size: 3em;
}

section h2 {
    font-size: 2.5em;
}

section h3 {
    font-size: 1.5em;
}

header a {
    text-decoration: none;
    color: black;
}
```
As you can see, we've made the title bigger, rounded our image (using `border-radius`), and changed the font. We've also removed some default styling from the header links.

Here's the result:
<!-- ![Our website after adding more specific styles][specific-styles]{:.screenshot-white} -->
{% gifvid /assets/img/posts/steps-to-creating-a-website/specific-styles %}

## 7. Add colors and backgrounds
Yay, we're on the home stretch now! It's time to add the finishing touches to our website - colors and backgrounds!

This is what will make our site look really awesome.

Here is the CSS:
```CSS
body {
    margin: 0;
    margin-top: 50px;
    font-family: sans-serif;
}

header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    background-color: #eee;
}

header * {
    display: inline;
    height: 50px;
}

header ul {
    padding: 0;
}

header li {
    margin-left: 20px;
}

section {
    height: 100vh;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    background-size: cover; /* Add this line */
    background-position: center center; /* Add this line */
    background-repeat: no-repeat; /* Add this line */
    background-attachment: fixed; /* Add this line */
}

#hero .profile-img {
    width: 300px;
    border-radius: 50%;
}

footer {
    text-align: center;
    padding: 50px;
}

#hero h1 {
    font-size: 3em;
}

section h2 {
    font-size: 2.5em;
}

section h3 {
    font-size: 1.5em;
}

header a {
    text-decoration: none;
    color: black;
}

/* Add everything below here */

#hero {
    background-image: linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), url('https://codetheweb.blog/assets/img/posts/steps-to-creating-a-website/field.jpg');
}

#about {
    background-image: linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), url('https://codetheweb.blog/assets/img/posts/steps-to-creating-a-website/beach.jpg');
}

#contact {
    background-image: linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), url('https://codetheweb.blog/assets/img/posts/steps-to-creating-a-website/canyon.jpg');
}
```
As you can see, we've added some general [background styles][advanced-bg-imgs] to the `section` elements, as well as adding a `background-image` to each section individually.

The reason for the `linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), ` before the `url('image.jpg')` is because otherwise the text is hard to read - so we add a semi-transparent white overlay ontop. I wrote a bit more about that in my article on [how to create a full-page hero image][bg-gradient-overlay].

![Yay! We're done!][final-product]

## 8. Celebrate! &#127881;
Woo! You're finally done your website! Now, go show it off to your friends, family and the entire internet &#128521;

## Further reading
If you want to know more about a specific section of what I was showing today, check out:
1. [How to create a full-page hero image][fullscreen-hero-image]
2. [How to style a navigation bar using CSS][style-header]

## Conclusion
So, I hope you enjoyed this article and hopefully you learned something along the way!

I did something a little different from usual today, so [tell me your thoughts][comments]. Remember, this article is less about me showing you the actual technical parts of creating a website, but more about guiding you through the thought-process of creating a website.

If you liked this article, please be an awesome human and [share][share] or [sign up to the newsletter][newsletter], I'll give you a free taco &#127790;  (not really &#128540; )

Have fun, keep coding, and I'll see you next time, where' I'll be talking about [how to style a navigation bar (header) using CSS][style-header] - walking you through the nav bar that we created today, but in more detail. See you then!

> This article was suggested by [Alisa Dubik-Wilson][alisa-dubik-wilson] - thanks! If you also want to suggest an article, you can [contact me][contact] or tell me in the [comments][comments].

[how-to-learn-web-development]: /how-to-learn-web-development/
[alisa-dubik-wilson]: https://adubik.github.io/
[demo]: /demo/steps-to-creating-a-website/
[html-doc-structure]: /structure-of-an-html-document/
[semantic]: {{site.newsletter}}
[dummy-text]: https://lipsum.com/feed/html
[vh]: /css-units/#vw--vh
[position-fixed]: /css-position-property/#position-fixed
[style-header]: /style-a-navigation-bar-css/
[flexboxes]: /css-flexboxes/
[advanced-bg-imgs]: /advanced-background-images/
[bg-gradient-overlay]: /fullscreen-image-hero/#bg-gradient-overlay
[fullscreen-hero-image]: /fullscreen-image-hero/

[sketch]: /assets/img/posts/steps-to-creating-a-website/sketch.png
[base-code]: /assets/img/posts/steps-to-creating-a-website/base-code.png
[html-content]: /assets/img/posts/steps-to-creating-a-website/html-content.png
[layout-css]: /assets/img/posts/steps-to-creating-a-website/layout-css.gif
[specific-styles]: /assets/img/posts/steps-to-creating-a-website/specific-styles.gif
[final-product]: /assets/img/posts/steps-to-creating-a-website/final-product.gif

[contact]: {{site.contact}}
[html]: /learn/html
[css]: /learn/css`
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}
