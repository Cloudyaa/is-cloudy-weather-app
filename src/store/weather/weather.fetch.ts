import { createAsyncThunk } from '@reduxjs/toolkit';
import type { WeatherData } from '@/types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

/**
 * Fetch current weather data for specific city
 */
export const fetchCurrentWeather = createAsyncThunk(
  'weather/fetchCurrentWeather',
  async (city: string) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}&lang=pl`,
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch weather data for ${city}`);
    }

    const data = await res.json();
    return {
      city: data.name,
      country: data.sys.country,
      lat: data.coord.lat,
      lon: data.coord.lon,
      main: data.weather.main,
      description: data.weather.description,
      temperature: data.main.temp,
      feelsLike: data.main.feelsLike,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      visibility: data.visibility,
      pressure: data.main.pressure,
      iconUrl: `https://openweathermap.org/img/wn/${data.main.icon}.png`,
    } as WeatherData;
  },
);
