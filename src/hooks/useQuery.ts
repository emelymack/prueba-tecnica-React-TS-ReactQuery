import { useQuery } from 'react-query'
import { getRandomUsers } from '../hooks/hooks';

const query = useQuery({
  queryKey: ['getRandomUsers', 100],
  queryFn: ({queryKey}) => getRandomUsers(queryKey[1])
})

export default query;