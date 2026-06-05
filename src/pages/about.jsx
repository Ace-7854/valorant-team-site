import React from 'react';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Page Title */}
      <header className="about-header">
        <h1>ABOUT <span>AQUANTICUS</span></h1>
        <p>The story, the mission, and the drive behind AQ Esports.</p>
      </header>

      <main className="about-content">
        {/* Section 1: Our Story */}
        <section className="about-card continuous-glow">
          <h2>OUR <span>STORY</span></h2>
          <p>
            Founded with a passion for competitive excellence, Aquanticus emerged 
            as a premier gaming organization dedicated to conquering the EU Valorant scene. 
            What began as a tight-knit squad of dedicated players has evolved into a 
            multi-roster powerhouse featuring both our advanced <strong>AQ Main</strong> lineup and our 
            rising developmental force, <strong> AQ Blue</strong>.
          </p>
        </section>

        {/* Section 2: Mission & Values */}
        <section className="about-grid">
          <div className="about-card">
            <h3>THE MISSION</h3>
            <p>We are a dedicated UK-based project focusing on individual improvement, team chemistry, 
                and climbing the competitive, through premier, ladder together from the ground up.</p>
          </div>
          
          <div className="about-card">
            <h3>THE VISION</h3>
            <p>Building a pathway for aspiring players to jump from tactical matchmaking to structured, 
                championship-caliber tournament play.</p>
          </div>
        </section>

        {/* Section 3: Management/Staff */}
        <section className="about-card">
          <h2>ORGANIZATION <span>LEADERSHIP</span></h2>
          <div className="staff-list">
            <div className="staff-member">
              <span className="staff-name">AQB // Rain</span>
              <span className="staff-role">Founder</span>
            </div>
            <div className="staff-member">
              <span className="staff-name">AQ // Rhetti</span>
              <span className="staff-role">Team Manager / Coach / Lead</span>
            </div>
            <div className="staff-member">
              <span className="staff-name">AQB // Haz</span>
              <span className="staff-role">Assistant Coach / AQB Lead</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}