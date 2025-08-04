import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Barn } from '../types';
import { BarnDialog } from './BarnDialog';

interface BarnCardProps {
  barn: Barn;
}

const barnEmojis = {
  chickenCoop: '🏠',
  cowBarn: '🏚️',
  pigPen: '🏘️'
};

export function BarnCard({ barn }: BarnCardProps) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const totalProduction = barn.animals.reduce((sum, animal) => {
    const baseRate = animal.coinsPerSecond;
    const efficiencyMultiplier = 1 + (barn.efficiencyBonus / 100);
    return sum + (baseRate * efficiencyMultiplier);
  }, 0);

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-white border-2 border-green-200">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">
                {barnEmojis[barn.type as keyof typeof barnEmojis] || '🏠'}
              </span>
              <span className="text-lg">{barn.name}</span>
            </div>
            <div className="text-sm text-gray-500">
              {barn.animals.length}/{barn.capacity}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Production:</span>
            <span className="font-semibold text-green-600">
              +{totalProduction.toFixed(1)}/sec
            </span>
          </div>
          
          {barn.efficiencyBonus > 0 && (
            <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
              +{barn.efficiencyBonus}% efficiency bonus
            </div>
          )}

          <div className="space-y-1">
            {barn.animals.slice(0, 3).map((animal, index) => (
              <div key={animal.id} className="text-xs text-gray-500 flex items-center gap-1">
                <span>🐔</span>
                <span>{animal.customName || animal.name}</span>
              </div>
            ))}
            {barn.animals.length > 3 && (
              <div className="text-xs text-gray-400">
                +{barn.animals.length - 3} more...
              </div>
            )}
          </div>

          <Button 
            onClick={() => setIsDialogOpen(true)}
            className="w-full"
            variant="outline"
          >
            Manage Barn
          </Button>
        </CardContent>
      </Card>

      <BarnDialog 
        barn={barn}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}