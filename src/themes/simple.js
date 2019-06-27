// other themes can be imported to use as an extension
// import baseTheme from 'demo-theme/src/gatsby-theme-ui'
// console.log('base theme', typeof baseTheme, baseTheme)

import colors from '../colors/simple'

const simple = {
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 72
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
  },
}

export default simple