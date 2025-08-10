// Definisikan tipe untuk props FeatureCard
import { faGlobe, faPlane, faSearch } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface IFeature {
  icon: IconDefinition
  title: string
  description: string
}

export const FEATURES: IFeature[] = [
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
]

export interface ITestimonial {
  id: number
  author: string
  role: string
  rating: number
  text: string
}

export const TESTIMONIALS : ITestimonial[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    role: "Travel Blogger",
    rating: 5,
    text: "Atlas & Ink has been my go-to resource for travel planning. The cultural insights and detailed  information helped me prepare for my Southeast Asia trip perfectly. I discovered hidden gems I would never have found otherwise!"
  },
  {
    id: 2,
    author: "Marco Rodriguez",
    role: "International Student",
    rating: 5,
    text: "As a student studying abroad, this platform gave me everything I needed to understand local customs and traditions. The information is accurate, up-to-date, and presented in a way that's easy to understand."
  },
  {
    id: 3,
    author: "Priya Patel",
    role: "Digital Nomad",
    rating: 5,
    text: "Working remotely from different countries requires understanding local currencies, time zones, and business cultures. Atlas & Ink provides all this information in one place. It's become essential for my nomadic lifestyle."
  },
  {
    id: 4,
    author: "James Thompson",
    role: "Geography Teacher",
    rating: 4,
    text: "I use Atlas & Ink as a teaching resource for my geography classes. The visual presentations and comprehensive  profiles make learning engaging for my students. It's an excellent educational tool."
  },
  {
    id: 5,
    author: "Emma Chen",
    role: "Business Consultant",
    rating: 5,
    text: "Before expanding our business internationally, Atlas & Ink helped us understand market conditions, cultural nuances, and business practices in different countries. The insights were invaluable for our success."
  },
  {
    id: 6,
    author: "Ahmed Hassan",
    role: "Photographer",
    rating: 5,
    text: "The stunning visuals and detailed location information helped me plan my photography expeditions across Africa. I discovered breathtaking locations and learned about local photography regulations through their platform."
  }
]
