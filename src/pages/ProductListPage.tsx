import React, { FC } from 'react'
import Card from '../components/card/Card'
import { useFetch } from '../hooks/useFetch'

const ProductListPage: FC = () => {
  const { products, error, loading } = useFetch(
    'https://moonpig.github.io/tech-test-frontend/search.json'
  )
  if (error) return <div>Something went wrong</div>
  return (
    <div className="container">
      {loading && <div data-testid="loading">Loading data...</div>}
      <ul className="card-list">
        {products.map((product) => (
          <Card key={product.ProductId} product={product} />
        ))}
      </ul>
    </div>
  )
}

export default ProductListPage
