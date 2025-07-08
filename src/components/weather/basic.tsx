import type { ReactNode } from 'react';
import type { WeatherData } from '@/types/weather';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getDateTimeLocalized, getTime } from '@/lib/utils';
import { WeatherIcon } from '@/components/weather/icon';
import { PanelDataItem } from '@/components/weather/data-item';
import { ChevronDown, ChevronUp, Sunrise, Sunset } from 'lucide-react';

interface BasicDataPanelProps {
  weatherData: WeatherData;
}

export function BasicDataPanel({
  weatherData,
}: BasicDataPanelProps): ReactNode {
  return (
    <Card className="bg-card/50 backdrop-blur w-full">
      <CardHeader>
        <CardDescription className="flex items-center gap-2 flex-wrap">
          <p>{getDateTimeLocalized(new Date().toISOString())}</p>
        </CardDescription>
        <CardTitle className="text-xl capitalize">
          {weatherData.description}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid lg:grid-cols-[60%_40%] lg:justify-center px-0">
        <div className="flex-center divide-x *:px-4">
          <p>
            <span className="font-black text-7xl lg:text-9xl">
              {weatherData.temperature.main}
            </span>
            <span className="font-semibold text-xl align-top">°C</span>
          </p>
          <WeatherIcon
            iconCode={weatherData.icon}
            className="size-full max-w-30 lg:max-w-40"
          />
        </div>
        <div className="text-muted-foreground text-sm flex lg:flex-col items-center lg:items-end justify-evenly -ms-4 scale-85 gap-2 sm:gap-4">
          <PanelDataItem
            icon={ChevronDown}
            label="Najmniej"
            value={weatherData.temperature.min}
            append="°C"
          />
          <PanelDataItem
            icon={ChevronUp}
            label="Najwięcej"
            value={weatherData.temperature.max}
            append="°C"
          />
          <PanelDataItem
            icon={Sunrise}
            label="Wschód"
            value={getTime(weatherData.sunrise)}
          />
          <PanelDataItem
            icon={Sunset}
            label="Zachód"
            value={getTime(weatherData.sunset)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
