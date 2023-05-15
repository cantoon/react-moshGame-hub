import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

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
}
interface FetchGamesResponse {
  count: number
  results: Game[]
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    apiClient
      .get<FetchGamesResponse>('https://api.rawg.io/api/games', {
        signal: controller.signal,
      })
      .then(res => setGames(res.data.results))
      .catch(err =>
        err instanceof CanceledError ? setError('') : setError(err.message)
      )
    return () => controller.abort()
  }, [])

  return { games, error }
}

export default useGames
