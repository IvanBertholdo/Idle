import * as React from 'react';
import { GameProvider } from '@/features/game/contexts/GameContext';
import { GameLayout } from '@/features/game/components/GameLayout';

function App() {
  return (
    <GameProvider>
      <GameLayout />
    </GameProvider>
  );
}

export default App;