import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherData } from '@/lib/weather-fetch';

/**
 * Fetch current weather data for specific city
 */
export const fetchCurrentWeather = createAsyncThunk(
  'weather/fetchCurrentWeather',
  async (city: string) => await fetchWeatherData(city),
);
