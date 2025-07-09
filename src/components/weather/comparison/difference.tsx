import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface WeatherDifferenceItemProps
  extends HTMLAttributes<HTMLParagraphElement> {
  currentValue: number;
  compareValue: number;
  label: {
    less: string;
    more: string;
  };
  append?: string;
}

export function WeatherDifferenceItem({
  currentValue,
  compareValue,
  append,
  label,
  className,
  ...props
}: WeatherDifferenceItemProps): ReactNode {
  const difference = compareValue - currentValue;

  return difference !== 0 ? (
    <p className={cn('text-xs text-muted-foreground', className)} {...props}>
      <span>{difference > 0 ? label.more : label.less}</span>
      <span>
        {' '}
        o {Math.abs(difference)}
        {append}
      </span>
    </p>
  ) : null;
}
