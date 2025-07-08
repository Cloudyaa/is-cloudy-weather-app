import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDateLocalized = (date: string | null) =>
  date ? format(date, 'PPP', { locale: pl }) : null;

export const getDateTimeLocalized = (date: string | null) =>
  date ? format(date, "PPpp", { locale: pl }) : null;
