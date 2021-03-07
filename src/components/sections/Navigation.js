import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { themes } from "../styles/ColourStyles"
import { H1, H2 } from "../styles/TextStyles"

function Navigation() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Link to="/">
          <Title>rto.design</Title>
        </Link>
        <LinkWrapper className="lineLink">
          <Link href="mailto:hello@rto.design" target="/blank">
            <Links>hello@rto.design</Links>
            <LinkImage src="/images/svg/Email.svg"></LinkImage>
          </Link>
          <Link
            to="https://www.instagram.com/rto_design_/?hl=en"
            target="/blank"
          >
            <Links>Instagram</Links>
            <LinkImage src="/images/svg/Instagram.svg"></LinkImage>
          </Link>
        </LinkWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Navigation

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 64px auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 4fr 1fr;

  @media (max-width: 640px) {
    margin: 24px auto;
    padding: 0 16px;
  }
`

const Title = styled(H1)`
  color: ${themes.light.text1};
`

const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 32px;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 640px) {
    grid-gap: 16px;
  }
`

const Links = styled(H2)`
  font-weight: 300;
  text-align: right;

  @media (max-width: 640px) {
    display: none;
  }
`

const LinkImage = styled.img`
  display: none;
  width: 40px;
  height: 40px;
  text-align: right;

  @media (max-width: 640px) {
    display: block;
  }
`
