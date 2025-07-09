import type { RootState } from '@/store';
import { createSelector } from '@reduxjs/toolkit';

const state = (state: RootState) => state.comparison;

// Factory selector per city
export const selectComparisonWeather = (city: string) =>
  createSelector([state], (weatherComparison) => ({
    comparisonCityData: weatherComparison.comparisonCityData[city] ?? null,
    isLoading: weatherComparison.isLoading[city] ?? false,
    error: weatherComparison.error[city] ?? null,
  }));
