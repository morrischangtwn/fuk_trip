import { WeatherData } from "../types";

// Open-Meteo API (No Key Required)
export const fetchFukuokaWeather = async (): Promise<WeatherData | null> => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=33.5902&longitude=130.4017&current_weather=true&timezone=Asia%2FTokyo"
    );
    const data = await response.json();
    
    if (data && data.current_weather) {
      return {
        temp: data.current_weather.temperature,
        iconCode: data.current_weather.weathercode,
        condition: getWeatherCondition(data.current_weather.weathercode)
      };
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch weather", error);
    return null;
  }
};

const getWeatherCondition = (code: number): string => {
  if (code === 0) return "Sunny";
  if (code >= 1 && code <= 3) return "Cloudy";
  if (code >= 45 && code <= 48) return "Fog";
  if (code >= 51 && code <= 67) return "Rain";
  if (code >= 71 && code <= 77) return "Snow";
  if (code >= 80 && code <= 82) return "Showers";
  if (code >= 95) return "Thunderstorm";
  return "Unknown";
};