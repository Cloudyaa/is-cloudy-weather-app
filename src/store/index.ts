import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from '@/store/weather/weather.slice';
import forecastSlice from '@/store/forecast/forecast.slice';
import comparisonSlice from '@/store/comparison/comparison.slice';

export const createStore = (preloadedState?: unknown) => configureStore({
  reducer: {
    weather: weatherSlice,
    forecast: forecastSlice,
    comparison: comparisonSlice,
  },
  preloadedState
});

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
