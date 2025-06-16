// CostumePost.jsx
import React from "react";
import { useParams } from "react-router-dom";
import costumes from "./Data/Costume"; // your costumes data
import ReactMarkdown from "react-markdown";
import "./CostumePost.css";

export default function CostumePost() {
  const { slug } = useParams();
  const costume = costumes.find(c => c.slug === slug);

  if (!costume) return <p>Costume not found.</p>;

  return (
    <article className="costume-post">
      <h1>{costume.title}</h1>
      <p>{costume.description}</p>
      {/* Add any other fields you want, like materials, date, etc. */}
      
      {costume.images?.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${costume.title} image ${i + 1}`}
          className="costume-post-image"
        />
      ))}

      {costume.content && <ReactMarkdown>{costume.content}</ReactMarkdown>}
    </article>
  );
}