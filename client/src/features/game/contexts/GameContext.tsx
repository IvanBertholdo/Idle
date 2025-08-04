import * as React from 'react';
import { GameState, Animal, Barn } from '../types';
import { barnTypes, animalTypes } from '../data/gameData';

interface GameContextType {
  gameState: GameState;
  buyAnimal: (barnId: string, animalType: string) => boolean;
  upgradeBarnCapacity: (barnId: string) => boolean;
  upgradeBarnEfficiency: (barnId: string) => boolean;
  unlockBarn: (barnType: string) => boolean;
  renameAnimal: (barnId: string, animalId: string, newName: string) => void;
  completeWelcome: (selectedAnimal: string) => void;
}

const GameContext = React.createContext<GameContextType | null>(null);

const SAVE_KEY = 'lucrative-farm-save';

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [gameState, setGameState] = React.useState<GameState>(() => {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...parsed,
        lastSaveTime: Date.now()
      };
    }
    
    return {
      coins: 0,
      coinsPerSecond: 0,
      barns: [
        {
          id: 'chickenCoop',
          type: 'chickenCoop',
          name: 'Chicken Coop',
          capacity: 10,
          capacityLevel: 1,
          efficiencyLevel: 0,
          efficiencyBonus: 0,
          animals: [],
          unlocked: true
        }
      ],
      isFirstTime: true,
      lastSaveTime: Date.now()
    };
  });

  const saveGame = React.useCallback((state: GameState) => {
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      ...state,
      lastSaveTime: Date.now()
    }));
  }, []);

  const calculateCoinsPerSecond = React.useCallback((barns: Barn[]) => {
    return barns.reduce((total, barn) => {
      const barnTotal = barn.animals.reduce((barnSum, animal) => {
        const baseRate = animal.coinsPerSecond;
        const efficiencyMultiplier = 1 + (barn.efficiencyBonus / 100);
        return barnSum + (baseRate * efficiencyMultiplier);
      }, 0);
      return total + barnTotal;
    }, 0);
  }, []);

  const buyAnimal = React.useCallback((barnId: string, animalType: string) => {
    const animalData = animalTypes.find(a => a.type === animalType);
    if (!animalData) return false;

    setGameState(prev => {
      const barn = prev.barns.find(b => b.id === barnId);
      if (!barn || barn.animals.length >= barn.capacity) return prev;

      const cost = animalData.baseCost * Math.pow(1.15, barn.animals.length);
      if (prev.coins < cost) return prev;

      const newAnimal: Animal = {
        id: `${animalType}_${Date.now()}_${Math.random()}`,
        name: animalData.name,
        type: animalType,
        coinsPerSecond: animalData.baseCoinsPerSecond
      };

      const updatedBarns = prev.barns.map(b => 
        b.id === barnId 
          ? { ...b, animals: [...b.animals, newAnimal] }
          : b
      );

      const newState = {
        ...prev,
        coins: prev.coins - cost,
        barns: updatedBarns,
        coinsPerSecond: calculateCoinsPerSecond(updatedBarns)
      };

      saveGame(newState);
      return newState;
    });

    return true;
  }, [calculateCoinsPerSecond, saveGame]);

  const upgradeBarnCapacity = React.useCallback((barnId: string) => {
    setGameState(prev => {
      const barn = prev.barns.find(b => b.id === barnId);
      if (!barn || barn.capacityLevel >= 2) return prev;

      const cost = 1000;
      if (prev.coins < cost) return prev;

      const updatedBarns = prev.barns.map(b => 
        b.id === barnId 
          ? { 
              ...b, 
              capacityLevel: 2,
              capacity: 25
            }
          : b
      );

      const newState = {
        ...prev,
        coins: prev.coins - cost,
        barns: updatedBarns
      };

      saveGame(newState);
      return newState;
    });

    return true;
  }, [saveGame]);

  const upgradeBarnEfficiency = React.useCallback((barnId: string) => {
    setGameState(prev => {
      const barn = prev.barns.find(b => b.id === barnId);
      if (!barn) return prev;

      const nextLevel = barn.efficiencyLevel + 1;
      if (nextLevel > 2) return prev;

      const cost = nextLevel === 1 ? 1500 : 20000;
      if (prev.coins < cost) return prev;

      const bonus = nextLevel === 1 ? 10 : 25;

      const updatedBarns = prev.barns.map(b => 
        b.id === barnId 
          ? { 
              ...b, 
              efficiencyLevel: nextLevel,
              efficiencyBonus: bonus
            }
          : b
      );

      const newState = {
        ...prev,
        coins: prev.coins - cost,
        barns: updatedBarns,
        coinsPerSecond: calculateCoinsPerSecond(updatedBarns)
      };

      saveGame(newState);
      return newState;
    });

    return true;
  }, [calculateCoinsPerSecond, saveGame]);

  const unlockBarn = React.useCallback((barnType: string) => {
    const barnData = barnTypes[barnType as keyof typeof barnTypes];
    if (!barnData) return false;

    setGameState(prev => {
      if (prev.barns.find(b => b.type === barnType)) return prev;
      if (prev.coins < barnData.baseCost) return prev;

      const newBarn: Barn = {
        id: barnType,
        type: barnType,
        name: barnData.name,
        capacity: 10,
        capacityLevel: 1,
        efficiencyLevel: 0,
        efficiencyBonus: 0,
        animals: [],
        unlocked: true
      };

      const newState = {
        ...prev,
        coins: prev.coins - barnData.baseCost,
        barns: [...prev.barns, newBarn]
      };

      saveGame(newState);
      return newState;
    });

    return true;
  }, [saveGame]);

  const renameAnimal = React.useCallback((barnId: string, animalId: string, newName: string) => {
    setGameState(prev => {
      const updatedBarns = prev.barns.map(barn => 
        barn.id === barnId 
          ? {
              ...barn,
              animals: barn.animals.map(animal =>
                animal.id === animalId 
                  ? { ...animal, customName: newName }
                  : animal
              )
            }
          : barn
      );

      const newState = {
        ...prev,
        barns: updatedBarns
      };

      saveGame(newState);
      return newState;
    });
  }, [saveGame]);

  const completeWelcome = React.useCallback((selectedAnimal: string) => {
    setGameState(prev => {
      const animalData = animalTypes.find(a => a.type === selectedAnimal);
      if (!animalData) return prev;

      const newAnimal: Animal = {
        id: `${selectedAnimal}_welcome_${Date.now()}`,
        name: animalData.name,
        type: selectedAnimal,
        coinsPerSecond: animalData.baseCoinsPerSecond
      };

      // Determinar qual celeiro desbloquear baseado no animal
      const barnTypeToUnlock = animalData.barnType;
      
      // Criar o celeiro inicial baseado no animal sorteado
      const initialBarn: Barn = {
        id: barnTypeToUnlock,
        type: barnTypeToUnlock,
        name: barnTypes[barnTypeToUnlock]?.name || 'Barn',
        capacity: 10,
        capacityLevel: 1,
        efficiencyLevel: 0,
        efficiencyBonus: 0,
        animals: [newAnimal],
        unlocked: true
      };

      // Determinar moedas iniciais baseado na raridade do animal
      let initialCoins = 50; // padrão
      switch (selectedAnimal) {
        case 'dragon':
          initialCoins = 10000; // Muito rico!
          break;
        case 'cow':
          initialCoins = 500; // Rico
          break;
        case 'pig':
          initialCoins = 200; // Médio
          break;
        case 'chicken':
        default:
          initialCoins = 50; // Básico
          break;
      }

      // Criar array de celeiros - manter o Chicken Coop e adicionar o novo
      let updatedBarns: Barn[];
      
      if (selectedAnimal === 'chicken') {
        // Se sorteou galinha, apenas atualizar o Chicken Coop existente
        updatedBarns = prev.barns.map(barn => 
          barn.type === 'chickenCoop' 
            ? { ...barn, animals: [newAnimal] }
            : barn
        );
      } else {
        // Se sorteou outro animal, manter o Chicken Coop e adicionar o novo celeiro
        updatedBarns = [
          ...prev.barns, // Mantém o Chicken Coop existente
          initialBarn    // Adiciona o novo celeiro
        ];
      }

      const newState = {
        ...prev,
        coins: initialCoins,
        barns: updatedBarns,
        isFirstTime: false,
        coinsPerSecond: calculateCoinsPerSecond(updatedBarns)
      };

      saveGame(newState);
      return newState;
    });
  }, [calculateCoinsPerSecond, saveGame]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setGameState(prev => {
        if (prev.coinsPerSecond === 0) return prev;

        const newState = {
          ...prev,
          coins: prev.coins + prev.coinsPerSecond
        };

        if (Date.now() - prev.lastSaveTime > 5000) {
          saveGame(newState);
        }

        return newState;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [saveGame]);

  const contextValue: GameContextType = {
    gameState,
    buyAnimal,
    upgradeBarnCapacity,
    upgradeBarnEfficiency,
    unlockBarn,
    renameAnimal,
    completeWelcome
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
}