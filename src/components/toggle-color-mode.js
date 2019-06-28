import React from 'react'
import styled from '@emotion/styled'
import { useColorMode, Flex } from 'theme-ui'
import { CenterPane } from '../elements'

const ToggleStyles = styled(Flex)`
  cursor: inherit;
  height: 50px;
  width: 65px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme.colors.secondary ? props.theme.colors.secondary : '#333399'};
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: ${props =>
      props.theme.colors.primary ? props.theme.colors.primary : '#FFF'};
    border-radius: 20px;
    transition: all 0.3s;
    cursor: pointer;
  }
  .switch::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: white;
    top: 1px;
    left: 1px;
    transition: all 0.3s;
  }
  input[type='checkbox']:checked + .switch::after {
    transform: translateX(20px);
  }
  input[type='checkbox']:checked + .switch {
    background-color: ${props =>
      props.theme.colors.modes.dark.background
        ? props.theme.colors.modes.dark.background
        : '#000'};
  }
  .offscreen {
    position: absolute;
    left: -9999px;
  }
`

const ToggleButton = ({ onClick }) => {
  return (
    <ToggleStyles mr={1}>
      <CenterPane>
        <input
          type="checkbox"
          id="toggle"
          className="offscreen"
          onClick={onClick}
        ></input>
        <label htmlFor="toggle" className="switch"></label>
      </CenterPane>
    </ToggleStyles>
  )
}

const ToggleColorMode = () => {
  const [colorMode, setColorMode] = useColorMode('light')

  return (
    <Flex alignItems="center">
      <ToggleButton
        title="Toggle Color Mode"
        onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
      />
    </Flex>
  )
}

export default ToggleColorMode
