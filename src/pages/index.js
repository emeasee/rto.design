import React from "react"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import CV from "../components/sections/CV"
import HeroSection from "../components/sections/HeroSection"
import ProjectList from "../components/sections/ProjectList"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Navigation from "../components/sections/Navigation"
import Footer from "../components/sections/Footer"
import "../components/layout/layout.css"

function IndexPage() {
  return (
    <Wrapper>
      <GlobalStyle />
      <SEO title="Home" />
      <GradientWrapper>
        <Navigation />
        <HeroSection />
        <ProjectList />
      </GradientWrapper>
      <CV />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const GradientWrapper = styled.div`
  width: 100%;
  background: url(../../images/svg/rto_gradient@2x-80.jpg);
  background-size: 100% 100%;
  background-position: cover;
  background-repeat: no-repeat;
  animation: fadeIn 2s ease;
  overflow-x: hidden;

  @media (max-width: 640px) {
    background-size: 200% 100%;
  }
`

export default IndexPage
