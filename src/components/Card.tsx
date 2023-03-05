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

  const formatDate = (date: string) => {
    return date.slice(0, 10)
  }

  return (
    <div className='card'>
      <a href={repository.html_url}>
        <h2>{repository.name}</h2>
      </a>
      <p>Created At: {formatDate(repository.created_at)}</p>

      {isFavorite ? (
        <button className='btn btn__dislike' onClick={toggleFavorite}>
        <span>Dislike</span>
        </button>
      ) : (
        <button className='btn btn__like' onClick={toggleFavorite}>
        <span>Like</span>
        </button>
      )
    
    }
    
    </div>
  )
}

export default Card
