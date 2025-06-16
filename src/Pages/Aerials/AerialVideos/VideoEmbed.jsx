import { useRef } from 'react';
import YouTube from 'react-youtube';
import './VideoEmbed.css';

function VideoEmbed({ videoId, title, description, date, tags, apparatus }) {
  const playerRef = useRef(null);

  const options = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      fs: 1,
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  const onPlay = () => {
    if (playerRef.current) {
      const allIframes = document.querySelectorAll('iframe');
      allIframes.forEach((iframe) => {
        const thisIframe = playerRef.current.getIframe();
        if (iframe !== thisIframe) {
          try {
            iframe.contentWindow.postMessage(
              JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
              'https://www.youtube.com' // ✅ specific origin instead of '*'
            );
          } catch (err) {
            console.warn('Could not postMessage to iframe:', err);
          }
        }
      });
    }
  };

  return (
    <div className="video-container">
      <div className="video-column">
        <div className="video-wrapper">
          <YouTube
            videoId={videoId}
            opts={options}
            onReady={onReady}
            onPlay={onPlay}
          />
      </div>
    </div>
    <div className="info-column">
      <div className="video-title">{title}</div>
      <div className="video-date">Date: {date}</div>
      <div className="video-description">{description}</div>
      <div className="video-tags">Tags: {tags.join(', ')}</div>
      <div className="video-apparatus">Apparatus: {apparatus}</div>
    </div>
  </div>
  );
}

export default VideoEmbed;