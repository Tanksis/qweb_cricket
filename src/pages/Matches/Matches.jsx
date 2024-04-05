import React from "react";
import "./Matches.css"; // Assuming you have a Matches.css file for styling

const teams = [
  {
    id: 1,
    name: "Team A",
    photo: "https://via.placeholder.com/50",
    seasonProgress: "50%",
    opponent: "Team B",
    date: "April 10, 2024",
  },
  {
    id: 2,
    name: "Team C",
    photo: "https://via.placeholder.com/50",
    seasonProgress: "60%",
    opponent: "Team D",
    date: "April 15, 2024",
  },
  // Add more teams as needed
];

const MatchBox = ({ team }) => {
  return (
    <div className="match-box" key={team.id}>
      <p>Date: {team.date}</p>
      <div className="team">
        <img src={team.photo} alt={team.name} />
        <p>{team.name}</p>
        <p>Season Progress: {team.seasonProgress}</p>
      </div>
      <div className="versus">vs</div>
      <div className="team">
        <img src={team.photo} alt={team.name} />
        <p>{team.opponent}</p>
        {/* Add opponent details if needed */}
      </div>
    </div>
  );
};

const MatchesPage = () => {
  return (
    <div className="matches-page">
      <h1>Upcoming Matches</h1>
      <div className="matches">
        {teams.map((team) => (
          <div className="match-container">
            <MatchBox team={team} />
          </div>
        ))}
      </div>
      <div className="match-details-box">
        <table className="match-details">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Series:</td>
              <td>2022 OPL</td>
            </tr>
            <tr>
              <td>Match Date:</td>
              <td>05/09/2022</td>
            </tr>
            <tr>
              <td>Toss:</td>
              <td>Ridai Rockets won the toss and elected to bat</td>
            </tr>
            <tr>
              <td>Player of the Match:</td>
              <td>Krishna Chauhan</td>
            </tr>
            <tr>
              <td>Umpires:</td>
              <td>
                <ul>
                  <li>Cornelius Henry</li>
                  <li>Kallyan Kanti Das</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>Rideau Hall #1</td>
            </tr>
            <tr>
              <td>1st Innings:</td>
              <td>93 min - 3:30 PM to 5:04 PM</td>
            </tr>
            <tr>
              <td>Innings break:</td>
              <td>11 min - 5:04 PM to 5:16 PM</td>
            </tr>
            <tr>
              <td>2nd Innings:</td>
              <td>90 min - 5:16 PM to 6:46 PM</td>
            </tr>
            <tr>
              <td>Last Updated:</td>
              <td>TAS Tuskers Scorer (05/09/2022 18:46:00)</td>
            </tr>
            <tr>
              <td>Match Documents:</td>
              <td>
                <a href="#">View Documents</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchesPage;
