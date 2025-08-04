import * as React from 'react';
import { Barn } from '../types';
import { BarnCard } from './BarnCard';
import { UnlockBarnCard } from './UnlockBarnCard';
import { barnTypes } from '../data/gameData';

interface FarmGridProps {
  barns: Barn[];
}

export function FarmGrid({ barns }: FarmGridProps) {
  const unlockedBarnTypes = barns.map(b => b.type);
  const availableToUnlock = Object.values(barnTypes).filter(
    bt => !unlockedBarnTypes.includes(bt.type) && !bt.unlocked
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {barns.map(barn => (
        <BarnCard key={barn.id} barn={barn} />
      ))}
      {availableToUnlock.map(barnType => (
        <UnlockBarnCard key={barnType.type} barnType={barnType} />
      ))}
    </div>
  );
}