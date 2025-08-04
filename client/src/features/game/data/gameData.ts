import { AnimalType, Barn, BarnUpgrade } from '../types';

export const animalTypes: AnimalType[] = [
  {
    type: 'chicken',
    name: 'Chicken',
    baseCost: 15,
    baseCoinsPerSecond: 1,
    barnType: 'chickenCoop'
  },
  {
    type: 'cow',
    name: 'Cow',
    baseCost: 500,
    baseCoinsPerSecond: 25,
    barnType: 'cowBarn'
  },
  {
    type: 'pig',
    name: 'Pig',
    baseCost: 150,
    baseCoinsPerSecond: 8,
    barnType: 'pigPen'
  }
];

export const barnTypes = {
  chickenCoop: {
    id: 'chickenCoop',
    type: 'chickenCoop',
    name: 'Chicken Coop',
    baseCost: 0,
    unlocked: true
  },
  cowBarn: {
    id: 'cowBarn',
    type: 'cowBarn',
    name: 'Cow Barn',
    baseCost: 2500,
    unlocked: false
  },
  pigPen: {
    id: 'pigPen',
    type: 'pigPen',
    name: 'Pig Pen',
    baseCost: 750,
    unlocked: false
  }
};

export const capacityUpgrades: BarnUpgrade[] = [
  { level: 1, cost: 0, description: '10 animals' },
  { level: 2, cost: 1000, description: '25 animals' }
];

export const efficiencyUpgrades: BarnUpgrade[] = [
  { level: 1, cost: 1500, description: '+10% production' },
  { level: 2, cost: 20000, description: '+25% production' }
];