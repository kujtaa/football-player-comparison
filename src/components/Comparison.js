
import React from 'react';
import PlayerCard from './PlayerCard';
import { players } from '../data/players';

const Comparison = () => {
  return (
    <div className="comparison">
      <PlayerCard player={players[0]} />
      <PlayerCard player={players[1]} />
    </div>
  );
};

export default Comparison;
