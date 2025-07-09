import { createSlice } from '@reduxjs/toolkit';
import type { WeatherData } from '@/types/weather';
import { fetchComparisonWeather } from '@/store/comparison/comparison.fetch';

interface ComparisonWeatherState {
  comparisonCityData: Record<string, WeatherData | null>;
  isLoading: Record<string, boolean>;
  error: Record<string, string | null>;
}

const initialState: ComparisonWeatherState = {
  comparisonCityData: {},
  isLoading: {},
  error: {},
};

/**
 * Comparison slice for comparing weather in 4 biggest Polish cities to chosen one
 */
const comparisonSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // loading
      .addCase(fetchComparisonWeather.pending, (state, action) => {
        const city = action.meta.arg;
        state.isLoading[city] = true;
        state.error[city] = null;
      })
      // success
      .addCase(fetchComparisonWeather.fulfilled, (state, action) => {
        const { city, data } = action.payload;
        state.comparisonCityData[city] = data;
        state.isLoading[city] = false;
      })
      // error
      .addCase(fetchComparisonWeather.rejected, (state, action) => {
        const city = action.meta.arg;
        state.isLoading[city] = false;
        state.error[city] = action.error.message ?? 'Failed to fetch data';
      })
  },
});

export default comparisonSlice.reducer;
