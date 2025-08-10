interface IAboutProfile {
  name: string
  bio: string
}

export const ABOUT_PROFILE: IAboutProfile = {
  name: 'Atlas & Ink Team',
  bio: 'A creative team passionate about developing web applications that connect people with information about countries around the world. We believe that geographical knowledge can broaden horizons and strengthen global connections.',
};

interface ITechnology {
  name: string
  icon: string
  description: string
}

export const TECHNOLOGIES: ITechnology[] = [
  { name: 'Vue.js', icon: 'logos:vue', description: 'A progressive framework for building user interfaces' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', description: 'A statically typed superset of JavaScript' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', description: 'A utility-first CSS framework for rapid UI development' },
  { name: 'Vite', icon: 'logos:vitejs', description: 'A lightning-fast frontend build tool' }
]


