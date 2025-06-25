import { Buffer } from 'buffer';
window.Buffer = Buffer;

import matter from 'gray-matter';

const files = import.meta.glob('./AerialPosts/*.md', { as: 'raw', eager: true });

const aerialPosts = Object.entries(files).map(([path, rawContent]) => {
  const { data, content } = matter(rawContent);
  const slug = path.split('/').pop().replace('.md', '');
  return {
    ...data,
    content,
    slug,
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

export default aerialPosts;