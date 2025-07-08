import { type ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useParams } from 'react-router-dom';
import { fetchCurrentWeather } from '@/store/weather';
import { FullScreenLoader } from '@/components/ui/loader';
import { NotFoundPage } from '@/pages/not-found';
import { AdditionalDataPanel } from '@/components/weather/addtional';
import { BasicDataPanel } from '@/components/weather/basic';

export function CurrentWeather(): ReactNode {
  const dispatch = useAppDispatch();
  const { city } = useParams<{ city: string }>();

  const { currentWeather, isLoading, error } = useAppSelector(
    (state) => state.weather,
  );

  useEffect(() => {
    if (city) {
      dispatch(fetchCurrentWeather(city));
    }
  }, [city, dispatch]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (error) {
    return <NotFoundPage />;
  }

  if (!currentWeather) {
    return null;
  }

  return (
    <div className="space-y-2 max-w-2xl">
      <h1 className="py-4 place-self-start lg:col-span-2">{currentWeather?.city}</h1>
      <BasicDataPanel weatherData={currentWeather} />
      <AdditionalDataPanel weatherData={currentWeather} />
    </div>
  );
}
