export default function TwitterFeed() {
  return (
    <div className="twitter-card">
      <div className="feed-header">
        <h2>LATEST <span>UPDATES</span></h2>
        <p>Stay up to date with match results and team announcements.</p>
      </div>
      <div className="twitter-frame crop-to-latest">
        <iframe
          src="https://syndication.twitter.com/srv/timeline-profile/screen-name/AquanticusUK?dnt=true&theme=dark&chrome=noheader%20nofooter%20noborders%20transparent"
          style={{ width: '100%', height: '450px', border: 'none', overflow: 'hidden' }}
          scrolling="no"
          title="Latest Updates"
        />
      </div>
    </div>
  );
}