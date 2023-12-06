import { useEffect, useState } from 'react'
import { Product } from '../types/product'

type useFetchReturn = {
  products: Product[]
  loading: boolean
  error: string
}

export const useFetch = (api: string): useFetchReturn => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(api)
      const data = await response.json()
      setLoading(false)
      setProducts(data.Products ?? [])
    }
    fetchData().catch((err) => {
      setError(err)
      setLoading(false)
    })
  }, [api])
  console.log(products)
  return { products, loading, error }
}
