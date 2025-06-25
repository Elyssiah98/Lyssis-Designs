import React from 'react';
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";

function AerialCard({ post }) {
  return (
    <div className="video-container">
      <div className="video-column">
        {post.media?.map((item, index) => {
          switch (item.type) {
            case 'youtube':
              return (
                <div className="video-wrapper" key={index}>
                  <YouTube videoId={item.videoId} opts={{ width: '100%', height: '100%' }} />
                </div>
              );
            case 'photo':
              return (
                <img
                  key={index}
                  className="video-photo"
                  src={item.src}
                  alt={item.alt || ''}
                />
              );
            case 'instagram':
              return (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: `<blockquote class="instagram-media" data-instgrm-permalink="${item.embedUrl}" data-instgrm-version="14"></blockquote>`,
                  }}
                />
              );
            case 'facebook':
              return (
                <div key={index} className="facebook-video">
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item.embedUrl)}`}
                    width="100%" height="300"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    allow="encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            case 'tiktok':
              return (
                <blockquote
                  key={index}
                  className="tiktok-embed"
                  cite={item.embedUrl}
                  data-video-id={item.videoId}
                ></blockquote>
              );
            default:
              return null;
          }
        })}
      </div>
      <div className="info-column">
        <h2 className="video-title">
          <Link to={`/aerials/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        <div className="video-date">Date: {post.date}</div>
        <div className="video-description">{post.description}</div>
        <div className="video-tags">{post.tags?.join(', ')}</div>
        <div className="video-apparatus">Apparatus: {post.apparatus}</div>
        
        <Link to={`/aerials/${post.slug}`} className="see-more">
          See more →
        </Link>
      </div>
    </div>
  );
}

export default AerialCard;