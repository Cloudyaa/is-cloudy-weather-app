import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherData } from '@/lib/weather-fetch';

/**
 * Fetch weather data for comparison purposes.
 */
export const fetchComparisonWeather = createAsyncThunk(
  'comparison/fetchComparisonWeather',
  async (city: string) => {
    const data = await fetchWeatherData(city);
    return { city, data };
  },
);
