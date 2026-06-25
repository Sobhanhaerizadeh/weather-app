import React from 'react';

interface WeatherIconProps {
  icon: string;  // z.B. "02d"
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ icon }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  
  return <img src={iconUrl} alt="weather icon" className="weather-icon" />;
};