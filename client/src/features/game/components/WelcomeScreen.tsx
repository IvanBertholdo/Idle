import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useGame } from '../contexts/GameContext';
import { animalTypes } from '../data/gameData';

export function WelcomeScreen() {
  const { completeWelcome } = useGame();
  const [isOpened, setIsOpened] = React.useState(false);
  const [selectedAnimal, setSelectedAnimal] = React.useState<string | null>(null);

  const getRandomAnimal = () => {
    const random = Math.random() * 100; // 0-100
    
    if (random < 33.3) {
      return 'chicken'; // 33.3% chance
    } else if (random < 66.6) {
      return 'pig'; // 33.3% chance
    } else if (random < 99.9) {
      return 'cow'; // 33.3% chance
    } else {
      return 'dragon'; // 0.1% chance
    }
  };

  const handleOpenGift = () => {
    const animal = getRandomAnimal();
    setSelectedAnimal(animal);
    setIsOpened(true);
  };

  const handleStartFarming = () => {
    if (selectedAnimal) {
      completeWelcome(selectedAnimal);
    }
  };

  const getAnimalDisplay = (animalType: string) => {
    const animalData = animalTypes.find(a => a.type === animalType);
    return {
      icon: animalData?.icon || '🐔',
      name: animalData?.name || 'Animal',
      description: getAnimalDescription(animalType)
    };
  };

  const getAnimalDescription = (animalType: string) => {
    switch (animalType) {
      case 'chicken':
        return "You received a Chicken! This friendly bird will help you start earning coins.";
      case 'pig':
        return "You received a Pig! This clever animal will boost your farm's productivity.";
      case 'cow':
        return "You received a Cow! This majestic creature will significantly increase your income!";
      case 'dragon':
        return "INCREDIBLE! You received a DRAGON! This legendary creature will make you rich beyond imagination!✨";
      default:
        return "You received a special animal to start your farming adventure!";
    }
  };

  const getRarityClass = (animalType: string) => {
    switch (animalType) {
      case 'dragon':
        return 'text-red-600 animate-pulse';
      case 'cow':
        return 'text-blue-600';
      case 'pig':
        return 'text-pink-600';
      default:
        return 'text-green-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-green-800">
            🌾 Welcome to Lucrative Farm! 🌾
          </CardTitle>
          <CardDescription className="text-lg">
            Start your farming adventure with a special gift!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          {!isOpened ? (
            <div className="space-y-4">
              <div className="text-6xl animate-bounce">
                🎁
              </div>
              <p className="text-gray-600">
                Click to open your mystery gift box!
              </p>
              <Button 
                onClick={handleOpenGift}
                className="w-full text-lg py-6"
                size="lg"
              >
                Open Gift Box
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-6xl">
                {selectedAnimal && getAnimalDisplay(selectedAnimal).icon}
              </div>
              <p className={`text-xl font-semibold ${selectedAnimal ? getRarityClass(selectedAnimal) : ''}`}>
                Congratulations!
              </p>
              <p className="text-gray-600">
                {selectedAnimal && getAnimalDisplay(selectedAnimal).description}
              </p>
              {selectedAnimal === 'dragon' && (
                <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3">
                  <p className="text-yellow-800 font-bold text-sm">
                    🎉 LEGENDARY LUCK! 🎉
                  </p>
                  <p className="text-yellow-700 text-xs">
                    You're one of the 0.1% lucky players!
                  </p>
                </div>
              )}
              <Button 
                onClick={handleStartFarming}
                className="w-full text-lg py-6"
                size="lg"
              >
                Start Farming!
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}