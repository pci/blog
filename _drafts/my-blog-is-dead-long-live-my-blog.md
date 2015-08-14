---
layout: post
title: "My Blog is Dead. Long Live My Blog."
excerpt: "A bit about the past few years, and the next few."
categories:
- Meta
tags:
- Meta
type: post
comments: true
image:
  feature: leaders/blog-fridge.jpg
  credit: Christian Schnettelker
  creditlink: http://www.manoftaste.de/
---

So there has been little to no activity on this blog for a couple of years, perhaps unsurprisingly this is very strongly correlated to my eldest son's birthday. However I have finally had some time to give the site some TLC and what you see now is the end result. This aim of this post is to explain the tech behind the new look and the (hopeful) future of this blog.

## Tech stack

With this redesign I had one thing in mind: ease of maintenances:

<figure>
	<img src="{{ site.url }}/images/what-would-scruffy-do.png">
	<figcaption>New Mantra</figcaption>
</figure>

That lead to the following changes:

* Wordpress needs maintenance, so get rid of it
* My current hosting provider is slow and has outages, so get rid of it
* Custom plugins (e.g. comments) also require maintenance, so get rid of them!

I have ended up using [Jekyll](http://jekyllrb.com/) to generate a static site, i.e. all the server has to do is send files on request. No dynamic calculations of any kind. Now the blog is static I can solve problem two: move away from my current hosting provider. Luckily github not only has a method for serving static content, but [natively supports jekyll](https://help.github.com/articles/using-jekyll-with-pages/) so now writing a post is as simple as writing some markdown, committing it to git and pushing to github. Finally the comments are now powered by [Disqus](https://disqus.com/), not only are they a pretty cool company, e.g. this [presentation](https://www.youtube.com/watch?v=5A5Iw9z6z2s), but as their servers handle the dynamic interaction it's one of the only ways to have comments on a static site.

As an added bonus, none of this costs a penny. So if you'd like to create your own blog, register with github, set up jekyll and post away.

## Migration

<figure class="meme">
	<img src="{{ site.url }}/images/301-redirect.jpg">
	<figcaption>New site is this-a-way</figcaption>
</figure>

All old links still work. As and when I have the time I'll be setting permanent redirects to the github versions of the blog posts. Also I'll slowly migrate the demos that aren't already on github.

## Future

Well that's all well and good, but that's just about the old content, what about new content?

To be honest, it's going to be sporadic. I have a few ideas to research and little time to do it. I'm aiming for 1-2 posts per year, that might not seem like much but it's a definite improvement on the last few years' average.