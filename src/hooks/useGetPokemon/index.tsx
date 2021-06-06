import { useState } from 'react'

const useGetPokemon = () => {
  const [pokes, setPokes] = useState([])
  const [loading, setLoading] = useState(false)

  return { pokes, loading }
}

export default useGetPokemon
