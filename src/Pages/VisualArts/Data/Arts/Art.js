import frontMatter from 'front-matter';

const artFiles = import.meta.glob('./**/**/*.md', { eager: true, query: '?raw', import: 'default' });
console.log("Globbed files:", Object.keys(artFiles));

const arts = Object.entries(artFiles).map(([path, rawContent]) => {
  const slug = path.replace('./Arts/', '').replace('.md', '');
  const { attributes, body } = frontMatter(rawContent);

  // Extract first paragraph as description
  const matchDescription = body.trim().match(/^(.*?)(\n|$)/);
  const description = matchDescription ? matchDescription[1].trim() : '';

  // Extract the first markdown link as blogLink
  const matchLink = body.match(/\[.*?\]\((.*?)\)/);
  const blogLink = matchLink ? matchLink[1] : '';

  return {
    ...attributes,
    slug,
    content: body,
    description,
    blogLink,
  };
});

export default arts.sort((a, b) => new Date(b.date) - new Date(a.date));