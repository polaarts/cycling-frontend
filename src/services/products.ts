export const getProducts = async (page: number, quantity: number) => {
  try {
    const response = await fetch(`http://localhost:3001/products?page=${page}&quantity=${quantity}`)

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`)
    }

    const products = await response.json()
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const getSearchedProducts = async (search: string) => {
  try {
    const response = await fetch(`http://localhost:3001/products/search/${search}`)

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`)
    }

    const products = await response.json()
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const getStores = async () => {
  const response = await fetch('localhost:3000/stores')
  const data = await response.json()
  return data
}
