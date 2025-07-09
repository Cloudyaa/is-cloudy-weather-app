import type { ComponentProps, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentTemp } from '@/store/weather/weather.selector';
import { WeatherDifferenceItem } from '@/components/weather/comparison/difference';

export function TemperatureDifference({
  compareValue,
}: Pick<
  ComponentProps<typeof WeatherDifferenceItem>,
  'compareValue'
>): ReactNode {
  const current = useSelector(selectCurrentTemp);
  return (
    <WeatherDifferenceItem
      currentValue={current}
      compareValue={compareValue}
      label={{
        more: 'Cieplej',
        less: 'Zimniej',
      }}
      append="°C"
    />
  );
}
