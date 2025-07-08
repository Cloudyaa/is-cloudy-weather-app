import { type ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { FullScreenLoader } from '@/components/ui/loader';
import { NotFoundPage } from '@/pages/not-found';
import { fetchForecastWeather } from '@/store/forecast';
import type { ForecastData } from '@/types/weather';
import { Card, CardContent } from '@/components/ui/card';
import { getWeekDayName } from '@/lib/utils';
import { WeatherIcon } from '@/components/weather/icon';
import { useSelector } from 'react-redux';
import { selectCurrentTemp } from '@/store/weather/weather.selector';

interface ForecastWeatherProps {
  lat?: number;
  lon?: number;
}

export function ForecastWeather({ lat, lon }: ForecastWeatherProps): ReactNode {
  const dispatch = useAppDispatch();

  const { forecast, isLoading, error } = useAppSelector(
    (state) => state.forecast,
  );

  useEffect(() => {
    if (lat && lon) {
      dispatch(fetchForecastWeather({ lat, lon }));
    }
  }, [lat, lon, dispatch]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (error) {
    return <NotFoundPage />;
  }

  if (!forecast) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 lg:grid-cols-2 gap-2">
      {forecast.map((dayForecast) => (
        <ForecastDayItem key={dayForecast.timestamp} forecast={dayForecast} />
      ))}
    </div>
  );
}

interface ForecastDayItemProps {
  forecast: ForecastData;
}

function ForecastDayItem({ forecast }: ForecastDayItemProps) {
  const currentTemp = useSelector(selectCurrentTemp);

  const tempDifference = forecast.temperature.day - currentTemp;

  return (
    <Card className="bg-card/50 backdrop-blur w-full p-2 text-center gap-0 justify-center">
      <CardContent className="px-0 space-y-1">
        <p className="uppercase">{getWeekDayName(forecast.timestamp)}</p>
        <WeatherIcon iconCode={forecast.icon} />
        <p className="font-semibold">{forecast.temperature.day}°C</p>
        {tempDifference !== 0 ? (
          <p className="text-xs text-muted-foreground">
            <span>{tempDifference > 0 ? 'Cieplej' : 'Zimniej'}</span>
            <span> o {Math.abs(tempDifference)}°C</span>
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
