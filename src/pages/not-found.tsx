import { Link } from 'react-router-dom';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type NotFoundPageProps = HTMLAttributes<HTMLDivElement>;
export const NotFoundPage = ({className, ...props}: NotFoundPageProps) => {
  return (
    <div className={cn('flex-center flex-col', className)} {...props}>
      <h1 className="text-9xl">404</h1>
      <h3>Nie znaleziono pogody dla wybranej lokalizacji.</h3>
      <h5>Aplikacja używa języka polskiego. Spróbuj wprowadzić nazwę ponownie. </h5>
      <p className="py-6">lub</p>
      <Button asChild>
        <Link to="/">Wróć do strony głównej</Link>
      </Button>
    </div>
  );
};
