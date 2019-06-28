/** @jsx jsx */
import { jsx, Header, Container, Flex, Box, useColorMode} from "theme-ui"
import { useState} from "react"
//import { Link } from 'gatsby'
import MenuButton from "./menu-button"
import NavLink from "./nav-link"
import Button from "./button"
import themes from "../themes"
import Select from "./select"

const modes = ["light", "dark"]

const HeaderWrapper = ({ menuOpen, setMenuOpen }) => {

  const [theme, setTheme] = useState()
  const [mode, setMode] = useColorMode()

  const cycleMode = () => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  return (
      <Header>
        <Container>
          <Flex sx={{ justifyContent: "space-between" }}>
            <Flex>
              <MenuButton
                onClick={() => {
                  setMenuOpen(!menuOpen)
                }}
              />
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
            </Flex>
            <Flex alignItems="center">
              <Box>
                <label
                  sx={{
                    display: "block",
                    mb: 4
                  }}
                >
                  Theme:{" "}
                  <Select
                    value={theme}
                    onChange={e => {
                      console.log('HERE')
                      setTheme(e.target.value)
                    }}
                  >
                    {Object.keys(themes).map(key => (
                      <option key={key} children={key} />
                    ))}
                  </Select>
                </label>
              </Box>
              <Button
                sx={{
                  ml: 2,
                  width: 50,
                  height: 50
                }}
                onClick={cycleMode}
              >
                {mode}
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Header>
  )
}

export default HeaderWrapper