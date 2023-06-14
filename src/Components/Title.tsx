import styled from "styled-components"

const StyledTitle = styled.div`
  margin-bottom: 30px;
`
const StyledH1 = styled.h1`
  color: #3f48fa;
  text-align: center;
  margin-bottom: 0;
  font-weight: 700;
`
const StyledH3 = styled.h3`
  color: #a4a9ff;
  text-align: center;
`

const Title = () => {
  return (
    <StyledTitle>
      <StyledH1>Prueba Técnica</StyledH1>
      <StyledH3>React + TypeScript + React Query + Styled Components</StyledH3>
    </StyledTitle>
  )
}

export default Title