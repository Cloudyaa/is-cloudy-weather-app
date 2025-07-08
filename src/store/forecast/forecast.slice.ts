import { createSlice } from '@reduxjs/toolkit';
import type { ForecastData } from '@/types/weather';
import { fetchForecastWeather } from './forecast.fetch';

interface ForecastState {
  forecast: ForecastData[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ForecastState = {
  forecast: [],
  isLoading: false,
  error: null,
};

/**
 * Forecast slice for managing weather forecast data.
 */
const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setWeather(state, action) {
      state.forecast = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecastWeather.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchForecastWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.forecast = action.payload;
      })
      .addCase(fetchForecastWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Failed to fetch forecast data';
      });
  },
});

export default forecastSlice.reducer;
