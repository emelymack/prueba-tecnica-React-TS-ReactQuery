import { styled } from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 60vh;
`
const StyledTable = styled.table`
  border-spacing: 5px;
  width: 80%;
`
const StyledTableHead = styled.thead`
  text-transform: uppercase;
  letter-spacing: .5px;
  font-size: 20px;
  padding-bottom: 50px;
`
const Styledth = styled.th`
  padding-bottom: 25px;
`
const StyledTableData = styled.td`
  text-align: center;
  padding: 10px 20px;
`
const StyledTableRow = styled.tr<{ activeColors?: boolean}>`
  ${props => 
    props.activeColors &&`
      &:nth-child(even){
        background-color: #c3c3c34d;
      }
      &:nth-child(odd){
        background-color: #2f2f2f69;
      }
    `
  }
`

export {StyledContainer, StyledTable, StyledTableData, StyledTableHead, StyledTableRow, Styledth}