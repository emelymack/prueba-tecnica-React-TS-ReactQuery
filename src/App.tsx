import { QueryClient, QueryClientProvider } from 'react-query'
import UserTable from './Components/UserTable/UserTable'
import Title from './Components/Title'
import Container from './Components/Container'


function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Title />
        <UserTable/>
      </Container> 
    </QueryClientProvider>
  )
}

export default App
