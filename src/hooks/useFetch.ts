import { useEffect, useState } from 'react'

export interface useFetchReturn<R> {
  data?: R
  loading: boolean
  error?: string
}

export const useFetch = <R>(api: string): useFetchReturn<R> => {
  const [data, setData] = useState<R>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(api)
      const dataResponse = await response.json()
      setLoading(false)
      setData(dataResponse ?? {})
    }
    fetchData().catch((err) => {
      setError(err)
      setLoading(false)
    })
  }, [api])
  return { data, loading, error }
}
