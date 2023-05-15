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
  parent_platforms: { platfrom: Platform[] }
  metacritic: number
}

const useGames = () => useData<Game>('https://api.rawg.io/api/games')
export default useGames
