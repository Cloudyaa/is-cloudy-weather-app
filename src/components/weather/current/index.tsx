import { type ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useParams } from 'react-router-dom';
import { fetchCurrentWeather } from '@/store/weather';
import { FullScreenLoader } from '@/components/ui/loader';
import { NotFoundPage } from '@/pages/not-found';
import { AdditionalDataPanel } from '@/components/weather/current/addtional';
import { BasicDataPanel } from '@/components/weather/current/basic';
import { cn } from '@/lib/utils';
import { getWeatherProperties } from '@/lib/weather-props';
import { weatherState } from '@/store/weather/weather.selector';

export function CurrentWeather(): ReactNode {
  const dispatch = useAppDispatch();
  const { city } = useParams<{ city: string }>();

  const { currentWeather, isLoading, error } = useAppSelector(weatherState);

  // fetch weather data if it is not already loaded
  useEffect(() => {
    if (city && !currentWeather) {
      dispatch(fetchCurrentWeather(city));
    }
  }, [city, currentWeather, dispatch]);

  // apply background class based on weather
  useEffect(() => {
    const bgClass = cn(
      'bg-linear-to-t',
      `${getWeatherProperties(currentWeather?.icon ?? '01d').bgColorFrom} from-30%`,
      'to-background',
    );

    document.body.className = '';
    document.body.classList.add(...bgClass.split(' '));

    return () => {
      document.body.className = '';
    };
  }, [currentWeather]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (error) {
    return <NotFoundPage className="col-span-2" />;
  }

  if (!currentWeather) {
    return null;
  }

  return (
    <div className="space-y-2 max-w-2xl">
      <h1 className="py-4 place-self-start lg:col-span-2">
        {currentWeather.city}, {currentWeather.country}
      </h1>
      <BasicDataPanel weatherData={currentWeather} />
      <AdditionalDataPanel weatherData={currentWeather} />
    </div>
  );
}
