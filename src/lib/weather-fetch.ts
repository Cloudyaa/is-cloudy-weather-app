import type { WeatherData } from '@/types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function fetchWeatherData(searchValue: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}&lang=pl`,
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch weather data for ${searchValue}`);
  }

  const data = await res.json();
  return {
    city: data.name,
    country: data.sys.country,
    lat: data.coord.lat,
    lon: data.coord.lon,
    main: data.weather[0].main,
    description: data.weather[0].description,
    temperature: {
      main: data.main.temp.toFixed(0),
      min: data.main.temp_min.toFixed(0),
      max: data.main.temp_max.toFixed(0),
      feelsLike: data.main.feels_like.toFixed(0),
    },
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    clouds: data.clouds.all,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    visibility: data.visibility,
    pressure: data.main.pressure,
    icon: data.weather[0].icon,
  } as WeatherData;
}
