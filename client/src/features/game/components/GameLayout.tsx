import * as React from 'react';
import { useGame } from '../contexts/GameContext';
import { WelcomeScreen } from './WelcomeScreen';
import { MainGameScreen } from './MainGameScreen';

export function GameLayout() {
  const { gameState } = useGame();

  if (gameState.isFirstTime) {
    return <WelcomeScreen />;
  }

  return <MainGameScreen />;
}