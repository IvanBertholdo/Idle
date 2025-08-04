import * as React from 'react';
import { GameHeader } from './GameHeader';
import { FarmGrid } from './FarmGrid';
import { useGame } from '../contexts/GameContext';

export function MainGameScreen() {
  const { gameState } = useGame();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <GameHeader 
        coins={gameState.coins} 
        coinsPerSecond={gameState.coinsPerSecond} 
      />
      <div className="container mx-auto px-4 py-8">
        <FarmGrid barns={gameState.barns} />
      </div>
    </div>
  );
}