// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'logo-light': "url('assets/logoLight.png')",
        'logo-dark': "url('assets/logoDark.png')",
      },
    },
    colors: {
      generic: '#4DA2F7',
      'dark-bg-primary': '#10172A',
      'dark-bg-secondary': '#283141',
      'dark-text-primary': '#f7fafc',
      'dark-text-secondary': '#e2e8f0',
      'dark-text-accent': '#81e6d9',
      'light-bg-primary': '#ffffff',
      'light-bg-secondary': '#edf2f7',
      'light-text-primary': '#10172A',
      'light-text-secondary': '#4a5568',
      'light-text-accent': '#2b6cb0',
    },
  },
  variants: {
    extend: {
      display: ['dark'],
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
  darkMode: 'class',
};
