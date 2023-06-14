import React from 'react'
import { styled } from 'styled-components'

interface Props {
  children: React.ReactNode
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const Container = ({children}: Props) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container
