import Icon, { type IconComponent } from '@/components/ui/icon';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InfoPanelItemProps {
  icon: IconComponent;
  label: string;
  value: ReactNode;
  append?: string;
  className?: string;
}

export function PanelDataItem({ icon, label, value, append, className,  }: InfoPanelItemProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <Icon icon={icon} className="size-6" strokeWidth={2.5} />
      <div>
        <p className="text-xs/3 text-muted-foreground uppercase">{label}</p>
        <p className="text-xl/4 font-semibold">
          <span>{value}</span>
          {append ? <span className="text-sm">{append}</span> : null}
        </p>
      </div>
    </div>
  );
}
