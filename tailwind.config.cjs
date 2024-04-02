const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const darkTheme = {
  primary: colors.emerald[400], // colors.green[400],
          secondary: colors.gray[950],
          accent: '#8de8e8',
          neutral: '#1c1424',
          'base-100': '#130C13',
          info: colors.fuchsia[300], // '#89abe1',
          success: '#4ae8ab',
          warning: '#fb8e09',
          error: '#e8175d',
          '--blob-color': '123 45% 67%',
          '--primary-cta-base': '344 80% 30%',
          "--rounded-btn": "0.125rem",
          h1: {
            fontFamily: "LemonMilk-Bold",
            fontWeight: 700,
          },
          h2: {
            fontFamily: "LemonMilk-Light",
            fontWeight: 600,
          },
         
        };

// TODO: Install Tailwind forms
/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  // purge: [],
  // NOTE: Search primary-cool to see how to use custom colors here
  theme: {
    extend: {
      colors: {
        'logo-n': colors.fuchsia,
        'logo-lowcode': colors.yellow,
        'surface-dark': colors.zinc,
        'primary-cool': "hsl(var(--primary-cool)/1.0)",
        'primary-cta-base': "hsl(var(--primary-cta-base)/1.0)",
        'gradient-100': '#85B29E',
      },
      fontFamily: {
        hero: ['Roboto-Light', 'ui-sans-serif'],
        nav: ['LemonMilk', 'ui-sans-serif'],
        btnText: ['Roboto-Light', 'ui-sans-serif'],
        brandBold: ['BeBasNue-Bold', 'ui-sans-serif'],
      },
      brightness: {
        25: '.25',
      }
    },
    fontFamily: {
      sans: ['Roboto-Light', ...defaultTheme.fontFamily.sans],
      serif: ['Roboto-Light', ...defaultTheme.fontFamily.serif],
      mono: ['Roboto', ...defaultTheme.fontFamily.mono],
    },
  },

  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        dark: darkTheme,
        // light: darkTheme,
      },
    ]
  },
  darkTheme: 'dark',
  darkMode: 'class'
};

module.exports = config;
