import { type ReactNode, useEffect } from 'react';
import { fetchForecastWeather } from '@/store/forecast';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

export function ForecastPanel(): ReactNode {
  const dispatch = useAppDispatch();

  const { currentWeather } = useAppSelector((state) => state.weather);
  const { forecast, isLoading, error } = useAppSelector((state) => state.forecast);

  useEffect(() => {
    if(currentWeather){
      dispatch(fetchForecastWeather({
        lat: currentWeather.lat,
        lon: currentWeather.lon,
      }));
    }
  }, [currentWeather, dispatch]);

  if (isLoading) {
    return <p>Loading foreacst ...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <p>Forecast:</p>
      {isLoading ? 'loading data....' : forecast.map(day => (
        <div key={day.timestamp}>
          <p>stamp:{day.timestamp}</p>
          <p>Day: {new Date(day.timestamp * 1000).toISOString()}</p>
          <p>{day.main}</p>
          <p>Max temp: {day.temperature.max}</p>
        </div>
      ))}
    </>
  );
}
