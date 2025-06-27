import React, { useState } from "react";
import ModalGallery from "../../VisualArts/ArtComponents/ModalGallery";
import "./EventCard.css";

const typeColors = {
  charity: "#ffefef",
  volunteer: "#e8fff1",
  comiccon: "#e8f0ff",
  default: "#f4f4f4"
};

function EventCard({ event }) {
  const [showGallery, setShowGallery] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const bgColor = typeColors[event.type] || typeColors.default;

  return (
    <div className={`event-card ${event.type || "default"}`}>
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
          onClick={() => {
            setInitialIndex(0);
            setShowGallery(true);
          }}
        />
      )}

      {event.videos?.map((video, i) => (
        <iframe
          key={i}
          src={video}
          title={`video-${i}`}
          style={{ border: "none" }}
          allowFullScreen
        />
      ))}

      {showGallery && (
        <ModalGallery
          art={event}
          initialIndex={initialIndex}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
}

export default EventCard;