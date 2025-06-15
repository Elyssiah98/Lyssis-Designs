import frontMatter from 'front-matter';

const postFiles = import.meta.glob('./Posts/**/*.md', { eager: true, query: '?raw', import: 'default' });

const posts = Object.entries(postFiles).map(([path, rawContent]) => {
  const slug = path.replace('./Posts/', '').replace('.md', '');
  const { attributes, body } = frontMatter(rawContent);
  return {
    ...attributes,
    slug,
    url: `/blog/${slug}`,
    content: body,
  };
});

export default posts.sort((a, b) => new Date(b.date) - new Date(a.date));