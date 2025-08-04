import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PiggyBank } from 'lucide-react';
import { useGame } from '../contexts/GameContext';
import { barnTypes } from '../data/gameData';

interface UnlockBarnCardProps {
  barnType: {
    id: string;
    type: string;
    name: string;
    baseCost: number;
    unlocked: boolean;
  };
}

export function UnlockBarnCard({ barnType }: UnlockBarnCardProps) {
  const { gameState, unlockBarn } = useGame();

  const handleUnlock = () => {
    unlockBarn(barnType.type);
  };

  const canAfford = gameState.coins >= barnType.baseCost;
  
  // Buscar o ícone do celeiro no gameData
  const barnData = barnTypes[barnType.type];
  const barnIcon = barnData?.icon || '🏠';

  return (
    <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-gray-600">
          <span className="text-2xl grayscale">
            {barnIcon}
          </span>
          <span className="text-lg">{barnType.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-center">
          <div className="text-2xl mb-2">🔒</div>
          <p className="text-sm text-gray-600 mb-4">
            Unlock this barn to house new types of animals!
          </p>
          <div className="flex items-center justify-center gap-1 mb-4">
            <PiggyBank className="w-6 h-6 text-yellow-900" />
            <span className="font-bold text-lg">
              {barnType.baseCost.toLocaleString()}
            </span>
          </div>
          <Button 
            onClick={handleUnlock}
            disabled={!canAfford}
            className="w-full"
          >
            {canAfford ? 'Unlock Barn' : 'Not Enough Coins'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}