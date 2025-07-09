import { type ReactNode } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import z from 'zod';
import { useAppDispatch } from '@/hooks/redux';
import { resetWeather } from '@/store/weather';

export default function SearchBar(): ReactNode {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm({
    defaultValues: {
      searchValue: '',
    },
    resolver: zodResolver(
      z.object({
        searchValue: z.string().min(1, 'Wprowadź nazwę miasta lub kraju'),
      }),
    ),
  });

  const onSubmit = form.handleSubmit((data) => {
    // clear previous weather data
    dispatch(resetWeather());
    const encodedSearch = encodeURIComponent(data.searchValue.trim());
    // navigate to the search page with encoded search value
    navigate(`/${encodedSearch}`);
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={onSubmit}
        className="sticky top-0 z-20 w-full backdrop-blur flex-center gap-2 py-4"
      >
        <FormField
          control={form.control}
          name="searchValue"
          render={({ field, fieldState }) => (
            <FormItem className="max-w-md grow">
              <FormLabel>Sprawdź pogodę</FormLabel>
              <FormControl>
                <Input
                  placeholder="Miasto lub kraj"
                  className="bg-card"
                  {...field}
                />
              </FormControl>
              {fieldState.error ? (
                <FormMessage />
              ) : (
                <FormDescription>
                  Wprowadź nazwę miasta lub kraju, aby sprawdzić pogodę
                </FormDescription>
              )}
            </FormItem>
          )}
        />
        <Button type="submit" size="icon">
          <SearchIcon />
        </Button>
      </form>
    </FormProvider>
  );
}
