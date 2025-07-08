import { createSlice } from '@reduxjs/toolkit';
import type { WeatherData } from '@/types/weather';
import { fetchCurrentWeather } from './weather.fetch';

interface WeatherState {
  currentWeather: WeatherData | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  currentWeather: null,
  isLoading: false,
  error: null,
};

/**
 * Weather slice for managing current weather data state for chosen city.
 */
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action) {
      state.currentWeather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // loading
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // success
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentWeather = action.payload;
      })
      // error
      .addCase(fetchCurrentWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Failed to fetch weather data';
      })
  },
});

export default weatherSlice.reducer;
