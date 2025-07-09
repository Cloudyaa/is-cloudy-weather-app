import { type ReactNode } from 'react';
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
  FormMessage,
} from '../ui/form';

export default function SearchBar(): ReactNode {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      searchValue: '',
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    const encodedSearch = encodeURIComponent(data.searchValue.trim());
    navigate(`/${encodedSearch}`);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="w-full max-w-md flex gap-2 py-4 mt-4">
        <FormField
          control={form.control}
          name="searchValue"
          render={({ field }) => (
            <FormItem className="grow">
              <FormControl>
                <Input placeholder="Miasto lub kraj" {...field} />
              </FormControl>
              <FormDescription className="text-xs">
                Wprowadź nazwę miasta lub kraju, aby sprawdzić pogodę
              </FormDescription>
              <FormMessage />
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
