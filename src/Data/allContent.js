// src/data/allContent.js
import blogPosts from "../Pages/Blog/BlogData";
import events from "../Pages/PastEvents/Data/Events";
import arts from "../Pages/VisualArts/Data/Arts/Art";
import costumes from "../Pages/Costumes/Data/Costume";
import aerialPosts from "../Pages/Aerials/Data/loadAerialPosts";

const allContent = [
  ...blogPosts.map(post => ({
    title: post.title,
    content: post.content, //Adding content for searching
    tags: post.tags || [], //Adding tags array
    url: `/blog/${post.slug}`, 
    type: "Blog",
  })),
  
  ...events.map(event => ({
    title: event.title,
    content: event.description,
    tags: event.tags,
    url: `/events/${event.slug}`,
    type: "Event",
  })),
  
...arts.map(art => ({
    title: art.title,
    content: art.content || art.description || "",
    tags: art.tags || [],
    url: `/arts/${art.slug}`,
    type: "Art",
  })),

  ...costumes.map(costume => ({
    title: costume.title,
    content: costume.content || "",
    tags: costume.tags || [],
    url: `/costumes/${costume.slug}`,
    type: "Costume",
  })),

   ...aerialPosts.map(aerial => ({
    title: aerial.title,
    content: aerial.description || aerial.description || "",
    tags: aerial.tags || [],
    url: `/aerials/${aerial.slug}`,
    type: "Aerial",
    date: aerial.date || null,
  })),
];

export default allContent;