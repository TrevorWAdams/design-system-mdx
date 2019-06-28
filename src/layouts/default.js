/** @jsx jsx */
import { jsx, Container, Styled, Layout, Main, Flex} from "theme-ui"
import { useState } from "react"
import { Global } from "@emotion/core"
import Header from "../components/header"
import SEO from "../components/seo"
import SkipLink from "../components/skip-link"
import NavLink from "../components/nav-link"
import Footer from "../components/footer"
import {ContentPane, SidebarPane } from "../elements"

const DefaultLayout = props => {
  const [open, setOpen] = useState(false)

  return (
    <Styled.root>
      <SEO {...props} />
      <Global
        styles={{
          "*": {
            boxSizing: "border-box"
          },
          body: {
            margin: 0
          }
        }}
      />
      <SkipLink>Skip to content</SkipLink>
      <Layout>
        <Header menuOpen={open} setMenuOpen={setOpen} />
        <Main>
          <Container>
            <Flex>
              <SidebarPane
                onFocus={() => {
                  setOpen(true)
                }}
                onBlur={() => {
                  setOpen(false)
                }}
                onClick={() => {
                  setOpen(false)
                }}
                open={open}
              >
                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about/">About</NavLink>
              </SidebarPane>

              <ContentPane>{props.children}</ContentPane>
            </Flex>
          </Container>
        </Main>
        <Footer />
      </Layout>
    </Styled.root>
  )
}

export default DefaultLayout
