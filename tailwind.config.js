export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.54rem', '0.75rem'],
      sm: ['0.63rem', '0.9rem'],
      base: ['0.72rem', '1.08rem'],
      lg: ['0.81rem', '1.26rem'],
      xl: ['0.9rem', '1.26rem'],
      '2xl': ['1.08rem', '1.44rem'],
      '3xl': ['1.14rem', '1.4rem'],
      '4xl': ['1.35rem', '1.61rem'],
      '5xl': ['1.82rem', '0.85'],
      '6xl': ['2.28rem', '0.85'],
      '7xl': ['2.75rem', '0.85'],
      '8xl': ['3.68rem', '0.85'],
      '9xl': ['4.91rem', '0.85'],
    },
    extend: {
      colors: {
        ink: '#25252A',
        charcoal: '#45434A',
        slate: '#45434A',
        beige: '#EDE9E0',
        ivory: '#FAF9F6',
        gold: '#C6A15B',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        hero: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
