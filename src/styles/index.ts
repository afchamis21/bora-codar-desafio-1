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
      'background-color': '#0F0D13',
      'card-color': '#2A2141',
      'text-color': '#E1E1E6',
      'track-color': '#D9D9D9',
    },
  },
})

export const lightTheme = createTheme('light-theme', {
  colors: {
    'background-color': '#D8D8D8',
    'card-color': '#00356615',
    'text-color': '#2A2141',
    'track-color': '#0F0D13',
  },
})
