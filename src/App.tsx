import Card from './components/Card'
import Loader from './components/Loader'
import { useFetchRepositories } from './hooks/useRepos'
import { useFavoriteReposStore } from './store/favoriteList'
import { useUsernameSearch } from './store/userName'
import { FormEvent, useState } from 'react'

type NameForm = HTMLFormElement & {
  username: HTMLInputElement
}

function App() {
  const { username, setUsername } = useUsernameSearch()
  const { favoriteReposIds } = useFavoriteReposStore()
  const { data, isLoading } = useFetchRepositories(username)

  if (isLoading) return <Loader />

  const handleSubmit = (e: FormEvent<NameForm>) => {
    e.preventDefault()

    setUsername(e.currentTarget.username.value)
  }

  return (
    <div className='App'>
      <h1>Github Profile Search</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            id='username'
            type='text'
            name='username'
            placeholder='@Username...'
          />
          <button type='submit' className='input-btn'>
            <span>Search</span>
            <div id='container-stars'>
              <div id='stars'></div>
            </div>
          </button>
        </form>
      </div>
      <section>
        {data?.map((repository) => (
          <Card
            key={repository.id}
            repository={repository}
            isFavorite={favoriteReposIds.includes(repository.id)}
          />
        ))}
      </section>
    </div>
  )
}

export default App
