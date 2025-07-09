import { type ReactNode } from 'react';
import { CurrentWeather } from '@/components/weather/current';
import { cn } from '@/lib/utils';
import { ForecastWeather } from '@/components/weather/forecast';

export function CityPage(): ReactNode {
  return (
    <div className={cn('size-full p-4')}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl lg:items-end gap-2 justify-center grid grid-cols-1 lg:grid-cols-[70%_30%] p-4 w-full">
        <CurrentWeather />
        <ForecastWeather />
      </div>
    </div>
  );
}
