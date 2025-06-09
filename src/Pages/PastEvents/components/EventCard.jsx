import React, { useState } from "react";
import ModalGallery from "./ModalGallery";
import "./EventCard.css";

const typeColors = {
  charity: "#ffefef",
  volunteer: "#e8fff1",
  comiccon: "#e8f0ff",
  default: "#f4f4f4"
};

function EventCard({ event }) {
  const [showGallery, setShowGallery] = useState(false);
  const bgColor = typeColors[event.type] || typeColors.default;

  return (
    <div className="event-card"
      style={{ backgroundColor: bgColor }}>
      <h3>{event.title}</h3>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.description}</p>
      {event.blogLink && (
        <a
          href={event.blogLink}
          className="read-more-link"
        >
          Read more →
        </a>
      )}

      {event.images?.length > 0 && (
        <img
          src={event.images[0]}
          alt={event.title}
          className="event-thumbnail"
          onClick={() => setShowGallery(true)}
        />
      )}

      {event.videos?.map((video, i) => (
        <iframe key={i} src={video} title={`video-${i}`} frameBorder="0" allowFullScreen />
      ))}

      {showGallery && (
        <ModalGallery images={event.images} onClose={() => setShowGallery(false)} />
      )}
    </div>
  );
}

export default EventCard;