/** @jsx jsx */
import { jsx, Footer, Flex } from "theme-ui"
import NavLink from "./nav-link"

export default () => (
  <Footer>
    <Flex alignItems="center">
      <NavLink to="/">Home</NavLink>
      <NavLink href="https://github.com/TrevorWAdams/gatsby-themes">
        GitHub
      </NavLink>
    </Flex>
  </Footer>
)
