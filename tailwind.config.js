/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#090909',
        panel: '#161311',
        ink: '#1f1814',
        line: '#3a2a1e',
        ember: '#d9a441',
        sand: '#c8752d',
        cedar: '#b54b36',
        mist: '#bba58e',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        frame: '0 24px 80px rgba(0, 0, 0, 0.36)',
      },
    },
  },
  plugins: [],
};
