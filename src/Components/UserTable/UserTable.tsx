import { useQuery } from 'react-query'
import { useState, useEffect } from 'react'
import { getRandomUsers } from '../../hooks/hooks';
import { User } from '../../types/types';
import Button from '../Button';
import Filters from '../Filters';
import { sortByCountry } from './utils';
import Error from '../Error';
import {StyledContainer, StyledTable, StyledTableData, StyledTableHead, StyledTableRow, Styledth} from './UserTable.styles'


const UserTable = () => {
  const query = useQuery({
    queryKey: ['getRandomUsers', 100],
    queryFn: ({queryKey}) => getRandomUsers(queryKey[1])
  })
  const { status, isLoading, isError, data } = query;
  const [ users, setUsers ] = useState<User[]>([])
  const initialData = data && data.results

  const [colorState, setColorState] = useState(false)
  const [ isSorted, setIsSorted ] = useState(false)
  const [ countryFilter, setCountryFilter ] = useState('')
  const [ deletedUsers, setDeletedUsers ] = useState<User[]>([])

  const handleColorState = () => {
    setColorState(!colorState)
  }

  const handleSortByCountry = () => {
    setIsSorted(prevState => !prevState)
  }

  const updateUsers = () => {
    const originalArray = initialData?.filter((item: User) => users.includes(item))
    const sortedUsers = sortByCountry([...users])
    const updatedUsers = isSorted ? sortedUsers : originalArray

    setUsers(updatedUsers)
  }

  const handleDelete = (idName: string, idValue: string) => {
    const userDelete = users.find((user) => {return user.id.name === idName || user.id.value === idValue})
    const updatedArray = [...users].filter((user) => {
      return (user.id.name !== idName || user.id.value !== idValue)
    })

    userDelete && setDeletedUsers([...deletedUsers, userDelete])

    setUsers(updatedArray)
  }

  const handleReset = () => {
    isSorted ? setUsers(sortByCountry([...initialData])) : setUsers([...initialData])
    setCountryFilter('')
    setDeletedUsers([])
  }

  const handleFilterByCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryFilter(e.target.value)
  }

  useEffect(() => {
    setUsers(data?.results)               
  }, [isLoading, status])
  
  useEffect(() => {
    users && updateUsers()
  }, [isSorted]);

  useEffect(() => {
    const originalArray = initialData?.filter((item: User) => !deletedUsers.includes(item))

    const usersByCountry = originalArray?.filter((user: User) => {
      const userCountry = user.location.country.toLowerCase()
      return userCountry.match(countryFilter.toLowerCase())
    })

    if(countryFilter === '') {
      setUsers(originalArray)
    } else{
      setUsers(usersByCountry);
    }     
  }, [countryFilter]);
  

  return (
    <StyledContainer>
      <Filters 
        colorRowsAction={() => handleColorState()} 
        sortByCountryAction={() => handleSortByCountry()} 
        resetAction={() => handleReset()} 
        filterByCountry={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterByCountry(e)}
        countryFilter={countryFilter}
      />
      {isError && <Error />}
      {isLoading && <h3>Loading...</h3>}
      {users?.length < 1 && <h3>No results found</h3>}
      {
        users?.length >= 1 && !isLoading && (
          <StyledTable style={{marginTop: '25px'}}>
          <StyledTableHead>
            <tr>
              <Styledth scope="col">Thumbnail</Styledth>
              <Styledth scope="col">First Name</Styledth>
              <Styledth scope="col">Last Name</Styledth>
              <Styledth scope="col">Country</Styledth>
              <Styledth scope="col">Action</Styledth>
            </tr>
          </StyledTableHead>
          <tbody>
          {users && users.map((item: User) => 
            <StyledTableRow activeColors={colorState}>
              <th><img src={item.picture.medium} /></th>
              <StyledTableData>{item.name.first}</StyledTableData>
              <StyledTableData>{item.name.last}</StyledTableData>
              <StyledTableData>{item.location.country}</StyledTableData>
              <StyledTableData>
                <Button title='Delete' onClick={() => handleDelete(item.id.name, item.id.value)} />
              </StyledTableData>
            </StyledTableRow>
          )}
          </tbody>
        </StyledTable>
        )
      }
    </StyledContainer>
  )
}

export default UserTable