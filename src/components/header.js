/** @jsx jsx */
import { jsx, Header, Container, Flex, useColorMode } from "theme-ui"
import MenuButton from "./menu-button"
import NavLink from "./nav-link"
import Button from "./button"

const modes = ["light", "dark"]

export default ({ menuOpen, setMenuOpen }) => {
  const [mode, setMode] = useColorMode()

  const cycleMode = e => {
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
          </Flex>
          <Flex>
            <Button
              sx={{
                ml: 2
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
