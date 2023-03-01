import Card from './components/Card'
import { useFetchRepositories } from './hooks/useRepos'

function App() {
  const { data, isLoading } = useFetchRepositories()

  if (isLoading) return <div>Loading...</div>

  console.log(data)

  return (
    <div className='App'>
      {data?.map((repository) => (
        <Card repository={repository} />
      ))}
    </div>
  )
}

export default App
