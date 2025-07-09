import type { ReactNode } from 'react';
import { WeatherIcon } from '@/components/weather/icon';
import { cn } from '@/lib/utils';

interface TemperatureDisplayProps {
  temperature: number;
  iconCode: string;
  classNames?: {
    container?: string;
    temperature?: string;
    icon?: string;
    append?: string;
  };
}

export function TemperatureDisplay({
  temperature,
  iconCode,
  classNames,
}: TemperatureDisplayProps): ReactNode {
  return (
    <div className={cn('flex items-center divide-x', classNames?.container)}>
      <p className="px-2 lg:px-4">
        <span className={cn('font-black text-3xl lg:text-5xl', classNames?.temperature)}>
          {temperature}
        </span>
        <span
          className={cn('font-semibold text-xl align-top', classNames?.append)}
        >
          °C
        </span>
      </p>
      <WeatherIcon
        iconCode={iconCode}
        className={cn('ms-4 size-full', classNames?.icon)}
      />
    </div>
  );
}
