import { type ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { CenteredLoader } from '@/components/ui/loader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { selectComparisonWeather } from '@/store/comparison/comparison.selector';
import { fetchComparisonWeather } from '@/store/comparison/comparison.fetch';
import { useSelector } from 'react-redux';
import {
  selectIsWeatherError,
  weatherState,
} from '@/store/weather/weather.selector';
import { TemperatureDifference } from '@/components/weather/comparison/temperature-difference';
import { HumidityDifference } from '@/components/weather/comparison/humidity-difference';
import { TemperatureDisplay } from '@/components/weather/temperature-display';

const COMPARISON_CITIES = ['Warszawa', 'Kraków', 'Wrocław', 'Gdańsk', 'Poznań'];

export function WeatherComparison(): ReactNode {
  const isWeatherError = useSelector(selectIsWeatherError);
  const { currentWeather } = useAppSelector(weatherState);

  // filter out the current city from the comparison cities
  const filteredCities = COMPARISON_CITIES.filter(
    (city) => city.toLowerCase() !== currentWeather?.city.toLowerCase(),
  ).slice(0, 4);

  return !isWeatherError ? (
    <div className="w-full lg:col-span-2 space-y-2">
      <h5>Inne miasta w Polsce</h5>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {filteredCities
          .map((city) => <ComparisonItem key={city} city={city} />)
          .slice(0, 4)}
      </div>
    </div>
  ) : null;
}

interface ComparisonItemProps {
  city: string;
}

function ComparisonItem({ city }: ComparisonItemProps): ReactNode {
  const dispatch = useAppDispatch();
  const { currentWeather } = useAppSelector(weatherState);
  const { comparisonCityData, isLoading, error } = useSelector(
    selectComparisonWeather(city),
  );

  useEffect(() => {
    if (!comparisonCityData && !isLoading && !error) {
      dispatch(fetchComparisonWeather(city));
    }
  }, [city, comparisonCityData, isLoading, error, dispatch]);

  if (isLoading) {
    return <CenteredLoader />;
  }

  if (error || !currentWeather || !comparisonCityData) {
    return null;
  }

  return (
    <Card className="bg-card/50 backdrop-blur w-full py-4 gap-2">
      <CardHeader className="px-4 ">
        <CardTitle>{comparisonCityData.city}</CardTitle>
        <CardDescription className="capitalize font-semibold text-xs">
          {comparisonCityData.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 space-y-2">
        <TemperatureDisplay
          temperature={comparisonCityData.temperature.main}
          iconCode={comparisonCityData.icon}
          classNames={{
            icon: 'max-w-16',
          }}
        />
        <TemperatureDifference
          compareValue={comparisonCityData.temperature.main}
        />
        <HumidityDifference compareValue={comparisonCityData.humidity} />
      </CardContent>
    </Card>
  );
}
