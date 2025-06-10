import frontMatter from 'front-matter';

// Path is relative to this file (Costume.js)
const costumeFiles = import.meta.glob('./Costumes/*.md', { eager: true, as: 'raw' });

const costumes = Object.entries(costumeFiles).map(([path, rawContent]) => {
  // Remove './Costumes/' and '.md' from path to get slug
  const slug = path.replace('./Costumes/', '').replace('.md', '');
  const { attributes, body } = frontMatter(rawContent);

  return {
    ...attributes,
    slug,
    content: body,
  };
});

// Sort by date descending (if date exists)
export default costumes.sort((a, b) => new Date(b.date) - new Date(a.date));