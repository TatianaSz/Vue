export interface rootState {
  version: string;
}

export interface widgetState {
  townWeather: {
    coord: {
      lon: number;
      lat: number;
    };
    weather: Weather[];
    base: string;
    main: MainInfo;
    visibility: number;
    wind: WindInfo;
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      message: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: PlaceName;
    cod: number;
  };
  errors: Errors;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface MainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface WindInfo {
  speed: number;
  deg: number;
}
export type PlaceName = string;
export interface Errors {
  [key: string]: string;
}
