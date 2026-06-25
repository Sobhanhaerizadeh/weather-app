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

export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string | null; // Error Message 
}
