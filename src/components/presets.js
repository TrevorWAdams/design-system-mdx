/** @jsx jsx */
import { jsx, Styled, ColorMode, components } from 'theme-ui'
import { ThemeContext } from '@emotion/core'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import {
  TypeScale,
  TypeStyle,
  HeadingStyle,
  ColorPalette,
  FontFamily,
} from '@theme-ui/style-guide'
import themes from '../themes'
import Select from '../components/select'

export default () => {
  const [theme, setTheme] = useState('base')
  const selectedTheme = themes[theme]
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Poppins:400,700,900|Roboto:400,600"
        />
      </Helmet>
      <div
        sx={{
          '*': {
            transition: 'all .2s ease-out',
          },
        }}
      >
        <ColorMode />
        <label
          sx={{
            display: 'block',
            mb: 4,
          }}
        >
          Theme:{' '}
          <Select
            value={theme}
            onChange={e => {
              setTheme(e.target.value)
            }}
          >
            {Object.keys(themes).map(key => (
              <option key={key} children={key} />
            ))}
          </Select>
        </label>
        <ThemeContext.Provider value={selectedTheme}>
          <Styled.root>
            <Styled.h2>Colors</Styled.h2>
            <ColorPalette omit={['modes', 'header']} />
            <Styled.h2>Typography</Styled.h2>
            <TypeStyle fontSize={7}>
              Body: <FontFamily name="body" />
            </TypeStyle>
            <HeadingStyle
              fontFamily="heading"
              fontWeight="heading"
              lineHeight="heading"
              fontSize={7}
            >
              Heading: <FontFamily name="heading" />
            </HeadingStyle>
            <Styled.h2>Type Scale</Styled.h2>
            <TypeScale />
            <Styled.h2>Raw JSON</Styled.h2>
            <textarea
              value={JSON.stringify(selectedTheme, null, 2)}
              rows={16}
              readOnly
              sx={{
                width: '100%',
                fontFamily: 'monospace',
                bg: 'muted',
                border: 0,
                borderRadius: 4,
              }}
            />
          </Styled.root>
        </ThemeContext.Provider>
      </div>
    </div>
  )
}
