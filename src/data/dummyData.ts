import type { NavigationLink, SiteData } from '../types';

/**
 * Main site configuration data
 * Contains all content and structure information for the website
 */
export type INavLink = {
  name: string
  href: string
}

export const NAV_LINKS: INavLink[] = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "About Us", href: "/about" }
]

export interface IHero {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  layout: string;
  image: string;
}

export const HERO: IHero = {
  title: "Documenting the world one country at a time",
  subtitle: "Your first stop before the journey begins",
  buttonText: "Explore Now",
  buttonLink: "/explore",
  layout: "leftText-rightImage",
  image: "/luggage.png"
}


import { faGlobe, faSearch, faPlane } from '@fortawesome/free-solid-svg-icons';

export const FEATURES = [
  {
    icon: faGlobe,
    title: 'Global Snapshots',
    description: 'Key details about every recognized country, always updated'
  },
  {
    icon: faPlane,
    title: 'Plan Your Adventure',
    description: 'Insights that help you prepare or inspire your next trip.'
  },
  {
    icon: faSearch,
    title: 'Discover Cultures',
    description: 'From languages to local currencies, learn what makes each place unique'
  }
];


export interface ITestimonial {
  name: string;
  text: string;
}

export const TESTIMONIALS: ITestimonial[] = [
  {
    name: "Alex J.",
    text: "Atlask & Ink gave me the confidence to explore places I never thought I'd visit!"
  },
  {
    name: "Lina K.",
    text: "Beautifully written, thoughtfully researched, a must for every traveler."
  }
]

export const SERVICES: INavLink[] = [
  { name: "Contact Us", href: "/contact" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" }
]

export interface ISocialMedia {
  platform: string;
  icon: string;
  link: string;
}

export const SOCIAL_MEDIA: ISocialMedia[] = [
  { platform: 'Instagram', icon: 'instagram', link: 'https://instagram.com/atlaskandink' },
  { platform: 'LinkedIn', icon: 'linkedin', link: 'https://linkedin.com/company/atlaskandink' },
  { platform: 'X', icon: 'x-twitter', link: 'https://x.com/atlaskandink' },
  { platform: 'YouTube', icon: 'youtube', link: 'https://youtube.com/@atlaskandink' }
]



