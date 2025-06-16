import frontMatter from 'front-matter';

const artFiles = import.meta.glob('./**/**/*.md', { eager: true, query: '?raw', import: 'default' });

const arts = Object.entries(artFiles).map(([path, rawContent]) => {
  const { attributes, body } = frontMatter(rawContent);

  // Extract first paragraph as description
  const matchDescription = body.trim().match(/^(.*?)(\n|$)/);
  const description = matchDescription ? matchDescription[1].trim() : '';

  // Extract the first markdown link as blogLink
  const matchLink = body.match(/\[.*?\]\((.*?)\)/);
  const blogLink = matchLink ? matchLink[1] : '';

  const slug = path
  .split('/')
  .pop()             // get last part like "ButterflyEarrings.md"
  .replace('.md', ''); // remove extension

  return {
    ...attributes,
    slug,
    content: body,
    description,
    blogLink,
    type: Array.isArray(attributes.type)
    ? attributes.type.map(t => t.trim())
    : (typeof attributes.type === "string" ? attributes.type.split(',').map(t => t.trim()) : []),
  };
});

export default arts.sort((a, b) => new Date(b.date) - new Date(a.date));