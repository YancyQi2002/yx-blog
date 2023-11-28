import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import headlessui from '@headlessui/tailwindcss'
import daisyui from 'daisyui'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  daisyui: {
    themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    typography,
    headlessui,
    daisyui,
  ],
} satisfies Config
