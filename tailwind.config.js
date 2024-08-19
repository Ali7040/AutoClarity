/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
  return ({opacityValue}) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgba(var(${variable}), ${opacityValue})`;
  };
}
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important: ':root',
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        'contrast-black': '#2A2A2F',
        'contrast-white': '#FFFFFF',
        primary: withOpacityValue('--color-primary'),
        secondary: withOpacityValue('--color-secondary'),
      },
      spacing: {
        gutter: 'var(--padding-gutter)',
      },      
      backgroundColor: theme => ({
        ...theme('colors'),
        base: 'var(--background-base)',
        foreground: withOpacityValue('--background-base'),
        hover: 'var(--background-hover)',
      }),
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: 'var(--foreground-divider)',
        divider: 'var(--foreground-divider)',
      }),
      borderRadius: {
        none: '0px',
        xs: 'calc(var(--border-radius) * 0.25)',
        sm: 'calc(var(--border-radius) * 0.5)',
        DEFAULT: 'var(--border-radius)',
        md: 'calc(var(--border-radius) * 1.25)',
        lg: 'calc(var(--border-radius) * 1.5)',
        xl: 'calc(var(--border-radius) * 1.75)',
        '2xl': 'calc(var(--border-radius) * 2)',
        full: '9999px'
      },
      boxShadow: {
        b: '0 10px 30px 0 rgba(82,63,104,.06)'
      },
      fontFamily: {
        sans: [
          '"Inter var"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple ColorDef Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto ColorDef Emoji"',
        ],
        serif: [
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      fontSize: {
        '2xs': '0.625rem'
      },
      margin: (theme, {negative}) => ({
        ...negative({
          gutter: 'var(--padding-gutter)'
        })
      }),
      textColor: theme => ({
        ...theme('colors'),
        black: 'var(--text-color)',
        white: 'var(--text-color-light)',
        'secondary': 'var(--text-secondary)',
        'hint': 'var(--text-hint)',
        'primary-contrast': 'rgb(var(--color-primary-contrast))',
        'secondary-contrast': 'rgb(var(--color-secondary-contrast))',
        'tarnary-contrast': 'rgb(var(--color-tarnary-contrast))',
        'red-contrast': '#FFFFFF',
        'green-contrast': '#FFFFFF',
        'amber-contrast': '#000000',
        'orange-contrast': '#000000',
        'deep-orange-contrast': '#FFFFFF',
        'purple-contrast': '#FFFFFF',
        'deep-purple-contrast': '#FFFFFF',
        'cyan-contrast': '#FFFFFF',
        'teal-contrast': '#FFFFFF',
        'gray-contrast': '#FFFFFF',
        'light-green-contrast': '#000000',
      }),
      placeholderColor: {
        black: 'var(--text-color)',
        white: 'var(--text-color-light)',
        secondary: 'var(--text-secondary)',
      },
      maxWidth: {
        '3xs': '16rem',
        '2xs': '18rem',
      }
    }
  },
  plugins: [],
}

