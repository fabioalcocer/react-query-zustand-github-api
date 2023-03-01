import Card from './components/Card'
import Loader from './components/Loader'
import { useFetchRepositories } from './hooks/useRepos'
import { useFavoriteReposStore } from './store/favoriteList'
import { FormEvent, useState } from 'react'

type NameForm = HTMLFormElement & {
  username: HTMLInputElement
}

function App() {
  const [username, setUsername] = useState('octocat')

  const { data, isLoading } = useFetchRepositories(username)
  const { favoriteReposIds } = useFavoriteReposStore()

  if (isLoading) return <Loader />

  const handleSubmit = (e: FormEvent<NameForm>) => {
    e.preventDefault()

    setUsername(e.currentTarget.username.value)
  }

  return (
    <div className='App'>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' name='username' />
          <button type='submit'>Buscar</button>
        </form>
      </div>
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
