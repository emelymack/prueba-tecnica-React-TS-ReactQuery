import { styled } from "styled-components"
import Button from "./Button"
import Input from "./Input"
import React from "react"

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
  filterByCountry: (e: React.ChangeEvent<HTMLInputElement>) => void,
  countryFilter: string
}

const Filters = ({colorRowsAction, sortByCountryAction, resetAction, filterByCountry, countryFilter }: actionTypes) => {
  return (
    <Container>
      <Button title="Color rows" onClick={colorRowsAction} />
      <Button title="Sort by country" onClick={sortByCountryAction} />
      <Button title="Reset" onClick={resetAction} />
      <Input id="filterByCountry" name="filterByCountry" value={countryFilter} placeholder="Filter by country" type="text" onChange={filterByCountry} />
    </Container>
  )
}

export default Filters