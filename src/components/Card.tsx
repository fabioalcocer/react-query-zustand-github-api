import { Repository } from '../hooks/types'
import { useFavoriteReposStore } from '../store/favoriteList'

type CardProps = {
  repository: Repository
  isFavorite: boolean
}

function Card({ repository, isFavorite }: CardProps) {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  )
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  )

  const toggleFavorite = () => {
    if (isFavorite) {
      return removeFavoriteRepo(repository.id)
    }
    addFavoriteRepo(repository.id)
  }

  return (
    <div>
      <h1> {repository.name}</h1>
      <button onClick={toggleFavorite}>
        {isFavorite ? '💔' : '❤️'}
      </button>
    </div>
  )
}

export default Card
