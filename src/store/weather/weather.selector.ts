import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

const state = (state: RootState) => state.weather;

export const selectCurrentTemp = createSelector(
  [state], ({currentWeather}) => currentWeather?.temperature.main ?? 0,
);

export const selectCoordinates = createSelector(
  [state], ({currentWeather}) => currentWeather ? ({
    lat: currentWeather?.lat,
    lon: currentWeather?.lon,
  }) : undefined,
);

export const selectIsWeatherError = createSelector(
  [state], ({ error}) => !!error
)
