import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Barn } from '../types';
import { useGame } from '../contexts/GameContext';

interface BarnUpgradesTabProps {
  barn: Barn;
}

export function BarnUpgradesTab({ barn }: BarnUpgradesTabProps) {
  const { gameState, upgradeBarnCapacity, upgradeBarnEfficiency } = useGame();

  const handleUpgradeCapacity = () => {
    upgradeBarnCapacity(barn.id);
  };

  const handleUpgradeEfficiency = () => {
    upgradeBarnEfficiency(barn.id);
  };

  const capacityUpgradeCost = 1000;
  const canAffordCapacityUpgrade = gameState.coins >= capacityUpgradeCost;
  const capacityMaxLevel = barn.capacityLevel >= 2;

  const efficiencyUpgradeCost = barn.efficiencyLevel === 0 ? 1500 : 20000;
  const canAffordEfficiencyUpgrade = gameState.coins >= efficiencyUpgradeCost;
  const efficiencyMaxLevel = barn.efficiencyLevel >= 2;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>📦</span>
            Capacity Upgrade
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span>Current Capacity:</span>
            <span className="font-bold">{barn.capacity} animals</span>
          </div>
          
          <Progress value={(barn.capacityLevel / 2) * 100} className="h-2" />
          
          <div className="text-sm text-gray-600">
            Level {barn.capacityLevel} / 2
          </div>

          {!capacityMaxLevel ? (
            <>
              <div className="flex justify-between items-center">
                <span>Next Level:</span>
                <span className="font-bold">25 animals</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span>🪙</span>
                  <span className="font-bold">{capacityUpgradeCost.toLocaleString()}</span>
                </div>
                <Button
                  onClick={handleUpgradeCapacity}
                  disabled={!canAffordCapacityUpgrade}
                >
                  {canAffordCapacityUpgrade ? 'Upgrade' : 'Not Enough Coins'}
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center text-green-600 font-medium">
              ✅ Maximum Capacity Reached
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>⚡</span>
            Efficiency Upgrade
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span>Current Bonus:</span>
            <span className="font-bold">+{barn.efficiencyBonus}%</span>
          </div>
          
          <Progress value={(barn.efficiencyLevel / 2) * 100} className="h-2" />
          
          <div className="text-sm text-gray-600">
            Level {barn.efficiencyLevel} / 2
          </div>

          {!efficiencyMaxLevel ? (
            <>
              <div className="flex justify-between items-center">
                <span>Next Level:</span>
                <span className="font-bold">
                  +{barn.efficiencyLevel === 0 ? '10' : '25'}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span>🪙</span>
                  <span className="font-bold">{efficiencyUpgradeCost.toLocaleString()}</span>
                </div>
                <Button
                  onClick={handleUpgradeEfficiency}
                  disabled={!canAffordEfficiencyUpgrade}
                >
                  {canAffordEfficiencyUpgrade ? 'Upgrade' : 'Not Enough Coins'}
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center text-green-600 font-medium">
              ✅ Maximum Efficiency Reached
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}