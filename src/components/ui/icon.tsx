import { type ElementType, type ReactNode } from 'react';

import { cn } from '@/lib/utils';
import type { LucideProps } from 'lucide-react';

export type IconComponent = ElementType;

interface IconProps extends LucideProps {
  icon: IconComponent;
}

function Icon({ icon, className, ...props }: IconProps): ReactNode {
  const IconComponent = icon;

  return <IconComponent className={cn('inline-block', className)} {...props} />;
}

export default Icon;
