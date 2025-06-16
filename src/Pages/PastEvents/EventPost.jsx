// EventPost.jsx
import React from "react";
import { useParams } from "react-router-dom";
import events from "./Data/Events";
import ReactMarkdown from "react-markdown";
import "./EventPost.css";

export default function EventPost() {
  const { slug } = useParams();
  const event = events.find(e => e.slug === slug);

  if (!event) return <p>Event not found.</p>;

  return (
    <article className="event-post">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      {/* Add other event-specific fields like date, location, etc. */}

      {event.images?.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${event.title} image ${i + 1}`}
          className="event-post-image"
        />
      ))}

      {event.content && <ReactMarkdown>{event.content}</ReactMarkdown>}
    </article>
  );
}