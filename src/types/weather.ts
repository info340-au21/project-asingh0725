export interface WeatherLocationConfig {
  name: string;
  zip: string;
  country: string;
}

export interface WeatherApiDay {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}
