import React from 'react';
import aqMainLogo from '../assets/images/AQ_MAIN_LOGO.png';
import aqBlueLogo from '../assets/images/AQ_BLUE_LOGO.png';

export default function RosterTable() {
  // Array data for AQ Main
  const mainRoster = [
    { name: "AQ // Haz", role: "IGL/Initiator", status: "Starter" },
    { name: "AQ // Sutads", role: "Duelist", status: "Starter" },
    { name: "AQ // Mik", role: "Controller", status: "Starter" },
    { name: "AQ // Suop", role: "Sentinel", status: "Starter" },
    { name: "AQ // Bostijger", role: "Flex", status: "Starter" },
    { name: "AQ // Nihil", role: "Flex", status: "Substitute" },
    { name: "AQ // rhetti", role: "Flex", status: "Substitute" },
  ];

  // Array data for AQ Blue
  const blueRoster = [
    { name: "AQB // El3ctrify", role: "IGL/Flex", status: "Starter" },
    { name: "AQB // Rain", role: "Duelist", status: "Starter" },
    { name: "AQB // Ace", role: "Initiator", status: "Starter" },
    { name: "AQB // Shxguy", role: "Controller", status: "Starter" },
    { name: "AQB // Evo", role: "Sentinel", status: "Starter" },
    { name: "AQB // ThxQuiet", role: "Initiator Sub", status: "Substitute" },
    { name: "AQB // Ghost", role: "Duelist/ControllerSub", status: "Substitute" },
  ];

  return (
    <div className="roster-page">
      <header className="roster-header">
        <h1>AQUANTICUS <span>ROSTERS</span></h1>
        <p>Meet the competitive lineups representing AQ Esports.</p>
      </header>

      <main className="roster-container">
        {/* ================= AQ MAIN TEAM TABLE ================= */}
        <section className="roster-section">
          <div className="roster-team-heading">
            {/* Replace src with your main team logo path */}
            <img src={aqMainLogo} alt="AQ Main Logo" className="team-table-logo" />
            <h2>AQ <span>Main Team</span></h2>
          </div>

          <div className="table-wrapper">
            <table className="roster-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Roles</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {mainRoster.map((player, index) => (
                  <tr key={index} className={player.status.toLowerCase()}>
                    <td className="player-name">{player.name}</td>
                    <td className="player-role">{player.role}</td>
                    <td>
                      <span className={`status-tag ${player.status.toLowerCase()}`}>
                        {player.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= AQ BLUE TEAM TABLE ================= */}
        <section className="roster-section">
          <div className="roster-team-heading">
            {/* Replace src with your blue team logo path */}
            <img src={aqBlueLogo} alt="AQ Blue Logo" className="team-table-logo" />
            <h2>AQ <span>Blue (AQB)</span></h2>
          </div>
          <div className="table-wrapper">
            <table className="roster-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Roles</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {blueRoster.map((player, index) => (
                  <tr key={index} className={player.status.toLowerCase()}>
                    <td className="player-name">{player.name}</td>
                    <td className="player-role">{player.role}</td>
                    <td>
                      <span className={`status-tag ${player.status.toLowerCase()}`}>
                        {player.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}