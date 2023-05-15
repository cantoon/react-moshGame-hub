import useData from './useData'
import { Genre } from './useGenres'

export interface Platform {
  id: number
  name: string
  slug: string
}
export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platfrom: Platform[] }
  metacritic: number
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    'https://api.rawg.io/api/games',
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  )
export default useGames
