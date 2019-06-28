import React from 'react'
import { readableColor, parseToRgb, parseToHsl } from 'polished'

import { isHexColor, stripEndQuotes } from '../utils/strings'

const Swatch = ({ color, colorName }) => {
  const colorSwatch = stripEndQuotes(color)

  const isColorSwatch = isHexColor(colorSwatch)

  let hslColor
  let rgbColor

  if (isColorSwatch) {
    hslColor = parseToHsl(colorSwatch)
    rgbColor = parseToRgb(colorSwatch)
  }

  return (
    <>
      {isColorSwatch ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorSwatch,
            color: readableColor(colorSwatch, '#000', '#fff'),
            width: '300px',
            height: '300px',
            margin: '6px',
          }}
        >
          <h3>{colorName}</h3>
          <div>{`hsl(${hslColor.hue.toFixed(0)}, ${hslColor.saturation.toFixed(
            2,
          )}, ${hslColor.lightness.toFixed(2)})`}</div>
          <div>{`rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`}</div>
          <div>{color}</div>
        </div>
      ) : null}
    </>
  )
}

export default Swatch
