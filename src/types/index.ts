type TypeProps = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type Poke = {
  order: number
  name: string
  types: TypeProps[]
  imageUrl: string
}
