// other themes can be imported to use as an extension
// import baseTheme from 'demo-theme/src/gatsby-theme-ui'
// console.log('base theme', typeof baseTheme, baseTheme)

const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading"
}
const purple = {
  initialColorMode: "light",
  colors: {
    text: "hsl(240, 50%, 16%)",
    background: "hsl(0, 0%, 100%)",
    primary: "hsl(270, 50%, 40%)",
    secondary: "hsl(240, 50%, 40%)",
    highlight: "hsl(300, 50%, 40%)",
    muted: "hsl(227, 11%, 50%)",
    gray: "hsl(227, 11%, 50%)",
    header: {
      text: "hsl(227, 11%, 90%)",
      background: "hsl(240, 50%, 40%)"
    },
    modes: {
      dark: {
        text: "hsl(227, 11%, 90%)",
        background: "hsl(240, 50%, 30%)",
        primary: "hsl(270, 50%, 40%)",
        secondary: "hsl(240, 50%, 40%)",
        highlight: "hsl(300, 50%, 40%)",
        muted: "hsl(227, 11%, 50%)",
        gray: "hsl(227, 11%, 50%)",
        header: {
          text: "hsl(227, 11%, 90%)",
          background: "hsl(240, 50%, 40%)"
        }
      }
    }
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: "400",
    heading: "700"
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading
  },
  styles: {
    Header: {
      color: "header.text",
      bg: "header.background"
    },    
    Container: {
      p: 3,
      maxWidth: 1280
    },
    Footer: {
      color: "header.text",
      bg: "header.background"
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      variant: "textStyles.heading",
      fontSize: 6
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "secondary"
      }
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      color: "secondary",
      fontSize: "inherit"
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted"
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      [["th", "td"]]: {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid"
      }
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px"
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px"
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted"
    }
  },
  prism: {
    [[
      ".comment",
      ".prolog",
      ".doctype",
      ".cdata",
      ".punctuation",
      ".operator",
      ".entity",
      ".url"
    ]]: {
      color: "gray"
    },
    ".comment": {
      fontStyle: "italic"
    },
    [[
      ".property",
      ".tag",
      ".boolean",
      ".number",
      ".constant",
      ".symbol",
      ".deleted",
      ".function",
      ".class-name",
      ".regex",
      ".important",
      ".variable"
    ]]: {
      color: "purple"
    },
    [[".atrule", ".attr-value", ".keyword"]]: {
      color: "primary"
    },
    [[
      ".selector",
      ".attr-name",
      ".string",
      ".char",
      ".builtin",
      ".inserted"
    ]]: {
      color: "secondary"
    }
  }
}

export default purple
