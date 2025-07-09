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
  bgColorFrom: string;
}

export function getWeatherProperties(code: string): WeatherProperties {
  switch (code) {
    case '01d':
      return { icon: Sun, bgColorFrom: 'from-yellow-200' };
    case '01n':
      return { icon: Moon, bgColorFrom: 'from-indigo-700' };
    case '02d':
      return { icon: CloudSun, bgColorFrom: 'from-blue-200' };
    case '02n':
      return { icon: CloudMoon, bgColorFrom: 'from-slate-700' };
    case '03d':
    case '03n':
      return { icon: Cloud, bgColorFrom: code === '03d' ? 'from-gray-200' : 'from-gray-500' };
    case '04d':
    case '04n':
      return { icon: Cloudy, bgColorFrom: code === '04d' ? 'from-gray-300' : 'from-gray-600' };
    case '09d':
    case '09n':
      return { icon: CloudDrizzle, bgColorFrom: code === '09d' ? 'from-blue-200' : 'from-blue-400' };
    case '10d':
    case '10n':
      return {
        icon: code === '10d' ? CloudSunRain : CloudMoonRain,
        bgColorFrom: code === '10d' ? 'from-blue-200' : 'from-blue-500',
      };
    case '11d':
    case '11n':
      return { icon: CloudLightning, bgColorFrom: code === '11d' ? 'from-purple-200' : 'from-purple-600' };
    case '13d':
    case '13n':
      return { icon: Snowflake, bgColorFrom: code === '13d' ? 'from-blue-100' : 'from-blue-300' };
    case '50d':
    case '50n':
      return { icon: CloudFog, bgColorFrom: code === '50d' ? 'from-slate-100' : 'from-slate-400' };
    default:
      return { icon: Sun, bgColorFrom: 'from-yellow-200' }; // fallback to sun
  }
}
