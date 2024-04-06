// Matches.jsx
import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import "./Matches.css";

// modal that show when you click on scoreboard
const ScorecardModal = ({ onClose, matchData }) => {

  // Helper function to format the fall of wickets
  const formatFallOfWickets = (fallOfWickets) => {
    return fallOfWickets.map(wicket => 
      `${wicket.wicketNumber}/${wicket.scoreAtWicket} (${wicket.playerOut}, ${wicket.over} ov)`
    ).join(' · ');
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Scorecard</h2>

        {matchData.teams.map((team, index) => (
          <div key={index}>
            <h3>{team.name}</h3>
            <h4>Batting</h4>
            <table>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>R</th>
                  <th>B</th>
                  <th>4s</th>
                  <th>6s</th>
                  <th>SR</th>
                  <th>How Out</th>
                </tr>
              </thead>
              <tbody>
                {team.players.map((player, playerIndex) => (
                  <tr key={playerIndex}>
                    <td>{player.name}</td>
                    <td>{player.battingStats?.runs || '-'}</td>
                    <td>{player.battingStats?.balls || '-'}</td>
                    <td>{player.battingStats?.fours || '-'}</td>
                    <td>{player.battingStats?.sixes || '-'}</td>
                    <td>{player.battingStats?.strikeRate || '-'}</td>
                    <td>{player.battingStats?.howOut || 'N/A'}</td>
                </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h4>Fall of wickets</h4>
              <p>{formatFallOfWickets(team.fallOfWickets)}</p>
            </div>
            <h4>Bowling</h4>
            <table>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>O</th>
                  <th>M</th>
                  <th>R</th>
                  <th>W</th>
                  <th>Econ</th>
                </tr>
              </thead>
              <tbody>
                {team.players.map((player, playerIndex) => (
                  <tr key={playerIndex}>
                    <td>{player.name}</td>
                    <td>{player.bowlingStats.overs}</td>
                    <td>{player.bowlingStats.maidens}</td>
                    <td>{player.bowlingStats.runsConceded}</td>
                    <td>{player.bowlingStats.wickets}</td>
                    <td>{player.bowlingStats.economyRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <h4>Result: {matchData.result}</h4>
      </div>
    </div>
  );
};


const MatchInfo = ({ matchData }) => {
  const [showScorecard, setShowScorecard] = useState(false);

  const date = new Date(matchData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const time = new Date(matchData.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="match-schedule-container">
      <div className="match-info-box">
        <div className="match-info">
          <div className="match-info-line teams-info">
            {matchData.teams[0].name} vs {matchData.teams[1].name}
          </div>
          <div className="match-info-line">{date} at {time}</div>
          <div className="match-info-line ground-info">
            Ground: {matchData.location}
          </div>
          <div className="match-info-line result-info">
            Result: {matchData.result}
          </div>
          <div className="match-info-buttons">
            <button className="scorecard-button" onClick={() => setShowScorecard(true)}>
              Scorecard
            </button>
          </div>
        </div>
      </div>
      {showScorecard && <ScorecardModal onClose={() => setShowScorecard(false)} matchData={matchData} />}
    </div>
  );
};


const MatchSchedule = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('http://localhost:3002/matches');
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="big-box-container">
      {matches.length > 0 ? (
        matches.map(matchData => (
          <div key={matchData._id} className="big-box">
            <MatchInfo matchData={matchData} />
          </div>
        ))
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
};

export default MatchSchedule;
