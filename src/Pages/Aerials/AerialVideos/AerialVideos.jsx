import React from 'react';
import AerialCard from './AerialCard';

export default function AerialVideos({ aerials }) {
  if (!aerials.length) return <p>No posts found.</p>;

  return (
    <div className="aerials-grid">
      {aerials.map((post) => (
        <AerialCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
