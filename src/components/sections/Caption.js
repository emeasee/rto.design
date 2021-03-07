import React from "react"
import styled from "styled-components"
import { H2, H3 } from "../styles/TextStyles"

export default function Caption(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Text>{props.caption}</Text>
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

const Text = styled(H3)``
