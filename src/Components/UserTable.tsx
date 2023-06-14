import { useQuery } from 'react-query'
import { useState, useEffect } from 'react'
import { getRandomUsers } from '../hooks/hooks';
import { User } from '../types/types';
import { styled } from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const StyledTable = styled.table`
  border-spacing: 20px;
  width: 80%;
`
const StyledTableHead = styled.thead`
  text-transform: uppercase;
  letter-spacing: .5px;
  font-size: 20px;
`
const StyledTableData = styled.td`
  text-align: center;
`

const UserTable = () => {
  const query = useQuery({
    queryKey: ['getRandomUsers', 100],
    queryFn: ({queryKey}) => getRandomUsers(queryKey[1])
  })
  const { status, isLoading, isSuccess, isError, error, data } = query;

  return (
    <Container>
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
          {data?.results.map((item: User) => 
            <tr>
              <th scope="row"><img src={item.picture.thumbnail} /></th>
              <StyledTableData>{item.name.first}</StyledTableData>
              <StyledTableData>{item.name.last}</StyledTableData>
              <StyledTableData>{item.location.country}</StyledTableData>
              <StyledTableData>
                <Button title='Delete' onClick={() =>{}} />
              </StyledTableData>
            </tr>
          )}
          </tbody>
        </StyledTable>
        )
        
      }
    </Container>
  )
}

export default UserTable