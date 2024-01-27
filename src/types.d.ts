interface Product {
  id: string
  id_tienda: string
  name: string
  image: string
  price: number
  url: string
}

interface Store {
  name: string
  url: string
  logo: string
}

type Products = Product[]

type Stores = Store[]
