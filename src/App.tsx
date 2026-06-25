import React, { useState } from 'react';
import type { WeatherData, WeatherState } from './types/weather';
import { SearchBar } from './components/SearchBar';
import { WeatherDisplay } from './components/WeatherDisplay';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import './App.css';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function AppContent() {
  const { language, t, toggleLanguage } = useLanguage();
  const [weather, setWeather] = useState<WeatherState>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchWeather = async (city: string) => {
    setWeather({ data: null, loading: true, error: null });

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=${language}`
      );

      if (!response.ok) {
        throw new Error(t.cityNotFound);
      }

      const data: WeatherData = await response.json();
      setWeather({ data, loading: false, error: null });
    } catch (error) {
      setWeather({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : t.fetchError,
      });
    }
  };

  return (
    <div className="app">
      <button className="lang-toggle" onClick={toggleLanguage} aria-label="Switch language">
        {language === 'de' ? '🇺🇸 EN' : '🇩🇪 DE'}
      </button>

      <h1>{t.appTitle}</h1>

      <SearchBar onSearch={fetchWeather} loading={weather.loading} />

      <WeatherDisplay data={weather.data} error={weather.error} />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
