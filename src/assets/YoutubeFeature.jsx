import React from 'react';

export default function YouTubeFeature() {
  return (
    <div className="youtube-card">
      <div className="feed-header">
        <h2>FEATURED <span>CONTENT</span></h2>
        <p>Catch up on our latest match highlights and team VODs.</p>
      </div>
      
      <div className="youtube-frame">
        <iframe
          // Replace "dQw4w9WgXcQ" with your exact YouTube Video ID
          src="https://www.youtube.com/embed/y3lL35c5C7E?si=VxwKc3fEcAK9qHQN"
          title="Aquanticus YouTube Feature"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}