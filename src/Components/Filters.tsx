import { styled } from "styled-components"
import Button from "./Button"
import Input from "./Input"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 770px;
  margin-bottom: 20px;
`

interface actionTypes {
  colorRowsAction: () => void,
  sortByCountryAction: () => void,
  resetAction: () => void
}

const Filters = ({colorRowsAction, sortByCountryAction, resetAction }: actionTypes) => {
  return (
    <Container>
      <Button title="Color rows" onClick={colorRowsAction} />
      <Button title="Sort by country" onClick={sortByCountryAction} />
      <Button title="Reset" onClick={resetAction} />
      <Input id="filterByCountry" name="filterByCountry" value="" placeholder="Filter by country" type="text" />
    </Container>
  )
}

export default Filters