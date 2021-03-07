import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H2 } from "../styles/TextStyles"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Intro>
            Hi, I’m Rossouw (“ru-so”), a freelance graphic and type designer
            with over 6 years experience, currently working in{" "}
            <span>
              <Strikethrough></Strikethrough>London
            </span>{" "}
            <span>
              <Strikethrough></Strikethrough>Tokyo
            </span>{" "}
            Lisbon. I’ve worked with some great people in wayfinding, branding,
            editorial and digital design. When I’m not designing things, I’m
            climbing things.
            <br /> <br />I am always looking for new and exciting work so{" "}
            <Link href="mailto:rossouwo@gmail.com" target="/blank">
              get in touch
            </Link>{" "}
            to say hi or discuss a project!
          </Intro>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  width: 100%;
  margin: 200px 0;

  @media (max-width: 640px) {
    margin-bottom: 80px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`

const TextWrapper = styled.div`
  max-width: 580px;
`

const Intro = styled(H2)``

const Strikethrough = styled.div`
  display: block;
  width: 100%;
  position: absolute;
  top: 18px;
  left: 0;
  border: 1px solid black;
`
