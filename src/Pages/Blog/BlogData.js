// src/blog/blogData.js

import post1 from './Posts/post1';
import post2 from './Posts/post2';
// Add more posts here

const posts = [post1, post2];

export default posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first