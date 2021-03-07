import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H2, H3 } from "../styles/TextStyles"

function Footer() {
  function ScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <ArrowWrapper>
          <BackArrow>
            <Link to="/">
              <img src="../../images/svg/rto_backarrow.svg" />
            </Link>
          </BackArrow>
          <TopArrow onClick={event => ScrollTop(event)}>
            <img src="../../images/svg/rto_toparrow.svg" />
          </TopArrow>
        </ArrowWrapper>
        <Details>
          <Logo className="lineLink">
            <Link to="/">rto.design</Link>
          </Logo>
          <Contact>
            <Email className="lineLink">
              <Link href="mailto:hello@rto.design" target="/blank">
                hello@rto.design
              </Link>
            </Email>
            <Instagram className="lineLink">
              <Link
                href="https://www.instagram.com/rto_design_/?hl=en"
                target="/blank"
              >
                Instagram
              </Link>
            </Instagram>
          </Contact>
        </Details>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  width: 100%;
  background: white;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 16px 24px 16px;

  @media (max-width: 400px) {
    padding: 80px 16px 16px 16px;
  }
`

const ArrowWrapper = styled.div`
  padding: 16px 4px;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
`

const BackArrow = styled.div`
  width: 22px;
  height: 22px;
  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: translateX(-8px);
  }
`

const TopArrow = styled.div`
  width: 22px;
  height: 22px;
  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: translateY(-8px);
  }
`

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid black;
  padding: 8px 0;
`

const Logo = styled(H2)`
  font-weight: 600;
`

const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 24px;
  text-align: right;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

const Email = styled(H3)``

const Instagram = styled(H3)`
  @media (max-width: 400px) {
    display: none;
  }
`
