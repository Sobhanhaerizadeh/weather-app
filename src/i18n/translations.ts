export type Language = 'en' | 'de';

export const translations = {
  en: {
    appTitle: '🌤️ Weather App',
    searchPlaceholder: 'Enter city...',
    searchButton: 'Search',
    searching: 'Searching...',
    noData: 'Search for a city!',
    humidity: 'Humidity',
    wind: 'Wind',
    cityNotFound: 'City not found',
    fetchError: 'Error fetching weather',
  },
  de: {
    appTitle: '🌤️ Wetter-App',
    searchPlaceholder: 'Stadt eingeben ...',
    searchButton: 'Suchen',
    searching: 'Suche ...',
    noData: 'Suche eine Stadt!',
    humidity: 'Luftfeuchtigkeit',
    wind: 'Wind',
    cityNotFound: 'Stadt nicht gefunden',
    fetchError: 'Fehler beim Abrufen',
  },
} as const;

export type Translations = typeof translations['en'];
