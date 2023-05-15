import { GameQuery } from '../App'
import useData from './useData'

export interface Platform {
  id: number
  name: string
  slug: string
}
export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: {
    map: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    platfrom: Platform[]
  }
  metacritic: number
  rating_top: number
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    'https://api.rawg.io/api/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  )
export default useGames
