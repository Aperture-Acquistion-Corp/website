module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
        'btn-gradient': 'linear-gradient(90deg, #3B82F6 0%, #1D4ED8 100%)',
        'btn-gradient-hover': 'linear-gradient(90deg, #1D4ED8 0%, #3B82F6 100%)',
      },
    },
  },
  plugins: [],
}
