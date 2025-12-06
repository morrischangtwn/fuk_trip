import React, { useEffect, useState } from 'react';
import { Sun, Cloud, CloudRain, CloudLightning, Snowflake } from 'lucide-react';
import { fetchFukuokaWeather } from '../services/weatherService';
import { WeatherData } from '../types';

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchFukuokaWeather().then(setWeather);
  }, []);

  if (!weather) return null;

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'Sunny': return <Sun className="text-japan-gold" size={20} />;
      case 'Rain': 
      case 'Showers': return <CloudRain className="text-japan-indigo" size={20} />;
      case 'Snow': return <Snowflake className="text-stone-400" size={20} />;
      case 'Thunderstorm': return <CloudLightning className="text-yellow-600" size={20} />;
      default: return <Cloud className="text-stone-400" size={20} />;
    }
  };

  return (
    <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-stone-100">
      {getWeatherIcon(weather.condition)}
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold text-stone-700">{weather.temp}°C</span>
        <span className="text-[10px] text-stone-500 font-medium">Fukuoka</span>
      </div>
    </div>
  );
};

export default WeatherWidget;