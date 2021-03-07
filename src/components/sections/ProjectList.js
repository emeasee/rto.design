import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BodyMain, H2, LightText } from "../styles/TextStyles"

function ProjectList() {
  return (
    <Wrapper>
      <ContentWrapper>
        <GraphicProjects>
          <Title>Graphic Design</Title>
          <ProjectsList>
            <Link to="/GraphicProjects/GigfundingPlatform/">
              <Project>
                <ProjectTitle>Gigfunding Platform</ProjectTitle>
                <ProjectType>Branding</ProjectType>
              </Project>
            </Link>
            <Link to="/GraphicProjects/Logos2020/">
              <Project>
                <ProjectTitle>Logo Projects 2020</ProjectTitle>
                <ProjectType>Logo Design</ProjectType>
              </Project>
            </Link>
            <Link to="/GraphicProjects/WildTame/">
              <Project>
                <ProjectTitle>Wild Tame Rebrand</ProjectTitle>
                <ProjectType>Branding</ProjectType>
              </Project>
            </Link>
            <Link to="/GraphicProjects/RecruitReport/">
              <Project>
                <ProjectTitle>Recruit Annual Report</ProjectTitle>
                <ProjectType>Editorial</ProjectType>
              </Project>
            </Link>
            <Link to="/GraphicProjects/Logos2019/">
              <Project>
                <ProjectTitle>Logo Projects 2019</ProjectTitle>
                <ProjectType>Logo Design</ProjectType>
              </Project>
            </Link>
            <Link to="/GraphicProjects/Coordinates/">
              <Project>
                <ProjectTitle>Co-ordinates Exhibition</ProjectTitle>
                <ProjectType>Map Design</ProjectType>
              </Project>
            </Link>
            <Link to="/GraphicProjects/YVInfographic/">
              <Project>
                <ProjectTitle>Young Vic Inforgraphic Poster</ProjectTitle>
                <ProjectType>Information Design</ProjectType>
              </Project>
            </Link>
            <Link to="/GraphicProjects/LondonCycle/">
              <Project>
                <ProjectTitle>London Cycle Wayfinding</ProjectTitle>
                <ProjectType>Wayfinding</ProjectType>
              </Project>
            </Link>
          </ProjectsList>
        </GraphicProjects>
        <TypeProjects>
          <Title>Typography</Title>
          <ProjectsList>
            <Link to="/TypeProjects/ContinuousLetters/">
              <Project>
                <ProjectTitle>Continuous non-overlapping letters</ProjectTitle>
                <ProjectType>Type Design</ProjectType>
              </Project>
            </Link>
            <Link to="/TypeProjects/DotType/">
              <Project>
                <ProjectTitle>Dot Type</ProjectTitle>
                <ProjectType>Type Design / Lettering</ProjectType>
              </Project>
            </Link>
            <Link to="/TypeProjects/BroturesKichijoji/">
              <Project>
                <ProjectTitle>Brotures Kichijoji</ProjectTitle>
                <ProjectType>Lettering</ProjectType>
              </Project>
            </Link>
            <Link to="/TypeProjects/Ajoto/">
              <Project>
                <ProjectTitle>AJOTO</ProjectTitle>
                <ProjectType>Lettering / Editorial</ProjectType>
              </Project>
            </Link>
            <Link to="/TypeProjects/AppliedCard/">
              <Project>
                <ProjectTitle>Applied Wayfinding Card</ProjectTitle>
                <ProjectType>Lettering / Editorial</ProjectType>
              </Project>
            </Link>
            <Link to="/TypeProjects/UnitedPercheron/">
              <Project>
                <ProjectTitle>United Percheron</ProjectTitle>
                <ProjectType>Lettering</ProjectType>
              </Project>
            </Link>
            <Link to="/TypeProjects/SpringAwakening/">
              <Project>
                <ProjectTitle>Spring Awakening Poster</ProjectTitle>
                <ProjectType>Poster Design</ProjectType>
              </Project>
            </Link>
            <Link to="/TypeProjects/36DaysJapan/">
              <Project>
                <ProjectTitle>36 Days of Type: Japan</ProjectTitle>
                <ProjectType>Lettering</ProjectType>
              </Project>
            </Link>
            <Link to="/TypeProjects/LyricalLetters/">
              <Project>
                <ProjectTitle>Lyrical Lettering</ProjectTitle>
                <ProjectType>Lettering</ProjectType>
              </Project>
            </Link>
          </ProjectsList>
        </TypeProjects>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ProjectList

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 64px auto 104px auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const GraphicProjects = styled.div``

const TypeProjects = styled.div``

const Title = styled(H2)`
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`

const ProjectsList = styled.div``

const Project = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid black;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const ProjectTitle = styled(BodyMain)``

const ProjectType = styled(LightText)``
