import React from 'react'
import './App.css'
import { products } from './mocks/products'
import Card from './components/card/Card'

function App() {
  return (
    <div className="container">
      <ul className="card-list">
        {products.map((product) => (
          <Card key={product.ProductId} product={product} />
        ))}
      </ul>
    </div>
  )
}

export default App
