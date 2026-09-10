/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36b0fa',
          500: '#0c95eb',
          600: '#0077ca',
          700: '#015fa4',
          800: '#065186',
          900: '#0b436f',
          950: '#072b4a',
        },
      },
    },
  },
  plugins: [],
};
