import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductListPage from './pages/ProductListPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  )
}

export default App
