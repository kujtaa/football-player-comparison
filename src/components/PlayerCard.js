
import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <img src={player.imageUrl.startsWith('http') ? player.imageUrl : process.env.PUBLIC_URL + player.imageUrl} alt={player.name} />
      <h2>{player.name}</h2>
      <p>Position: {player.position}</p>
      <p>Team: {player.team}</p>
      <p>Nationality: {player.nationality}</p>
      <div className="stats">
        <h3>Stats</h3>
        <p>Goals: {player.stats.goals}</p>
        <p>Assists: {player.stats.assists}</p>
        <p>Appearances: {player.stats.appearances}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
