import { useQuery } from 'react-query'
import { useState, useEffect } from 'react'
import { getRandomUsers } from '../hooks/hooks';
import { User } from '../types/types';
import { styled } from 'styled-components';
import Button from './Button';
import Filters from './Filters';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const StyledTable = styled.table`
  border-spacing: 5px;
  width: 80%;
`
const StyledTableHead = styled.thead`
  text-transform: uppercase;
  letter-spacing: .5px;
  font-size: 20px;
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

const UserTable = () => {
  const query = useQuery({
    queryKey: ['getRandomUsers', 15],
    queryFn: ({queryKey}) => getRandomUsers(queryKey[1])
  })
  const { status, isLoading, isSuccess, isError, error, data } = query;
  const [colorState, setColorState] = useState(false)
  const [ users, setUsers ] = useState<User[]>([])
  const [ isSorted, setIsSorted ] = useState(false)

  const handleColorState = () => {
    setColorState(!colorState)
  }

  const handleSortByCountry = () => {
    setIsSorted(prevState => !prevState)
  }

  const updateUsers = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (a.location.country < b.location.country) {
        return -1;
      }
      if (a.location.country > b.location.country) {
        return 1;
      }
      return 0;
    });
    const updatedUsers = isSorted ? sortedUsers : data?.results
    setUsers(updatedUsers)
  }

  useEffect(() => {
    setUsers(data?.results)
  }, [isLoading])
  
  useEffect(() => {
    updateUsers()
  }, [isSorted]);
  

  return (
    <Container>
      <Filters colorRowsAction={() => handleColorState()} sortByCountryAction={() => handleSortByCountry()} resetAction={() => {}} />
      {isError && <h1>Error</h1>}
      {isLoading && <h3>Loading...</h3>}
      {
        data && !isLoading && (
          <StyledTable>
          <StyledTableHead>
            <tr>
              <th scope="col">Thumbnail</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Country</th>
              <th scope="col">Action</th>
            </tr>
          </StyledTableHead>
          <tbody style={{marginTop: '50px'}}>
          {users && users.map((item: User) => 
            <StyledTableRow activeColors={colorState}>
              <th scope="row"><img src={item.picture.thumbnail} /></th>
              <StyledTableData>{item.name.first}</StyledTableData>
              <StyledTableData>{item.name.last}</StyledTableData>
              <StyledTableData>{item.location.country}</StyledTableData>
              <StyledTableData>
                <Button title='Delete' onClick={() =>{}} />
              </StyledTableData>
            </StyledTableRow>
          )}
          </tbody>
        </StyledTable>
        )
        
      }
    </Container>
  )
}

export default UserTable