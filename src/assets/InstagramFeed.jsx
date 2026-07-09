import React from 'react';

export default function InstagramFeature() {
  return (
    <div className="instagram-card">
      <div className="feed-header">
        <h2>FEATURED <span>MEDIA</span></h2>
        <p>Follow @aquanticus_esports on Instagram for updates.</p>
      </div>
      
      <div className="instagram-frame">
        <iframe
          // Paste your specific post URL here, ensuring it ends with /embed/captioned/
          src="https://www.instagram.com/p/Daf7X8QqNgD/embed/captioned/" 
          width="100%"
          height="540"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          style={{ borderRadius: '8px' }}
        ></iframe>
      </div>
    </div>
  );
}