import React from "react"
import styled from "styled-components"

export default function TwoImages(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Image>
          <img src={props.image1}></img>
        </Image>
        <Image>
          <img src={props.image2}></img>
        </Image>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 24px auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Image = styled.div`
  display: block;
  width: 100%;
`
