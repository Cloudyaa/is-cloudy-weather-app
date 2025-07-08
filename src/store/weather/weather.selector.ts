import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

const state = (state: RootState) => state.weather;

export const selectCurrentTemp = createSelector(
  [state], ({currentWeather}) => currentWeather?.temperature.main ?? 0,
);
