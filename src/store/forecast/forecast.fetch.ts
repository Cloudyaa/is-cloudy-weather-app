import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ForecastData } from '@/types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

/**
 * Fetch forecast weather data for specific city (using coordinates)
 */
export const fetchForecastWeather = createAsyncThunk(
  'forecast/fetchForecastWeather',
  async ({ lat, lon }: { lat: number; lon: number }) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=pl&cnt=6`,
    );
    if (!res.ok) {
      throw new Error(
        `Failed to fetch forecast for coordinates: ${lat}, ${lon}`,
      );
    }

    const data = await res.json();

    //@ts-expect-error -- day data is "any" type as this is external API data, and we cannot be sure about its type
    return data.list.map((day) => ({
      timestamp: day.dt,
      main: day.weather[0].main,
      description: day.weather[0].description,
      temperature: {
        day: day.temp.day.toFixed(0),
        min: day.temp.min.toFixed(0),
        max: day.temp.max.toFixed(0),
      },
      icon: day.weather[0].icon,
    })) as ForecastData[];
  },
);
