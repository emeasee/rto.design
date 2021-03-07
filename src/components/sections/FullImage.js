import React from "react"
import styled from "styled-components"

export default function FullImage(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Image>
          <img src={props.image}></img>
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
`

const Image = styled.div`
  display: block;
  width: 100%;
`
