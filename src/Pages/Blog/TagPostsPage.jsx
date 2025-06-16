import { useParams, Link } from "react-router-dom";
import posts from "./BlogData";

export default function TagPostsPage() {
  const { tag } = useParams();
  const lowerTag = tag.toLowerCase();

  // Filter posts containing the tag (case-insensitive)
  const filteredPosts = posts.filter(post =>
    post.tags && post.tags.some(t => t.toLowerCase() === lowerTag)
  );

  if (filteredPosts.length === 0) {
    return (
      <div className="tag-posts-page">
        <h2>No posts found with tag: {tag}</h2>
        <Link to="/blog">Back to Blog</Link>
        <br />
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="tag-posts-page">
      <h1>Posts tagged with: #{tag}</h1>
      <ul>
        {filteredPosts.map(post => (
          <li key={post.slug}>
            <Link to={post.url}>{post.title}</Link> — <small>{post.date}</small>
          </li>
        ))}
      </ul>
      <Link to="/blog">Back to Blog</Link>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}