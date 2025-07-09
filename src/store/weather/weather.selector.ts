import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

export const weatherState = (state: RootState) => state.weather;

export const selectCurrentTemp = createSelector(
  [weatherState], ({currentWeather}) => currentWeather?.temperature.main ?? 0,
);

export const selectCurrentHumidity = createSelector(
  [weatherState], ({currentWeather}) => currentWeather?.humidity ?? 0,
);

export const selectCoordinates = createSelector(
  [weatherState], ({currentWeather}) => currentWeather ? ({
    lat: currentWeather?.lat,
    lon: currentWeather?.lon,
  }) : undefined,
);

export const selectIsWeatherError = createSelector(
  [weatherState], ({ error}) => !!error
)
