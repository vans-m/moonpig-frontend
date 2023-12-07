import React, { FC, useState } from 'react'
import './productListPage.css'
import Card from '../components/card/Card'
import { useFetch } from '../hooks/useFetch'
import { Product } from '../types/product'
import Button from '../components/button/Button'

type ProductListResponse = {
  SearchId: string
  NumberOfProducts: number
  Start: number
  Products: Product[]
  Facets: Record<string, unknown>[]
}

const ProductListPage: FC = () => {
  const { data, error, loading } = useFetch<ProductListResponse>(
    'https://moonpig.github.io/tech-test-frontend/search.json'
  )
  const products: Product[] = data?.Products ?? []
  const filteredProducts = products.filter((product) => product.SoldOut === 0)
  const [displayCount, setDisplayCount] = useState(10)

  const loadMore = () => {
    setDisplayCount(displayCount + 10)
  }

  if ((error || !data) && !loading) return <div>Something went wrong</div>

  return (
    <div>
      {loading && <div data-testid="loading">Loading...</div>}
      <ul className="card-list">
        {filteredProducts.slice(0, displayCount).map((product) => (
          <Card key={product.ProductId} product={product} />
        ))}
      </ul>
      {displayCount < filteredProducts.length && (
        <Button type="primary" action={loadMore} override="load-more">
          Load More
        </Button>
      )}
    </div>
  )
}

export default ProductListPage
