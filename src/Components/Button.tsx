import { styled } from 'styled-components'

const StyledBtn = styled.button`
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 0.6em 1.2em;
  font-weight: 600;
  background-color: #2c2c2c;
  cursor: pointer;
  transition: all .25s;
  &:hover{
    border-color: #646cff;
  }
  &:active{
    background-color: #3f48fa;
    border-color: #2e37e7 ;
  }
`

interface Props {
  title: string,
  onClick: () => void
}

const Button = ({title, onClick}: Props) => {
  return (
    <StyledBtn onClick={onClick}>{title}</StyledBtn>
  )
}

export default Button