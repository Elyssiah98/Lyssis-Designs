import React from 'react';
import './Blog.css';

const posts = [
  {
    id: 1,
    title: 'Title of article',
    date: 'May 12, 2025',
    excerpt: 'Excerpt of article',
  },
  {
    id: 2,
    title: 'Title of article',
    date: 'May 12, 2025',
    excerpt: 'Excerpt of article',
  },
  {
    id: 3,
    title: 'Title of article',
    date: 'May 12, 2025',
    excerpt: 'Excerpt of article',
  },
];

const Blog = () => {
  return (
    <main className="blog-page">
      <h1 className="blog-heading">Lyssi’s Blog</h1>
      <div className="blog-posts">
        {posts.map(post => (
          <article key={post.id} className="blog-card">
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p className="blog-excerpt">{post.excerpt}</p>
            <a href={`/blog/${post.id}`} className="read-more">Read More →</a>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Blog;
