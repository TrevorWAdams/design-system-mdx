/** @jsx jsx */
import { jsx, Container, Styled, Layout, Main, Flex } from "theme-ui"
import { useState } from "react"
import { Global } from "@emotion/core"
import Header from "../components/header"
import SEO from "../components/seo"
import SkipLink from "../components/skip-link"
import Footer from "../components/footer"
import Sidebar from "../elements/sidebar"
import Content from "../elements/content"

import themes from "../themes"

const DefaultLayout = props => {
  const [menuOpen, setMenuOpen] = useState(false)
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
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Main>
          <Container>
            <Flex>
              <Sidebar
                onFocus={() => {
                  setMenuOpen(true)
                }}
                onBlur={() => {
                  setMenuOpen(false)
                }}
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                <h2>Sidebar</h2>
                
              </Sidebar>

              <Content>{props.children}</Content>
            </Flex>
          </Container>
        </Main>
        <Footer />
      </Layout>
    </Styled.root>
  )
}

export default DefaultLayout
