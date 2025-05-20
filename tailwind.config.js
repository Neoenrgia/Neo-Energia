/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#00A651', // Neoenergia primary green
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      backgroundImage: {
        'wave-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyODAgNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDB2LTAuNjI5YzguMTI1IDAgMTUuODE1LTIuNTc1IDIxLjE4My03LjE0OUMzNi42ODggMTkuOTI3IDYwLjE3NSAyNy4xODEgNzUuMzc5IDE5Ljk3NWM4LjA5MiAzLjkwNiAyNC4yMjMgMTAuOTMzIDQ2Ljg5IDE2LjY4MUMxNTUuNjgxIDQ1LjEzNiAxODUuMTM0IDQwIDIxOS45MjEgNDBIMCB6IiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+')",
      },
    },
  },
  plugins: [],
};