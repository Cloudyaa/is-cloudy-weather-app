import { type ReactNode } from 'react';
import { CurrentWeather } from '@/components/weather/current';
import { cn } from '@/lib/utils';
import { getWeatherProperties } from '@/lib/weather-props';
import { useAppSelector } from '@/hooks/redux';
import { ForecastWeather } from '@/components/weather/forecast';

export function CityPage(): ReactNode {
  const { currentWeather } = useAppSelector((state) => state.weather);
  return (
    <div
      className={cn(
        'size-full flex-center flex-col p-4',
        'bg-linear-to-t to-background from-30%',
        `from-${getWeatherProperties(currentWeather?.icon ?? '10d').color}`,
      )}
    >
      <div className="max-w-2xl lg:max-w-5xl lg:items-end gap-2 justify-center grid grid-cols-1 lg:grid-cols-[70%_30%] p-4 w-full">
        <CurrentWeather />
        <ForecastWeather lat={currentWeather?.lat} lon={currentWeather?.lon} />
      </div>
    </div>
  );
}
