import React, {useState} from 'react';

interface SearchBarProps{
    onSearch: (city: string) => void
    loading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading  }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        if (city.trim())
        {
            onSearch(city);
            setCity('');
        }
    };

    return(
        <form onSubmit={handleSubmit} className="search-bar">
            <input type="text" placeholder="Stadt eingeben ..." value={city} onChange={(e) => setCity(e.target.value)} disabled={loading} />
            <button type="submit" disabled={loading}>
                {loading ? 'Suche ...' : 'Suchen'}
            </button>
        </form>
    )
}

