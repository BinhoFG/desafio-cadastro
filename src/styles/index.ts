import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      'bg-beige': '#f3ece9',
      'light-green': '#20b2aa',
      'dark-green': '#0E837C',
      'light-black': '#373737',
      'border-gray': '#E3E3E3',
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
