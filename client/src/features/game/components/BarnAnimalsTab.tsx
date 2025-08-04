import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Barn } from '../types';
import { useGame } from '../contexts/GameContext';
import { animalTypes } from '../data/gameData';

interface BarnAnimalsTabProps {
  barn: Barn;
}

export function BarnAnimalsTab({ barn }: BarnAnimalsTabProps) {
  const { gameState, buyAnimal, renameAnimal } = useGame();
  const [renamingAnimal, setRenamingAnimal] = React.useState<string | null>(null);
  const [newName, setNewName] = React.useState('');

  const availableAnimalTypes = animalTypes.filter(at => at.barnType === barn.type);

  const handleBuyAnimal = (animalType: string) => {
    buyAnimal(barn.id, animalType);
  };

  const handleRename = (animalId: string) => {
    if (newName.trim()) {
      renameAnimal(barn.id, animalId, newName.trim());
      setRenamingAnimal(null);
      setNewName('');
    }
  };

  const startRename = (animalId: string, currentName: string) => {
    setRenamingAnimal(animalId);
    setNewName(currentName);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Buy Animals</h3>
        {availableAnimalTypes.map(animalType => {
          const cost = animalType.baseCost * Math.pow(1.15, barn.animals.filter(a => a.type === animalType.type).length);
          const canAfford = gameState.coins >= cost;
          const hasSpace = barn.animals.length < barn.capacity;

          return (
            <Card key={animalType.type} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐔</span>
                  <div>
                    <div className="font-medium">{animalType.name}</div>
                    <div className="text-sm text-gray-600">
                      +{animalType.baseCoinsPerSecond}/sec
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <span>🪙</span>
                      <span className="font-bold">{Math.floor(cost).toLocaleString()}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleBuyAnimal(animalType.type)}
                    disabled={!canAfford || !hasSpace}
                    size="sm"
                  >
                    {!hasSpace ? 'No Space' : !canAfford ? 'Too Expensive' : 'Buy'}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {barn.animals.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Your Animals</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {barn.animals.map(animal => (
              <Card key={animal.id} className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🐔</span>
                    <div>
                      {renamingAnimal === animal.id ? (
                        <div className="space-y-1">
                          <Input
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Enter new name"
                            className="h-8"
                          />
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              onClick={() => handleRename(animal.id)}
                            >
                              Save
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setRenamingAnimal(null)}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="font-medium">
                            {animal.customName || animal.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            +{(animal.coinsPerSecond * (1 + barn.efficiencyBonus / 100)).toFixed(1)}/sec
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  {renamingAnimal !== animal.id && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startRename(animal.id, animal.customName || animal.name)}
                    >
                      Rename
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}