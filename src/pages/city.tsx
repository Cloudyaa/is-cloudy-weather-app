import { type ReactNode } from 'react';
import { CurrentWeather } from '@/components/weather/panel';
import { cn } from '@/lib/utils';
import { getWeatherProperties } from '@/lib/weather-props';
import { useAppSelector } from '@/hooks/redux';

export function CityPage(): ReactNode {
  const { currentWeather } = useAppSelector((state) => state.weather);
  return (
    <div
      className={cn(
        'h-full flex-center flex-col p-4',
        'bg-linear-to-t to-background from-30%',
         `from-${getWeatherProperties(currentWeather?.icon ?? '10d').color}`,
      )}
    >
      <CurrentWeather />
    </div>
  );
}
