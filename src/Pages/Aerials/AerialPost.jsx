import React from "react";
import { useParams } from "react-router-dom";
import aerialPosts from "./Data/loadAerialPosts"; // wherever your aerial posts data is
import YouTube from "react-youtube";

export default function AerialPost() {
  const { slug } = useParams();
  const post = aerialPosts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found.</p>;

  return (
    <article className="aerial-post-detail">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p><strong>Date:</strong> {post.date}</p>
      <p><strong>Apparatus:</strong> {post.apparatus}</p>

      {post.media?.map((item, i) => {
        switch (item.type) {
          case "youtube":
            return (
              <div key={i} style={{ maxWidth: "800px", margin: "1rem 0" }}>
                <YouTube videoId={item.videoId} opts={{ width: "100%", height: "450" }} />
              </div>
            );
          case "photo":
            return (
              <img
                key={i}
                src={item.src}
                alt={item.alt || ""}
                style={{ width: "100%", maxWidth: "800px", borderRadius: "10px", margin: "1rem 0" }}
              />
            );
          // Add other media types as needed (Instagram, Facebook, TikTok) with embed code or iframe
          default:
            return null;
        }
      })}
    </article>
  );
}