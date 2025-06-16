import frontMatter from 'front-matter';

// import all markdown files as raw text eagerly
const eventFiles = import.meta.glob('./**/*.md', { eager: true, as: 'raw' });
const events = Object.entries(eventFiles).map(([path, rawContent]) => {
  // parse front matter from raw markdown string
  const { attributes, body } = frontMatter(rawContent);

  // Extract first paragraph as description
  const matchDescription = body.trim().match(/^(.*?)(\n|$)/);
  const description = matchDescription ? matchDescription[1].trim() : '';

  // Extract first markdown link as blogLink (optional)
  const blogLink = attributes.blogLink || '';

  const slug = path
    .split('/')
    .pop()                 // filename with extension
    .replace('.md', '');   // remove .md extension

  // normalize type to lowercase or use 'default'
  const normalizedType = (attributes.type || 'default').toLowerCase();

  return {
    ...attributes,
    slug,
    content: body,
    description,
    blogLink: attributes.blogLink || '',
    type: normalizedType,
  };
});

// sort by date descending
events.sort((a, b) => new Date(b.date) - new Date(a.date));

export default events;