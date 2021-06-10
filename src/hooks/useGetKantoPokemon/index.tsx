import { useState } from 'react'
import axios from 'axios'
import { UseGetKantoPokemon } from './type'

const useGetKantoPokemon = (): UseGetKantoPokemon => {
  const [pokes, setPokes] = useState([])
  const [loading, setLoading] = useState(false)

  const getPokes = (offset = 0): void => {
    setLoading(true)
    axios
      .get('/api/getPokes', {
        params: {
          offset,
        },
      })
      .then((results) => {
        setLoading(false)
        setPokes([...pokes, ...results.data])
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }

  return { pokes, loading, getPokes }
}

export default useGetKantoPokemon
