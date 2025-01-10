import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import daisyui from 'daisyui'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    daisyui,
  ],
} satisfies Config
