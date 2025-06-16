---
title: 'Building my Website : The Challenges I Faced'
date: '2025-06-16'
excerpt: "Creating this website to showcase my work was a rewarding process, but it definitely..."
thumbnail: "/Lyssis-Designs/Images/Other/LyssisDesignsArtPortfolioPage.jpg"
thumbnailPosition: "top"
zoom: 2
category: "Other"
subcategory: "Other" 
tags: ["webite", "websitebuilding", "websitecoding", "coding"]
---

Creating this website to showcase my work was a rewarding process, but it definitely came with its fair share of issues and frustrations. I decided to code it myself because I wanted full control over how everything looked and felt. I didn’t want to use just a generic template; I wanted something that expressed who I am.

This became a very involved and time-consuming process, but in turn, I learnt a lot about computers and web development. In this post, I’ll talk about some of the technical challenges I ran into, how I worked around them, and what I learnt. (Note: If you don’t have much coding knowledge, some of this might be a bit confusing. If you are interested in learning, I highly recommend [The Odin Project](https://www.theodinproject.com/).)

## Tools & Materials :
Here’s what I used to build my site, in roughly the order you’d encounter them:
-	<b>Computer running Xubuntu (a Linux-based operating system)</b> – I used Windows as my main OS, but this setup can work on other systems too.
-	<b>Alternatively: A Windows computer with Oracle VirtualBox</b> – If you’re not on Linux, you can install Xubuntu inside VirtualBox. This lets you simulate a Linux environment without wiping your computer.
-	<b>Google Chrome</b> – For testing and using browser DevTools
-	<b>Browser Developer Tools</b> – Built into Chrome, these help with inspecting code, debugging, and testing responsive designs.
-	<b>Visual Studio Code (VS Code)</b> – The code editor I used to write all my files.
-	<b>Git + GitHub account</b> – Used for version control and pushing my code online.
-	<b>Node.js and npm</b> – Node lets you run JavaScript outside a browser, and npm (Node Package Manager) comes with it for installing tools and packages.
-	<b>The Odin Project</b> – A free course that taught me everything from basic HTML to deploying a site. You don’t need an account, but it helps to track your progress.
-	<b>The Odin Project Discord</b> – A great community for help and advice.
-	<b>Vite</b> – A fast build tool I used to create my React project (it’s a smarter, faster version of Create React App).
-	<b>React</b> – The JavaScript framework I used to build the interactive parts of my site.
-	<b>react-router-dom</b> – This handles navigation between pages without reloading the whole site.
-	<b>react-markdown</b> – Lets me write blog posts in Markdown format and display them in React.
-	<b>rehype-raw</b> – Allows raw HTML inside Markdown, so I can format posts more flexibly.
-	<b>front-matter</b> – A way to store extra info (like the post title, date, and tags) at the top of each blog file.
-	<b>react-slick + slick-carousel</b> – These work together to create the image slider on my homepage.
-	<b>react-youtube</b> – A React component that lets me embed YouTube videos cleanly into posts.

## Why I Wanted to Code It Myself :
When I began this course, I knew I wanted to build my own website; not just to display my work, but to reflect my personality. I didn’t want something impersonal or generic. I wanted it to feel like me. What I didn't realise was just how much I’d have to learn and how many obstacles I'd face along the way.

## Learning to Code from Scratch :
I had never built a website before. I started learning with The Odin Project, which helped guide me through HTML, CSS and JavaScript. JavaScript, in particular, was confusing at first. It felt like learning a completely different language, but I stuck with it.

From mid-February to June, I spent over 500 hours learning how to code and build the site from scratch. That included learning layout structure, responsive design, deploying to GitHub Pages, using React, and debugging a never-ending list of bugs.

## Why I Gave Up on Website Builders :
Before diving into code, I tried a few popular drag-and-drop website builders. I found them frustrating for several reasons:
-	Their templates didn’t reflect my aesthetic or style; everything felt too commercial or generic.
-	I couldn't customise things properly without hitting paywalls or restrictions.
-	They were often slow.
-	I couldn’t remove ads or branding.
Instead of fighting those limitations, I decided to build my own.

## GitHub Pages & Deployment Troubles :
I used GitHub Pages to host my website, which meant learning how to push code online and make it show up correctly. At first, nothing worked because I didn’t fully understand folder structure or file paths. After some trial and error (and help from others), I learnt that I needed to use relative paths and HashRouter in React to avoid refresh errors. Once I understood that, deployment became a lot easier.

## Image Sizing & Layout Struggles :
I had to experiment a lot with different image sizes so the galleries and blog layouts would look good on mobile, tablet and desktop. Some images kept overlapping or shifting the text until I learnt how to place them in their own div elements with custom CSS rules.
## When One Missing Bracket Broke Everything :
One of the most frustrating bugs was caused by a single missing bracket in my CSS. It broke the entire layout and I had no idea why. I spent hours scanning my code before finally spotting the problem. It was a huge learning moment. After that, I started commenting on my code more carefully and frequently, double-checking syntax, learning how to use my code validator, and uploading commits to GitHub. (I didn’t really understand commits until a friend explained and demonstrated what they were for.)

## Making It Responsive :
One of my biggest technical goals was to make the site accessible on all devices. I spent ages tweaking font sizes, padding, margins and layout settings so everything worked on phones, tablets, and computers. In particular, the dropdown menu needed testing on different devices to make sure that it didn't break. I learnt how to use flexbox, object-fit, and media queries to adjust the layout depending on screen size.
Even now, there are things that still need fixing. I’m ok with that. It’s a living and ever-changing project.

## Dark Mode Toggle :

One small but surprisingly tricky challenge was adding a dark mode toggle. I wanted it to show a little sun or moon icon and sit neatly in the header. To do this, I had to learn how to:
-	Toggle a CSS class in React
-	Store the user’s theme preference
-	Update the icon correctly when the theme changed
It’s still not implemented at this point, but I’m proud of how far I’ve come with it.

## What I Learnt :
The biggest thing I learnt is this: don’t give up when things break. The answers are out there; you just have to ask the right questions and search the right way. Every problem I solved taught me something valuable.

This site doesn’t just show off my work; it is a piece of my work. It’s creative, technical, and completely mine.