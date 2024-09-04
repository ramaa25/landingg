/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50px)' },
        },
      },
      animation: {
        'bounce1': 'bounceUpDown 3s ease-in-out infinite',
        'bounce2': 'bounceUpDown 3s ease-in-out 0.5s infinite',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #0D1B2A, #0D1B2A, #1B263B, #1B263B, transparent)',
      },
      colors: {
        'primary': '#E0E1DD',
        'dark': '#0D1B2A',
        'semi-dark': '#1B263B',
      }
    },
  },
  plugins: [],
}

