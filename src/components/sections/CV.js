import React from "react"
import styled from "styled-components"
import { BodyMain, H2, LightText } from "../styles/TextStyles"

function CV() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Experience>
          <SectionTitle>Experience</SectionTitle>
          <List>
            <Item>
              <Title>MARO Studio</Title>
              <Type>Freelance Designer</Type>
              <Date>2018-2020</Date>
            </Item>
            <Item>
              <Title>Wild Tame</Title>
              <Type>Freelance Designer</Type>
              <Date>2019-2020</Date>
            </Item>
            <Item>
              <Title>Applied Wayfinding</Title>
              <Type>Mid-Weight Designer</Type>
              <Date>2015-2018</Date>
            </Item>
            <Item>
              <Title>AJOTO</Title>
              <Type>Junior Designer</Type>
              <Date>2013</Date>
            </Item>
          </List>
        </Experience>
        <Education>
          <SectionTitle>Education</SectionTitle>
          <List>
            <EducationItem>
              <Title>
                MA Contemporary Typographic Media, London College of
                Communication, UAL<Detail>Distinction</Detail>
              </Title>
              <Date>2014</Date>
            </EducationItem>
            <EducationItem>
              <Title>
                BA (Hons) Graphic Design & Multimedia, University of Worcester
                <Detail>First Class</Detail>
              </Title>
              <Date>2010-2013</Date>
            </EducationItem>
          </List>
        </Education>
      </ContentWrapper>
    </Wrapper>
  )
}

export default CV

const Wrapper = styled.div`
  width: 100%;
  background: white;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
`

const Experience = styled.div`
  padding-top: 24px;
`

const Education = styled.div`
  padding-top: 24px;
`

const SectionTitle = styled(H2)`
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`

const List = styled.div``

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid black;

  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
`

const EducationItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 32px;
  padding: 16px 0 21px 0;
  border-bottom: 1px solid black;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled(BodyMain)``

const Type = styled(LightText)``

const Date = styled(LightText)``

const Detail = styled(LightText)``
