import { type ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useParams } from 'react-router-dom';
import { fetchCurrentWeather } from '@/store/weather';
import { FullScreenLoader } from '@/components/ui/loader';
import { NotFoundPage } from '@/pages/not-found';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { WeatherIcon } from '@/components/weather/icon';
import { getDateTimeLocalized } from '@/lib/utils';
import { CircleFlag } from 'react-circle-flags';

export function CurrentWeatherPanel(): ReactNode {
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
    <Card className="bg-card/50 backdrop-blur">
      <CardHeader>
        <CardDescription>
          {getDateTimeLocalized(new Date().toISOString())}
        </CardDescription>
        <CardTitle className="text-xl flex items-center gap-2 flex-wrap">
          <CircleFlag
            countryCode={currentWeather.country.toLowerCase()}
            className="size-5"
          />
          <p>{currentWeather.city}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 justify-between items-center divide-x-2 divide-border *:px-4">
        <p>
          <span className="font-black text-8xl lg:text-9xl">
            {currentWeather?.temperature.toFixed(0)}
          </span>
          <span className="font-semibold text-xl align-top">°C</span>
        </p>
        <WeatherIcon iconCode={currentWeather.icon} className="size-full" />
      </CardContent>
      <CardFooter className="capitalize">
        {currentWeather.description}
      </CardFooter>
    </Card>
  );
}
