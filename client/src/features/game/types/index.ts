export interface Animal {
  id: string;
  name: string;
  type: string;
  coinsPerSecond: number;
  customName?: string;
}

export interface Barn {
  id: string;
  type: string;
  name: string;
  capacity: number;
  capacityLevel: number;
  efficiencyLevel: number;
  efficiencyBonus: number;
  animals: Animal[];
  unlocked: boolean;
}

export interface BarnUpgrade {
  level: number;
  cost: number;
  description: string;
}

export interface AnimalType {
  type: string;
  name: string;
  baseCost: number;
  baseCoinsPerSecond: number;
  barnType: string;
}

export interface GameState {
  coins: number;
  coinsPerSecond: number;
  barns: Barn[];
  isFirstTime: boolean;
  lastSaveTime: number;
}