import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Barn } from '../types';
import { BarnUpgradesTab } from './BarnUpgradesTab';
import { BarnAnimalsTab } from './BarnAnimalsTab';

interface BarnDialogProps {
  barn: Barn;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BarnDialog({ barn, open, onOpenChange }: BarnDialogProps) {
  const [activeTab, setActiveTab] = React.useState<'animals' | 'upgrades'>('animals');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            {barn.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Button
              variant={activeTab === 'animals' ? 'default' : 'outline'}
              onClick={() => setActiveTab('animals')}
              className="flex-1"
            >
              Animals ({barn.animals.length}/{barn.capacity})
            </Button>
            <Button
              variant={activeTab === 'upgrades' ? 'default' : 'outline'}
              onClick={() => setActiveTab('upgrades')}
              className="flex-1"
            >
              Upgrades
            </Button>
          </div>

          {activeTab === 'animals' && <BarnAnimalsTab barn={barn} />}
          {activeTab === 'upgrades' && <BarnUpgradesTab barn={barn} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}