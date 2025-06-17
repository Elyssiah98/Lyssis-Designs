import React from "react";
import { useParams } from "react-router-dom";
import arts from "./Data/Arts/Art";
import ReactMarkdown from "react-markdown";
import "./ArtPost.css";
import remarkEmoji from "remark-emoji";
import emoji from "emoji-dictionary";

function convertEmoji(text) {
  return text.replace(/:([a-zA-Z0-9_+-]+):/g, (_, name) =>
    emoji.getUnicode(name) || `:${name}:`
  );
}

export default function ArtPost() {
  const { slug } = useParams();
  const art = arts.find(a => a.slug === slug);

  if (!art) return <p>Art not found.</p>;

  return (
    <article className="art-post">
      <h1>{convertEmoji(art.title)}</h1>
      <p>{convertEmoji(art.description)}</p>
      {art.medium && <p><strong>Medium:</strong> {art.medium}</p>}
      {art.dimensions && <p><strong>Dimensions:</strong> {art.dimensions}</p>}

      {art.images?.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${art.title} image ${i + 1}`}
          className="art-post-image"
        />
      ))}

      {art.content && (
        <ReactMarkdown remarkPlugins={[remarkEmoji]}>
          {art.content}
        </ReactMarkdown>
      )}
    </article>
  );
}