import React from 'react';
import type {WeatherData} from '../types/weather';

interface WeatherDisplayProps {
    data: WeatherData | null;
    error: string | null;
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data, error }) => {

    if(error)
    {
        return <div className="error">{error}</div>;
    }

    if (!data)
    {
        return <div className="no-data"> Suche eine Stadt! </div>;
    }

    return (
        <div className="weather-display">
            <h2> {data.name}, {data.sys.country} </h2>
            <p className="temperature">{Math.round(data.main.temp)}°C</p>
            <p className="description">{data.weather[0].description}</p>
            <p className="humidity"> 💧 Luftfeuchtigkeit: {data.main.humidity}%</p>
            <p className="wind">💨 Wind: {data.wind.speed} m/s</p>
        </div>
    );
};