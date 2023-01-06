import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$bg-beige',
    color: 'black',
    'webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '1rem',
  },
})
