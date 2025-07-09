export interface WeatherData {
  city: string;
  country: string;
  lat: number;
  lon: number;
  main: string;
  description: string;
  temperature: {
    main: number;
    min: number;
    max: number;
    feelsLike: number;
  };
  clouds: number;
  sunrise: number;
  sunset: number;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  icon: string;
}

export interface ForecastData {
  timestamp: number;
  temperature: {
    day: number;
    min: number;
    max: number;
  };
  main: string;
  description: string;
  icon: string;
}
