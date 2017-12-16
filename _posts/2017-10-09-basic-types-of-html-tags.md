---
layout: post
title: 'Basic types of HTML tags'
image: '/assets/img/posts/basic-types-of-html-tags/cover.jpg'
tags: HTML
keywords: "learn HTML, how to learn HTML, HTML tags, types of HTML tags"
---
Now we know how HTML tags work, what actually are they? What do they do? Learn about some of the most common HTML tags in this article.

If don't have any knowledge of how HTML tags work yet, I recommed that you look over [this article][syntax].

Today, we are going to be learning about five types of HTML tags:
1. `h1` - `h6`
2. `p`
3. `br`
4. `hr`
5. Comments

Let's get going!

## Headings (h1-h6)
The `<h1>` to `<h6>` tags in HTML specify headings / titles. They are numbered from one to six, in order of level. Take this page for example - there are various levels of headings. The title of this post is the main heading, the `<h1>`, and the heading above would be a secondary heading, an `<h2>`. If I had more levels, I could go all the way up to `<h6>`. Here is an example of what that would look like:
> # Title
> # Subheading
> ### Sub-subheading
> #### Okay, this is getting crazy
> ##### I sure have a lot of headings
> ###### Wow, this one is so small that it barely looks like a heading
> Normal content. Yay!

Open up your HTML document structure from [last post][last-post] (if you have). Let's remove all of the existing content inside the `<body>` tag, so your HTML looks like this:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
    </head>
    <body>
        
    </body>
</html>
```

Now, let's add some headings! It doesn't matter what they say. Try and see if you can work out what the code is based on the [HTML syntax][syntax]:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
    </head>
    <body>
        <h1>Title</h1>
        <h1>Subheading</h1>
        <h3>Sub-subheading</h3>
        <h4>Okay, this is getting crazy</h4>
        <h5>I sure have a lot of headings</h5>
        <h6>Wow, this one is so small that it barely looks like a heading</h6>
    </body>
</html>
```
{:.reveal}

Did you get it right? If so then great job, if not then you may need a [little reminder of the syntax][syntax].

Once thats all done and saved, [preview your page][preview]. Do you see the result? It should look something like this:
![A page similar to the headings demo above][headings]
Cool! You've learned about your first ever actual HTML tag(s)! Let's continue:

# Paragraphs (p)
Paragraphs are the main content of your HTML page. They don't have to be paragraphs as in what you'd do in an essay - it just means chunks of content. When you have a new paragraph, just start a new `<p>`. Here is an example of two `<p>`'s in succession:
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales velit nibh. Fusce tincidunt purus vitae iaculis malesuada. In tellus ipsum, tempor egestas cursus a, tincidunt imperdiet urna. Quisque quis risus ac sem rutrum commodo sit amet sed velit. Maecenas tincidunt fringilla libero nec tincidunt. Aliquam erat volutpat. Cras sit amet mi cursus purus dapibus pharetra. Nunc pulvinar orci est, pellentesque pulvinar libero vehicula nec. Aenean cursus, dolor ac fringilla vehicula, velit neque lobortis eros, nec ornare velit diam eu tellus. Nunc posuere molestie ligula vel egestas. Mauris eget suscipit dolor, ut pellentesque magna. Nulla facilisi.
> 
> Curabitur aliquet varius odio et volutpat. Aenean sagittis quam vitae eros ultrices tempor. Fusce et dolor vel lorem lobortis rhoncus non et ex. Nulla at ex suscipit, mollis neque a, egestas arcu. Praesent porttitor aliquet leo, ac elementum lorem ullamcorper nec. Integer ut sollicitudin est. Ut et erat ornare, ultricies risus ut, iaculis purus. Duis vulputate lorem eu augue ullamcorper porta. Aliquam a placerat nunc, id rutrum orci.

Now try adding three `<p>`'s to your document. Try and work out what the code will be:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
    </head>
    <body>
        <h1>Title</h1>
        <h1>Subheading</h1>
        <h3>Sub-subheading</h3>
        <h4>Okay, this is getting crazy</h4>
        <h5>I sure have a lot of headings</h5>
        <h6>Wow, this one is so small that it barely looks like a heading</h6>
        <p>Content, content content. Yay I like content.</p>
        <p>This is a new paragraph, you will notice the line break above. This second paragraph here even has... Multiple sentences!</p>
        <p>Wow, it's really hard to think of dummy content for three paragraphs. So here's some latin dummy text: Curabitur aliquet varius odio et volutpat. Aenean sagittis quam vitae eros ultrices tempor. Fusce et dolor vel lorem lobortis rhoncus non et ex. Nulla at ex suscipit, mollis neque a, egestas arcu. Praesent porttitor aliquet leo, ac elementum lorem ullamcorper nec. Integer ut sollicitudin est. Ut et erat ornare, ultricies risus ut, iaculis purus. Duis vulputate lorem eu augue ullamcorper porta. Aliquam a placerat nunc, id rutrum orci.</p>
    </body>
</html>
```
{:.reveal}
Remember that the `<p>`'s have stuff inside them, so make sure to add a closing tag to the end of them (`</p>`). Preview your code again... Now it should look like this:
![A page similar to the paragraphs demo above][paragraphs]
Hopefully your page should look similar, but with different content. Next up, we'll take a look at line breaks.

## First,<br>A note about links (a) and images (img)
Links and images are two of the most common HTML elements. I haven't included them in this article, as they require knowledge about file paths. I will be writing about them in my [next article][links-and-images].

## Line breaks (br)
Wait, what? I thought we just learned about line breaks! All you need to do is start a new `<p>`!

This is the case most of the time, but sometimes you will want to add a line break part-way through a heading or paragraph. In fact, that's what I did with the heading about links and images - scroll up and take a look! The code for that heading with a line break looks like this:
```HTML
<h1>First,<br>A note about links (a) and images (img)</h1>
```
You will notice that the `<br>` element doesn't have a closing tag. This is because there is no content inside the `<br>`, so there is nothing to close.

Try and work out why we wouldn't just write this:
```HTML
<h1>First,</h1>
<h1>A note about links (a) and images (img)</h1>
```
The reason is because that would imply that there are two headings, one saying "First," and one saying "A note about links (a) and images (img)". This is not what we want, as they are not two separate headings but one heading broken onto two lines. Also, most browsers would make the line break in between the two lines larger if we went with the second option (normally you don't want two titles to look like they're connected).

Add an `<h1>` with a line break in it to your HTML page. You have the syntax from above, see if you can get it right:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
    </head>
    <body>
        <h1>Title</h1>
        <h1>Subheading</h1>
        <h3>Sub-subheading</h3>
        <h4>Okay, this is getting crazy</h4>
        <h5>I sure have a lot of headings</h5>
        <h6>Wow, this one is so small that it barely looks like a heading</h6>
        <p>Content, content content. Yay I like content.</p>
        <p>This is a new paragraph, you will notice the line break above. This second paragraph here even has... Multiple sentences!</p>
        <p>Wow, it's really hard to think of dummy content for three paragraphs. So here's some latin dummy text: Curabitur aliquet varius odio et volutpat. Aenean sagittis quam vitae eros ultrices tempor. Fusce et dolor vel lorem lobortis rhoncus non et ex. Nulla at ex suscipit, mollis neque a, egestas arcu. Praesent porttitor aliquet leo, ac elementum lorem ullamcorper nec. Integer ut sollicitudin est. Ut et erat ornare, ultricies risus ut, iaculis purus. Duis vulputate lorem eu augue ullamcorper porta. Aliquam a placerat nunc, id rutrum orci.</p>
        <h1>I am a heading that is bro<br>ken.</h1>
    </body>
</html>
```
{:.reveal}

When you preview your page, it should look something like this:
![A page with a heading broken up onto two lines][br]
Let's look at our final element for today - horizontal rules.

## Horizontal rules (hr)
Hori-what-what-what? What on earth is that? It had better not be some weird coding rule magic or something.

Don't worry, horizontal rules are just lines that separate the content. See this example below:
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales velit nibh. Fusce tincidunt purus vitae iaculis malesuada. In tellus ipsum, tempor egestas cursus a, tincidunt imperdiet urna. Quisque quis risus ac sem rutrum commodo sit amet sed velit. Maecenas tincidunt fringilla libero nec tincidunt. Aliquam erat volutpat. Cras sit amet mi cursus purus dapibus pharetra. Nunc pulvinar orci est, pellentesque pulvinar libero vehicula nec. <hr>Aenean cursus, dolor ac fringilla vehicula, velit neque lobortis eros, nec ornare velit diam eu tellus. Nunc posuere molestie ligula vel egestas. Mauris eget suscipit dolor, ut pellentesque magna. Nulla facilisi.
> <hr>
> Curabitur aliquet varius odio et volutpat. Aenean sagittis quam vitae eros ultrices tempor. Fusce et dolor vel lorem lobortis rhoncus non et ex. Nulla at ex suscipit, mollis neque a, egestas arcu. Praesent porttitor aliquet leo, ac elementum lorem ullamcorper nec. Integer ut sollicitudin est. Ut et erat ornare, ultricies risus ut, iaculis purus. Duis vulputate lorem eu augue ullamcorper porta. Aliquam a placerat nunc, id rutrum orci.

The `<hr>` tag is very similar to the `<br>` tag in that it doesn't require a closing tag (and there's only one letter difference). `<hr>` tags can be placed *inside* an element (like the `<br>` inside an `<h1>`) or it can be placed *between* elements. Generally if we are separating the elements instead of their content, we would put the `<hr>` between them.

Try separating our three `<p>`'s from before with horizontal rules. See if you can work out the code:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
    </head>
    <body>
        <h1>Title</h1>
        <h1>Subheading</h1>
        <h3>Sub-subheading</h3>
        <h4>Okay, this is getting crazy</h4>
        <h5>I sure have a lot of headings</h5>
        <h6>Wow, this one is so small that it barely looks like a heading</h6>
        <p>Content, content content. Yay I like content.</p>
        <hr>
        <p>This is a new paragraph, you will notice the line break above. This second paragraph here even has... Multiple sentences!</p>
        <hr>
        <p>Wow, it's really hard to think of dummy content for three paragraphs. So here's some latin dummy text: Curabitur aliquet varius odio et volutpat. Aenean sagittis quam vitae eros ultrices tempor. Fusce et dolor vel lorem lobortis rhoncus non et ex. Nulla at ex suscipit, mollis neque a, egestas arcu. Praesent porttitor aliquet leo, ac elementum lorem ullamcorper nec. Integer ut sollicitudin est. Ut et erat ornare, ultricies risus ut, iaculis purus. Duis vulputate lorem eu augue ullamcorper porta. Aliquam a placerat nunc, id rutrum orci.</p>
        <hr>
        <h1>I am a heading that is bro<br>ken.</h1>
    </body>
</html>
```
{:.reveal}

Did you get it right? Let's see what it looks like when we preview it:
![A page with horizontal lines between paragraphs][hr]

## Comments
Comments in programming are very important. They are not seen by the user of the website, but they can be seen by people editing the code, such as you or other people you are collaborating with. Even if what you are doing at the time seems obvious, it might not be in a few months' time. This is where comments come in. They let you document your code and write what you did, meaning that if you or someone else comes back to the code later, they will know what's going on.

Comments are not normal HTML tags. They have an opening and closing part, but it's very different to the syntax of normal HTML tags. A comment is started with `<!--`. Then, after that comes whatever you have to say. You end the comment with `-->`. Here's an example:
```HTML
<!-- I am a comment, you will not see me on the actual page. -->
```
Comments can also span multiple lines:
```HTML
<!-- I am a comment
That goes over multiple lines. -->
```
I find it easier to write multi-line like this, but you don't have to do it this way:
```HTML
<!--
I am a comment
That goes over multiple lines.
-->
```

All of these methods are valid, choose the one that you like best and fits the situation best.

Now, let's try comments out! You've (hopefully) learn a lot in this lesson - why don't you comment it all so you remember? See my example below:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>My awesome website</title>
    </head>
    <body>
        <!-- All the types of headings from <h1> - <h6>. <h1> is biggest, <h6> is smallest. -->
        <h1>Title</h1>
        <h1>Subheading</h1>
        <h3>Sub-subheading</h3>
        <h4>Okay, this is getting crazy</h4>
        <h5>I sure have a lot of headings</h5>
        <h6>Wow, this one is so small that it barely looks like a heading</h6>
        <!-- Three paragraphs (<p>'s) separated by horizontal rules (<hr>'s) -->
        <p>Content, content content. Yay I like content.</p>
        <hr>
        <p>This is a new paragraph, you will notice the line break above. This second paragraph here even has... Multiple sentences!</p>
        <hr>
        <p>Wow, it's really hard to think of dummy content for three paragraphs. So here's some latin dummy text: Curabitur aliquet varius odio et volutpat. Aenean sagittis quam vitae eros ultrices tempor. Fusce et dolor vel lorem lobortis rhoncus non et ex. Nulla at ex suscipit, mollis neque a, egestas arcu. Praesent porttitor aliquet leo, ac elementum lorem ullamcorper nec. Integer ut sollicitudin est. Ut et erat ornare, ultricies risus ut, iaculis purus. Duis vulputate lorem eu augue ullamcorper porta. Aliquam a placerat nunc, id rutrum orci.</p>
        <hr>
        <!-- A heading that is broken onto two lines using the <br> tag -->
        <h1>I am a heading that is bro<br>ken.</h1>
        <!-- That was fun! -->
    </body>
</html>
```
This is my interpretation, but comment it in a way that makes sense to you. Preview your code - you will see that nothing has changed. This is because the comments are meant to be for people reading the code, as the end user doesn't want to see all your comments about confusing code stuff!

## Conclusion
Well done! You made it, and you learned about your first four/five HTML tags. As I said earlier, in the [next article][links-and-images] I will be talking about images and links, which are possibly the two most common elements after headings and paragraphs.

If you liked this article then don't forget to [share][share] and [subscribe][newsletter].

If there's anything you want to ask / tell me, do so in the [comments below][comments]. Have fun, and I'll see you next time!



[syntax]: /2017/10/06/html-syntax/
[last-post]: /2017/10/07/structure-of-an-html-document/
[preview]: /2017/10/06/web-development-on-your-computer/#running-your-code
[headings]: /assets/img/posts/basic-types-of-html-tags/headings.png
[paragraphs]: /assets/img/posts/basic-types-of-html-tags/paragraphs.png
[br]: /assets/img/posts/basic-types-of-html-tags/br.png
[hr]: /assets/img/posts/basic-types-of-html-tags/hr.png
[links-and-images]: /2017/10/14/links-images-about-file-paths/
[share]: {{site.share}}
[comments]: {{site.comments}}
[newsletter]: {{site.newsletter}}