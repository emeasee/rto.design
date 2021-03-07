import React from "react"
import { GlobalStyle } from "../styles/GlobalStyles"
import Navigation from "../../components/sections/Navigation"
import Footer from "../../components/sections/Footer"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
