import type { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { LoaderIcon, type LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

function Loader({ className, ...props }: LucideProps): ReactNode {
  return (
    <LoaderIcon
      className={cn('text-primary motion-safe:animate-spin', className)}
      {...props}
    />
  );
}

function CenteredLoader({
  className,
  containerClassName,
  children,
  withDescription,
  ...props
}: PropsWithChildren<
  LucideProps & {
    containerClassName?: string;
    withDescription?: boolean;
  }
>): ReactNode {
  return (
    <div
      className={cn(
        'flex size-full flex-col items-center justify-center',
        containerClassName,
      )}
    >
      <LoaderIcon
        className={cn('text-primary motion-safe:animate-spin', className)}
        {...props}
      />
      {(children ?? withDescription) ? (
        <span className="text-muted-foreground pt-2 text-sm">
          Trwa ładowanie...
        </span>
      ) : null}
    </div>
  );
}

function FullScreenLoader({
  className,
  containerClassName,
  withDescription = true,
  ...props
}: ComponentProps<typeof CenteredLoader>): ReactNode {
  return (
    <CenteredLoader
      containerClassName={cn('h-[calc(100dvh-40px)] backdrop-blur-xs', containerClassName)}
      className={cn('size-8', className)}
      withDescription={withDescription}
      {...props}
    />
  );
}

export { FullScreenLoader, CenteredLoader, Loader };
