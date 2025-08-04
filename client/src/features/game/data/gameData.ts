import { AnimalType, BarnType, BarnUpgrade } from '../types';

export const animalTypes: AnimalType[] = [
  // Aves
  {
    type: 'chicken',
    name: 'Chicken',
    baseCost: 15,
    baseCoinsPerSecond: 1,
    barnType: 'chickenCoop',
    icon: '🐔'
  },
  {
    type: 'duck',
    name: 'Duck',
    baseCost: 25,
    baseCoinsPerSecond: 2,
    barnType: 'duckPond',
    icon: '🦆'
  },
  {
    type: 'turkey',
    name: 'Turkey',
    baseCost: 50,
    baseCoinsPerSecond: 4,
    barnType: 'turkeyRoost',
    icon: '🦃'
  },
  {
    type: 'quail',
    name: 'Quail',
    baseCost: 75,
    baseCoinsPerSecond: 6,
    barnType: 'quailNest',
    icon: '🐦'
  },
  {
    type: 'goose',
    name: 'Goose',
    baseCost: 100,
    baseCoinsPerSecond: 8,
    barnType: 'gooseMeadow',
    icon: '🦢'
  },

  // Animais de Médio Porte
  {
    type: 'pig',
    name: 'Pig',
    baseCost: 150,
    baseCoinsPerSecond: 8,
    barnType: 'pigPen',
    icon: '🐷'
  },
  {
    type: 'sheep',
    name: 'Sheep',
    baseCost: 200,
    baseCoinsPerSecond: 10,
    barnType: 'sheepFold',
    icon: '🐑'
  },
  {
    type: 'goat',
    name: 'Goat',
    baseCost: 300,
    baseCoinsPerSecond: 15,
    barnType: 'goatHill',
    icon: '🐐'
  },
  {
    type: 'rabbit',
    name: 'Rabbit',
    baseCost: 400,
    baseCoinsPerSecond: 18,
    barnType: 'rabbitWarren',
    icon: '🐰'
  },
  {
    type: 'alpaca',
    name: 'Alpaca',
    baseCost: 600,
    baseCoinsPerSecond: 25,
    barnType: 'alpacaValley',
    icon: '🦙'
  },

  // Animais Grandes
  {
    type: 'cow',
    name: 'Cow',
    baseCost: 500,
    baseCoinsPerSecond: 25,
    barnType: 'cowBarn',
    icon: '🐮'
  },
  {
    type: 'horse',
    name: 'Horse',
    baseCost: 800,
    baseCoinsPerSecond: 35,
    barnType: 'horseStable',
    icon: '🐴'
  },
  {
    type: 'donkey',
    name: 'Donkey',
    baseCost: 1000,
    baseCoinsPerSecond: 40,
    barnType: 'donkeyCorral',
    icon: '🐴'
  },
  {
    type: 'buffalo',
    name: 'Buffalo',
    baseCost: 1500,
    baseCoinsPerSecond: 60,
    barnType: 'buffaloPrairie',
    icon: '🐃'
  },
  {
    type: 'yak',
    name: 'Yak',
    baseCost: 2000,
    baseCoinsPerSecond: 80,
    barnType: 'yakMountain',
    icon: '🐂'
  },

  // Animais Exóticos
  {
    type: 'llama',
    name: 'Llama',
    baseCost: 3000,
    baseCoinsPerSecond: 100,
    barnType: 'llamaRidge',
    icon: '🦙'
  },
  {
    type: 'camel',
    name: 'Camel',
    baseCost: 5000,
    baseCoinsPerSecond: 150,
    barnType: 'camelOasis',
    icon: '🐫'
  },
  {
    type: 'ostrich',
    name: 'Ostrich',
    baseCost: 7500,
    baseCoinsPerSecond: 200,
    barnType: 'ostrichSavanna',
    icon: '🦃'
  },
  {
    type: 'emu',
    name: 'Emu',
    baseCost: 10000,
    baseCoinsPerSecond: 250,
    barnType: 'emuOutback',
    icon: '🦘'
  },
  {
    type: 'peacock',
    name: 'Peacock',
    baseCost: 15000,
    baseCoinsPerSecond: 300,
    barnType: 'peacockGarden',
    icon: '🦚'
  },

  // Animais Premium
  {
    type: 'unicorn',
    name: 'Unicorn',
    baseCost: 25000,
    baseCoinsPerSecond: 500,
    barnType: 'unicornGrove',
    icon: '🦄'
  },
  {
    type: 'dragon',
    name: 'Dragon',
    baseCost: 50000,
    baseCoinsPerSecond: 1000,
    barnType: 'dragonCave',
    icon: '🐉'
  },
  {
    type: 'phoenix',
    name: 'Phoenix',
    baseCost: 100000,
    baseCoinsPerSecond: 2000,
    barnType: 'phoenixNest',
    icon: '🦅'
  }
];

export const barnTypes: Record<string, BarnType> = {
  // Aves
  chickenCoop: {
    id: 'chickenCoop',
    type: 'chickenCoop',
    name: 'Chicken Coop',
    baseCost: 0,
    unlocked: true,
    icon: '🏠'
  },
  duckPond: {
    id: 'duckPond',
    type: 'duckPond',
    name: 'Duck Pond',
    baseCost: 100,
    unlocked: false,
    icon: '🏞️'
  },
  turkeyRoost: {
    id: 'turkeyRoost',
    type: 'turkeyRoost',
    name: 'Turkey Roost',
    baseCost: 200,
    unlocked: false,
    icon: '🦃'
  },
  quailNest: {
    id: 'quailNest',
    type: 'quailNest',
    name: 'Quail Nest',
    baseCost: 300,
    unlocked: false,
    icon: '🪺'
  },
  gooseMeadow: {
    id: 'gooseMeadow',
    type: 'gooseMeadow',
    name: 'Goose Meadow',
    baseCost: 400,
    unlocked: false,
    icon: '🌾'
  },

  // Animais de Médio Porte
  pigPen: {
    id: 'pigPen',
    type: 'pigPen',
    name: 'Pig Pen',
    baseCost: 750,
    unlocked: false,
    icon: '🐷'
  },
  sheepFold: {
    id: 'sheepFold',
    type: 'sheepFold',
    name: 'Sheep Fold',
    baseCost: 1000,
    unlocked: false,
    icon: '🐑'
  },
  goatHill: {
    id: 'goatHill',
    type: 'goatHill',
    name: 'Goat Hill',
    baseCost: 1500,
    unlocked: false,
    icon: '⛰️'
  },
  rabbitWarren: {
    id: 'rabbitWarren',
    type: 'rabbitWarren',
    name: 'Rabbit Warren',
    baseCost: 2000,
    unlocked: false,
    icon: '🐰'
  },
  alpacaValley: {
    id: 'alpacaValley',
    type: 'alpacaValley',
    name: 'Alpaca Valley',
    baseCost: 3000,
    unlocked: false,
    icon: '🏔️'
  },

  // Animais Grandes
  cowBarn: {
    id: 'cowBarn',
    type: 'cowBarn',
    name: 'Cow Barn',
    baseCost: 2500,
    unlocked: false,
    icon: '🏚️'
  },
  horseStable: {
    id: 'horseStable',
    type: 'horseStable',
    name: 'Horse Stable',
    baseCost: 4000,
    unlocked: false,
    icon: '🏇'
  },
  donkeyCorral: {
    id: 'donkeyCorral',
    type: 'donkeyCorral',
    name: 'Donkey Corral',
    baseCost: 5000,
    unlocked: false,
    icon: '🏗️'
  },
  buffaloPrairie: {
    id: 'buffaloPrairie',
    type: 'buffaloPrairie',
    name: 'Buffalo Prairie',
    baseCost: 7500,
    unlocked: false,
    icon: '🌾'
  },
  yakMountain: {
    id: 'yakMountain',
    type: 'yakMountain',
    name: 'Yak Mountain',
    baseCost: 10000,
    unlocked: false,
    icon: '🏔️'
  },

  // Animais Exóticos
  llamaRidge: {
    id: 'llamaRidge',
    type: 'llamaRidge',
    name: 'Llama Ridge',
    baseCost: 15000,
    unlocked: false,
    icon: '🏔️'
  },
  camelOasis: {
    id: 'camelOasis',
    type: 'camelOasis',
    name: 'Camel Oasis',
    baseCost: 25000,
    unlocked: false,
    icon: '🏜️'
  },
  ostrichSavanna: {
    id: 'ostrichSavanna',
    type: 'ostrichSavanna',
    name: 'Ostrich Savanna',
    baseCost: 35000,
    unlocked: false,
    icon: '🦃'
  },
  emuOutback: {
    id: 'emuOutback',
    type: 'emuOutback',
    name: 'Emu Outback',
    baseCost: 50000,
    unlocked: false,
    icon: '🇺🇦'
  },
  peacockGarden: {
    id: 'peacockGarden',
    type: 'peacockGarden',
    name: 'Peacock Garden',
    baseCost: 75000,
    unlocked: false,
    icon: '🌺'
  },

  // Animais Premium
  unicornGrove: {
    id: 'unicornGrove',
    type: 'unicornGrove',
    name: 'Unicorn Grove',
    baseCost: 100000,
    unlocked: false,
    icon: '🦄'
  },
  dragonCave: {
    id: 'dragonCave',
    type: 'dragonCave',
    name: 'Dragon Cave',
    baseCost: 200000,
    unlocked: false,
    icon: '🕳️'
  },
  phoenixNest: {
    id: 'phoenixNest',
    type: 'phoenixNest',
    name: 'Phoenix Nest',
    baseCost: 500000,
    unlocked: false,
    icon: '🔥'
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