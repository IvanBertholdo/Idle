import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GameHeaderProps {
  coins: number;
  coinsPerSecond: number;
}

export function GameHeader({ coins, coinsPerSecond }: GameHeaderProps) {
  return (
    <div className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            🌾 Lucrative Farm
          </h1>
          <div className="flex items-center gap-4">
            <Card className="bg-yellow-400 border-yellow-500">
              <CardContent className="p-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🪙</span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-yellow-900">
                      {Math.floor(coins).toLocaleString()}
                    </div>
                    <div className="text-sm text-yellow-800">
                      +{coinsPerSecond.toFixed(1)}/sec
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}