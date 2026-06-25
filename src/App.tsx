import React, { useState } from 'react';
import type { WeatherData, WeatherState } from './types/weather';
import { SearchBar } from './components/SearchBar';
import { WeatherDisplay } from './components/WeatherDisplay';
import './App.css';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState<WeatherState>({
    data: null,
    loading: false,
    error: null,
  });
  

  const fetchWeather = async (city: string) => {
    // 1. Loading starten
    setWeather({ data: null, loading: true, error: null });

    try {
      // 2. API aufrufen
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=de`
      );

      // 3. Error checken
      if (!response.ok) {
        throw new Error('Stadt nicht gefunden');
      }

      // 4. Daten parsen
      const data: WeatherData = await response.json();

      // 5. State aktualisieren
      setWeather({ data, loading: false, error: null });
    } catch (error) {
      // 6. Error handling
      setWeather({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : 'Fehler beim Abrufen',
      });
    }
  };

  return (
    <div className="app">
      <h1>🌤️ Wetter-App</h1>
      
      <SearchBar 
        onSearch={fetchWeather}
        loading={weather.loading}
      />

      <WeatherDisplay 
        data={weather.data}
        error={weather.error}
      />
    </div>
  );
}


export default App;