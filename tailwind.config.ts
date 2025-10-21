import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cordoba-dark': '#0f172a',
        'cordoba-blue': '#3b82f6',
        'cordoba-purple': '#8b5cf6',
      },
    },
  },
  plugins: [],
}
export default config
