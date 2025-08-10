export interface ICountry {
  name: {
    common: string;
    official?: string;
  };
  flags?: {
    svg?: string;
    png?: string;
  };
  region?: string;
  subregion?: string;
  population?: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol?: string }>;
  timezones?: string[];
  capital?: string[];
  maps?: {
    googleMaps?: string;
  };
}

export interface ICountryCard {
  name: {
    common: string;
  };
  flags?: {
    svg?: string;
    png?: string;
  };
  region?: string;
  population?: number;
}



