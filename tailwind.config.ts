import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background1': "url('/background_1.jpg')",
        'background2': "url('/background_2.jpg')",
         'profile-image' : "url('/Karolina.jpeg')"
      },
    },
  },
  plugins: [],
}
export default config
