export interface WeatherData {
    name: string;
    sys: {
        country: string;
    };
    main:{
        temp: number;
        humidity: number;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
    wind: {
        speed: number;
    }
}

interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string | null; // Error Message 
}
