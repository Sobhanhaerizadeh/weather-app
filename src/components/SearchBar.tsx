import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading }) => {
  const { t } = useLanguage();
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder={t.searchPlaceholder}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? t.searching : t.searchButton}
      </button>
    </form>
  );
};
