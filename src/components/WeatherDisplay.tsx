import React from 'react';
import type { WeatherData } from '../types/weather';
import { useLanguage } from '../i18n/LanguageContext';

interface WeatherDisplayProps {
  data: WeatherData | null;
  error: string | null;
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data, error }) => {
  const { t } = useLanguage();

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!data) {
    return <div className="no-data">{t.noData}</div>;
  }

  return (
    <div className="weather-display">
      <h2>{data.name}, {data.sys.country}</h2>
      <p className="temperature">{Math.round(data.main.temp)}°C</p>
      <p className="description">{data.weather[0].description}</p>
      <p className="humidity">💧 {t.humidity}: {data.main.humidity}%</p>
      <p className="wind">💨 {t.wind}: {data.wind.speed} m/s</p>
    </div>
  );
};
