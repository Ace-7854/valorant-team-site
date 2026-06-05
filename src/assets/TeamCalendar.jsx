import React from 'react';

export default function TeamCalendar() {
  // Directly edit your schedule events right here!
  const events = [
    {
      id: 1,
      team: "AQ Blue",
      type: "Tournament",
      title: "SNS Tourney AQB V TACT1K",
      date: "Friday, June 5",
      time: "18:00 GMT +1",
      status: "Upcoming"
    },
    {
      id: 2,
      team: "AQ Main",
      type: "Tournament",
      title: "SNS Tourney AQ V INVIGR-8 Esports",
      date: "Saturday, June 6",
      time: "18:00 GMT +1",
      status: "Upcoming"
    },
    {
      id: 3,
      team: "AQ Blue",
      type: "Tournament",
      title: "SNS Tourney AQB V PRESA",
      date: "Sunday, June 7",
      time: "18:00 GMT +1",
      status: "Upcoming"
    },
    {
      id: 4,
      team: "AQ Main",
      type: "Tournament",
      title: "SNS Tourney AQ V Cesium Esports",
      date: "Wednesday, June 10",
      time: "18:00 GMT +1",
      status: "Upcoming"
    }
  ];

  return (
    <div className="calendar-card">
      <div className="feed-header">
        <h2>SCHEDULE & <span>EVENTS</span></h2>
        <p>Upcoming scrims, matches, and training sessions.</p>
      </div>

      <div className="calendar-frame">
        <div className="events-stack">
          {events.map((event) => (
            <div key={event.id} className="event-item">
              
              {/* Left Column: Team & Type Badges */}
              <div className="event-meta">
                <span className={`team-tag ${event.team.toLowerCase().replace(' ', '-')}`}>
                  {event.team}
                </span>
                <span className={`type-badge ${event.type.toLowerCase().replace(' ', '-')}`}>
                  {event.type}
                </span>
              </div>

              {/* Center Column: Title & Date */}
              <div className="event-details">
                <h3>{event.title}</h3>
                <div className="time-info">
                  <span className="event-date">{event.date}</span>
                  <span className="time-divider">•</span>
                  <span className="event-time">{event.time}</span>
                </div>
              </div>

              {/* Right Column: Status Light */}
              <div className="event-status">
                <span className={`status-dot ${event.status.toLowerCase()}`}></span>
                <span className="status-text">{event.status}</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}