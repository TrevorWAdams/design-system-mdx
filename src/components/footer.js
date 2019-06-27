/** @jsx jsx */
import { jsx, Footer, Container, Flex } from 'theme-ui'
import NavLink from './nav-link'

export default props => (
  <Footer
    sx={{
      pt: 4,
    }}
  >
    <Container>
      <Flex alignItems="center">
        <NavLink to="/">Legacy Project</NavLink>
        <NavLink href="https://github.com/TrevorWAdams/gatsby-themes">GitHub</NavLink>
      </Flex>
    </Container>
  </Footer>
)
