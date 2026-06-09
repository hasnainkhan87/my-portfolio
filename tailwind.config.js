/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F4ED',
        olive: '#556B2F',
        'olive-light': '#6B8A3A',
        'olive-dark': '#3D4F22',
        gold: '#B59A5B',
        'gold-light': '#C9B07A',
        charcoal: '#2B2B2B',
        stone: '#EDE9E1',
        'stone-dark': '#E0DAD0',
        muted: '#7A7468',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
