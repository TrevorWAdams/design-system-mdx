/** @jsx jsx */
import { jsx, Header, Container, Flex, Box, useColorMode } from "theme-ui"
import { ThemeContext } from "@emotion/core"
import { useState } from "react"
import MenuButton from "./menu-button"
import NavLink from "./nav-link"
import Button from "./button"
import themes from "../themes"
import Select from "../components/select"

const modes = ["light", "dark"]

export default ({ menuOpen, setMenuOpen }) => {
  const [theme, setTheme] = useState("base")
  const [mode, setMode] = useColorMode()
  const selectedTheme = themes[theme]

  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  return (
    <ThemeContext.Provider value={selectedTheme}>
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
    </ThemeContext.Provider>
  )
}
