export type TypeProps = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type StatsProps = {
  base_stat: number
  stat: {
    name: string
  }
}

export type Poke = {
  order: number
  name: string
  types: TypeProps[]
  imageUrl: string
  gifUrl: string
  stats: StatsProps[]
}
