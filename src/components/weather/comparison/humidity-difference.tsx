import type { ComponentProps, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentHumidity } from '@/store/weather/weather.selector';
import { WeatherDifferenceItem } from '@/components/weather/comparison/difference';

export function HumidityDifference({
  compareValue,
}: Pick<
  ComponentProps<typeof WeatherDifferenceItem>,
  'compareValue'
>): ReactNode {
  const current = useSelector(selectCurrentHumidity);
  return (
    <WeatherDifferenceItem
      currentValue={current}
      compareValue={compareValue}
      label={{
        more: 'Wilgotność większa',
        less: 'Wilgotność mniejsza',
      }}
      append="%"
    />
  );
}
