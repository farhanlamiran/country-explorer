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


export interface NavigationLink {
  name: string;
  href: string;
}

/**
 * Social media link interface
 */
export interface SocialMediaLink {
  platform: string;
  icon: string;
  link: string;
}

/**
 * Service/feature card interface
 */
export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

/**
 * Testimonial interface
 */
export interface Testimonial {
  name: string;
  text: string;
}

/**
 * Company information interface
 */
export interface Company {
  name: string;
  address: string;
}

/**
 * Hero section configuration interface
 */
export interface HeroSection {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  layout: 'leftText-rightImage' | 'centered';
  image?: string;
}

/**
 * Main site data interface
 */
export interface SiteData {
  company: Company;
  navbar: {
    brand: string;
    navLinks: NavigationLink[];
  };
  sections: {
    hero: HeroSection;
    whatWeOffer: {
      title: string;
      cards: ServiceCard[];
    };
    ourMission: {
      title: string;
      content: string;
    };
    testimonials: {
      title: string;
      quotes: Testimonial[];
    };
  };
  footer: {
    companyName: string;
    address: string;
    pages: NavigationLink[];
    services: NavigationLink[];
    socialMedia: SocialMediaLink[];
  };
}
