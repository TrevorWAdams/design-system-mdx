import React from 'react'
import { Flex } from "theme-ui"
import theme from '../theme'
import Swatch from './swatch'

const Colors = () => {
  const { colors } = theme
  const swatches = Object.entries(colors)
  return (
      <Flex flexWrap="wrap">
        {swatches &&
          swatches.map(swatch => (
            <Swatch
              key={swatch[0]}
              color={JSON.stringify(swatch[1])}
              colorName={swatch[0]}
            />
          ))}
      </Flex>
  )
}

export default Colors
