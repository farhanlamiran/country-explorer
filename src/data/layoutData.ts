export type INavLink = {
  name: string
  href: string
}

export const NAV_LINKS: INavLink[] = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "About Us", href: "/about" }
]

interface ISocialMedia {
  icon: string
  url: string
}

interface IFooterData {
  company: {
    name: string
    address: string
  }
  services: string[]
  socialMedia: ISocialMedia[]
}

export const FOOTER_DATA: IFooterData = ({
  company: {
    name: 'Atlas & Ink',
    address: 'Boulevard St, Los Angeles, 90001',
  },
  services: ['Contact Us', 'Term Conditions', 'Privacy Policy'],
  socialMedia: [
    { icon: 'instagram', url: 'https://instagram.com/' },
    { icon: 'linkedin', url: 'https://linkedin.com/' },
    { icon: 'twitter', url: 'https://x.com/' },
    { icon: 'youtube', url: 'https://youtube.com/' },
  ],
})
