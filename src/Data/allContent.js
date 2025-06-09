// src/data/allContent.js
import blogPosts from "../Pages/Blog/BlogData";
import events from "./Events/index";
//import costumes from "./CostumePortfolio";

const allContent = [
  ...blogPosts.map(post => ({ title: post.title, url: `/blog/${post.slug}`, type: "Blog" })),
  ...events.map(event => ({ title: event.title, url: `/events/${event.slug}`, type: "Event" })),
//  ...costumes.map(item => ({ title: item.title, url: `/costumes/${item.slug}`, type: "Costume" })),
];

export default allContent;