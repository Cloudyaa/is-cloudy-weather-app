import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';
import { getWeatherProperties } from '@/lib/weather-props';

interface WeatherIconProps extends Omit<ComponentProps<typeof Icon>, 'icon'> {
  iconCode: string;
}

export function WeatherIcon({
  iconCode,
  className,
  ...props
}: WeatherIconProps): ReactNode {
  const IconComponent = getWeatherProperties(iconCode).icon;
  return (
    <Icon
      className={cn('size-10', className)}
      {...props}
      icon={IconComponent}
    />
  );
}
