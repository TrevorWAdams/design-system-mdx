// other themes can be imported to use as an extension
// import baseTheme from 'demo-theme/src/gatsby-theme-ui'
// console.log('base theme', typeof baseTheme, baseTheme)

const simple = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    header: {
      text: "inherit",
      background: "inherit"
    },
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        header: {
          text: "inherit",
          background: "inherit"
        },
      }
    }
  },
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
    Header: {
      color: "header.text",
      bg: "header.background"
    },
  },
}

export default simple