import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Matches.css"; // Assuming you have a Matches.css file for styling

const MatchInfo = ({
  dayOfWeek,
  dayOfMonth,
  month,
  year,
  time,
  Team,
  matchData,
}) => {
  const [showScorecard, setShowScorecard] = useState(false);

  const scorecardData = [
    {
      player: "Ayoub Ahmadzai",
      dismissal: "c Fahad S b Raunak P",
      runs: 14,
      balls: 19,
      fours: 1,
      sixes: 0,
      strikeRate: 73.68,
    },
    {
      player: "Debargha Lodh",
      dismissal: "lbw b Vikas V",
      runs: 0,
      balls: 2,
      fours: 0,
      sixes: 0,
      strikeRate: 0.0,
    },
    {
      player: "Thiruvarangan Sivanathan",
      dismissal: "St Jasleen Singh S b Fahad S",
      runs: 14,
      balls: 28,
      fours: 0,
      sixes: 0,
      strikeRate: 50.0,
    },
    {
      player: "Krishna Chauhan",
      dismissal: "St Jasleen Singh S b Deepankar R",
      runs: 34,
      balls: 25,
      fours: 2,
      sixes: 2,
      strikeRate: 136.0,
    },
    {
      player: "Richie Kapoor*",
      dismissal: "c Vikas V b Deepankar R",
      runs: 4,
      balls: 8,
      fours: 0,
      sixes: 0,
      strikeRate: 50.0,
    },
    {
      player: "Jesin George",
      dismissal: "c&b Vikas V",
      runs: 11,
      balls: 18,
      fours: 0,
      sixes: 0,
      strikeRate: 61.11,
    },
    {
      player: "Justin Pariat",
      dismissal: "b Raunak P",
      runs: 19,
      balls: 13,
      fours: 1,
      sixes: 1,
      strikeRate: 146.15,
    },
    {
      player: "Vinoth Kuberan",
      dismissal: "not out",
      runs: 8,
      balls: 6,
      fours: 1,
      sixes: 0,
      strikeRate: 133.33,
    },
    {
      player: "Ravi Prakash Duvva",
      dismissal: "not out",
      runs: 3,
      balls: 2,
      fours: 0,
      sixes: 0,
      strikeRate: 150.0,
    },
  ];
  const openScorecard = () => {
    const scorecardWindow = window.open("", "_blank");
    if (scorecardWindow) {
      scorecardWindow.document.write(`
        <html>
          <head>
            <title>Scorecard</title>
            <style>
              table {
                border-collapse: collapse;
                width: 100%;
              }
              th, td {
                border: 1px solid black;
                padding: 8px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <h1>Ridai Rockets Innings Scorecard</h1>
            <table>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Dismissal</th>
                  <th>Runs</th>
                  <th>Balls</th>
                  <th>4s</th>
                  <th>6s</th>
                  <th>SR</th>
                </tr>
              </thead>
              <tbody>
                ${scorecardData
                  .map(
                    (playerData) => `
                    <tr>
                      <td>${playerData.player}</td>
                      <td>${playerData.dismissal}</td>
                      <td>${playerData.runs}</td>
                      <td>${playerData.balls}</td>
                      <td>${playerData.fours}</td>
                      <td>${playerData.sixes}</td>
                      <td>${playerData.strikeRate}</td>
                    </tr>
                  `
                  )
                  .join("")}
              </tbody>
            </table>
          </body>
        </html>
      `);
    }
  };

  return (
    <div className="match-schedule-container">
      <div className="match-schedule-box">
        <div className="match-schedule">
          <div className="match-details">
            <div className="match-line day-of-week">{dayOfWeek}</div>
            <div className="match-line date">{dayOfMonth}</div>
            <div className="match-line month">
              {month.slice(0, 3)} {year}
            </div>
            <div className="match-line time">{time}</div>
          </div>
        </div>
      </div>
      <div className="team-logos-box">
        <div className="team-logos">
          <div
            className="team-logo"
            style={{ backgroundImage: `url(${Team.teamALogo})` }}
          ></div>
          <div className="vs-text">VS</div>
          <div
            className="team-logo"
            style={{ backgroundImage: `url(${Team.teamBLogo})` }}
          ></div>
        </div>
      </div>
      <div className="match-info-box">
        <div className="match-info">
          <div className="match-info-line league-info">{matchData.league}</div>
          <div className="match-info-line teams-info">
            {matchData.teams[0]} vs {matchData.teams[1]}
          </div>
          <div className="match-info-line round-info">{matchData.round}</div>
          <div className="match-info-line ground-info">
            Ground: {matchData.ground}
          </div>
          <div className="match-info-line umpires-info">
            Umpires: {matchData.umpires.join(", ")}
          </div>
          <div className="match-info-buttons">
            <button
              className="scorecard-button"
              onClick={() => setShowScorecard(!showScorecard)}
            >
              <Link to="/scorecard" className="scorecard-button">
                Scorecard
              </Link>
            </button>
          </div>
        </div>
      </div>
      {showScorecard && (
        <table className="scorecard-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Dismissal</th>
              <th>Runs</th>
              <th>Balls</th>
              <th>4s</th>
              <th>6s</th>
              <th>SR</th>
            </tr>
          </thead>
          <tbody>
            {scorecardData.map((playerData, index) => (
              <tr key={index}>
                <td>{playerData.player}</td>
                <td>{playerData.dismissal}</td>
                <td>{playerData.runs}</td>
                <td>{playerData.balls}</td>
                <td>{playerData.fours}</td>
                <td>{playerData.sixes}</td>
                <td>{playerData.strikeRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const MatchSchedule = () => {
  const matchDate = new Date("2022-09-05T16:00:00"); // Example date and time
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = days[matchDate.getDay()];
  const dayOfMonth = matchDate.getDate();
  const month = months[matchDate.getMonth()];
  const year = matchDate.getFullYear();
  const time = matchDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const Team = {
    teamALogo: "Team A Logo URL",
    teamBLogo: "Team B Logo URL",
  };
  const matchData = {
    league: "Example League",
    teams: ["Team A", "Team B"],
    round: "Round Name",
    ground: "Rideau Hall #1",
    umpires: ["Umpire A", "Umpire B"],
  };
  return (
    <div className="big-box-container">
      <div className="big-box">
        <MatchInfo
          dayOfWeek={dayOfWeek}
          dayOfMonth={dayOfMonth}
          month={month}
          year={year}
          time={time}
          Team={Team}
          matchData={matchData}
        />
      </div>
      <div className="big-box">
        <MatchInfo
          dayOfWeek={dayOfWeek}
          dayOfMonth={dayOfMonth}
          month={month}
          year={year}
          time={time}
          Team={Team}
          matchData={matchData}
        />
      </div>
      <div className="big-box">
        <MatchInfo
          dayOfWeek={dayOfWeek}
          dayOfMonth={dayOfMonth}
          month={month}
          year={year}
          time={time}
          Team={Team}
          matchData={matchData}
        />
      </div>
      <div className="big-box">
        <MatchInfo
          dayOfWeek={dayOfWeek}
          dayOfMonth={dayOfMonth}
          month={month}
          year={year}
          time={time}
          Team={Team}
          matchData={matchData}
        />
      </div>
      <div className="big-box">
        <MatchInfo
          dayOfWeek={dayOfWeek}
          dayOfMonth={dayOfMonth}
          month={month}
          year={year}
          time={time}
          Team={Team}
          matchData={matchData}
        />
      </div>
    </div>
  );
};

export default MatchSchedule;
