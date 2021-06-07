import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { UseGetKantoPokemon } from './type'

const useGetKantoPokemon = (): UseGetKantoPokemon => {
  const [pokes, setPokes] = useState([])
  const [loading, setLoading] = useState(false)

  const getKantoPokes = useCallback(() => {
    setLoading(false)
    axios
      .get('/api/getKantoPokes')
      .then((results) => {
        setLoading(false)
        setPokes(results.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    getKantoPokes()
  }, [getKantoPokes])

  return { pokes, loading }
}

export default useGetKantoPokemon
