import type { ReactNode } from 'react';
import type { WeatherData } from '@/types/weather';
import { CircleGauge, Droplets, Thermometer, Wind } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PanelDataItem } from '../data-item';

interface AdditionalDataPanelProps {
  weatherData: WeatherData;
}

export function AdditionalDataPanel({
  weatherData,
}: AdditionalDataPanelProps): ReactNode {
  return (
    <Card className="bg-card/50 backdrop-blur w-full px-0">
      <CardContent className="grid grid-cols-2 lg:flex gap-2 lg:gap-0 lg:divide-x *:lg:px-4">
        <PanelDataItem
          icon={Thermometer}
          label="Odczuwalna"
          value={weatherData.temperature.feelsLike}
          append="°C"
        />
        <PanelDataItem
          icon={Droplets}
          label="Wilgotność powietrza"
          value={weatherData.humidity}
          append="%"
        />
        <PanelDataItem
          icon={Wind}
          label="Prędkość wiatru"
          value={weatherData.windSpeed}
          append="m/s"
        />
        <PanelDataItem
          icon={CircleGauge}
          label="Ciśnienie"
          value={weatherData.pressure}
          append="hPa"
        />
      </CardContent>
    </Card>
  );
}
