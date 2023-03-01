import Card from './components/Card'
import { useFetchRepositories } from './hooks/useRepos'
import { useFavoriteReposStore } from './store/favoriteList'

function App() {
  const { data, isLoading } = useFetchRepositories('fabioalcocer')
  const { favoriteReposIds } = useFavoriteReposStore()

  if (isLoading) return <div>Loading...</div>

  console.log(data)

  return (
    <div className='App'>
      {data?.map((repository) => (
        <Card
          key={repository.id}
          repository={repository}
          isFavorite={favoriteReposIds.includes(repository.id)}
        />
      ))}
    </div>
  )
}

export default App
