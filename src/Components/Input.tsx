import { styled } from "styled-components"

const StyledInput = styled.input`
  border-radius: 8px;
  font-family: inherit;
  width: 300px;
  padding-left: 15px;
  border: 2px solid #2c2c2c;
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
  id: string,
  name: string,
  value: string,
  type: string,
  placeholder: string
}
const Input = ({id, name, value, type, placeholder}: Props) => {
  return (
    <StyledInput name={name} id={id} value={value} type={type} placeholder={placeholder} />
  )
}

export default Input