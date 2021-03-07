import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BodyMain, H2, LightText } from "../styles/TextStyles"

export default function ProjectIntro(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <BackArrow>
          <Link to="/">
            <img src="/images/svg/rto_backarrow.svg" alt="return arrow" />
          </Link>
        </BackArrow>
        <TextWrapper>
          <LeftText>
            <Title>{props.title || "Project title"}</Title>
            <Description>
              <Paragraph>{props.paragraph1 || "Project description"}</Paragraph>
              <Paragraph>{props.paragraph2}</Paragraph>
              <Paragraph>{props.paragraph3}</Paragraph>
            </Description>
            <Authors>{props.authors}</Authors>
          </LeftText>
          <RightText>
            <Title>{props.title2}</Title>
            <Details>
              <DetailName>{props.line1}</DetailName>
              <DetailInput>{props.line1B}</DetailInput>
            </Details>
            <Details>
              <DetailName>{props.line2}</DetailName>
              <DetailInput>{props.line2B}</DetailInput>
            </Details>
            <Details>
              <DetailName>{props.line3}</DetailName>
              <DetailInput>{props.line3B}</DetailInput>
            </Details>
            <Details>
              <DetailName>{props.line4}</DetailName>
              <DetailInput>{props.line4B}</DetailInput>
            </Details>
            <Details>
              <DetailName>{props.line5}</DetailName>
              <DetailInput>{props.line5B}</DetailInput>
            </Details>
            <Details>
              <DetailName>{props.line6}</DetailName>
              <DetailInput>{props.line6B}</DetailInput>
            </Details>
          </RightText>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 240px auto 140px auto;
  padding: 0 24px;

  @media (max-width: 400px) {
    margin: 120px auto;
  }
`

const BackArrow = styled.div`
  width: 22px;
  height: 22px;
  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: translateX(-8px);
  }
`
const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 64px;
  white-space: pre-line;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const LeftText = styled.div`
  max-width: 580px;
  white-space: pre-line;
`

const RightText = styled.div`
  @media (max-width: 860px) {
    display: none;
  }
`

const Title = styled(H2)`
  margin: 8px 0 16px 0;
`

const Description = styled(LightText)`
  white-space: pre-line;
`

const Paragraph = styled.div`
  padding-bottom: 24px;
`

const Authors = styled(LightText)``

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 24px;
`

const DetailName = styled(BodyMain)``

const DetailInput = styled(LightText)``
