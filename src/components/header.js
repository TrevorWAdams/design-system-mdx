import React from 'react'
import { Header, Box } from 'theme-ui'
import ToggleColorMode from './toggle-color-mode'
import { MenuButton } from '../elements'


const HeaderWrapper = ({ toggleSidebar }) => {
  return (
    <Header>
      <Box p={1} my="auto">
        <MenuButton title="ToggleSidebar" onClick={toggleSidebar} />
      </Box>
      <Box p={1} my="auto">
        <ToggleColorMode />
      </Box>
    </Header>
  )
}

export default HeaderWrapper
