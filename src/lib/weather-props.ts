import {
  Sun,
  Moon,
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudSun,
  CloudSunRain,
  Cloudy,
  Snowflake,
  type LucideIcon,
} from 'lucide-react';

export interface WeatherProperties {
  icon: LucideIcon;
  color: string;
}

export function getWeatherProperties(code: string): WeatherProperties {
  switch (code) {
    case '01d':
      return { icon: Sun, color: 'yellow-200' };
    case '01n':
      return { icon: Moon, color: 'slate-700' };
    case '02d':
      return { icon: CloudSun, color: 'blue-200' };
    case '02n':
      return { icon: CloudMoon, color: 'indigo-700' };
    case '03d':
    case '03n':
      return { icon: Cloud, color: code === '03d' ? 'gray-200' : 'gray-500' };
    case '04d':
    case '04n':
      return { icon: Cloudy, color: code === '04d' ? 'gray-300' : 'gray-600' };
    case '09d':
    case '09n':
      return { icon: CloudDrizzle, color: code === '09d' ? 'blue-200' : 'blue-400' };
    case '10d':
    case '10n':
      return {
        icon: code === '10d' ? CloudSunRain : CloudMoonRain,
        color: code === '10d' ? 'blue-200' : 'blue-500',
      };
    case '11d':
    case '11n':
      return { icon: CloudLightning, color: code === '11d' ? 'purple-200' : 'purple-600' };
    case '13d':
    case '13n':
      return { icon: Snowflake, color: code === '13d' ? 'blue-100' : 'blue-300' };
    case '50d':
    case '50n':
      return { icon: CloudFog, color: code === '50d' ? 'slate-100' : 'slate-400' };
    default:
      return { icon: Sun, color: 'yellow-200' }; // fallback to sun
  }
}
