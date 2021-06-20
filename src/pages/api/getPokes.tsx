import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const offset = req.query?.offset || 0
  const limit = 20
  const url = process.env.POKE_URL + '/pokemon'

  if (req.method !== 'GET')
    return res.status(500).json({ message: 'Wrong request method' })

  return new Promise((resolve) => {
    axios
      .get(url, {
        params: {
          offset,
          limit,
        },
      })
      .then(async ({ data: { results } }) => {
        const pokes = await Promise.all(
          results.map(async ({ url }) => {
            const { data } = await axios.get(url)
            return {
              ...data,
              imageUrl: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
              gifUrl: `https://www.smogon.com/dex/media/sprites/xy/${data.name}.gif`,
            }
          })
        )
        res.status(200).json(pokes)
        resolve()
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json(error)
        resolve()
      })
  })
}
