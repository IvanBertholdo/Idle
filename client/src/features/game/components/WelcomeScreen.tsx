import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useGame } from '../contexts/GameContext';

export function WelcomeScreen() {
  const { completeWelcome } = useGame();
  const [isOpened, setIsOpened] = React.useState(false);

  const handleOpenGift = () => {
    setIsOpened(true);
  };

  const handleSelectChicken = () => {
    completeWelcome('chicken');
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
                🐔
              </div>
              <p className="text-xl font-semibold text-green-800">
                Congratulations!
              </p>
              <p className="text-gray-600">
                You received a Chicken! This friendly bird will help you start earning coins.
              </p>
              <Button 
                onClick={handleSelectChicken}
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