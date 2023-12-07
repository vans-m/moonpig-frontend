import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductPage from './ProductPage'
import { useFetch } from '../hooks/useFetch'
import { mockProduct } from '../mocks/product'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 'product-id',
  }),
  Link: () => <a href="helo">Helloooo</a>,
}))

jest.mock('../hooks/useFetch')

describe('Product page', () => {
  test('Renders product from params id', () => {
    jest.mocked(useFetch).mockReturnValue({
      data: mockProduct,
      loading: false,
    })
    render(<ProductPage />)
    const title = screen.getByText(mockProduct.Title)
    const image = screen.getByRole('img')
    expect(title).toBeInTheDocument()
    expect(image).toHaveAttribute('src', mockProduct.ImageUrls[0].ImageUrl)
    expect(useFetch).toHaveBeenCalledWith(
      'https://moonpig.github.io/tech-test-frontend/product/product-id.json'
    )
  })
  test('Renders loading state', () => {
    jest.mocked(useFetch).mockReturnValue({
      data: mockProduct,
      loading: true,
    })
    render(<ProductPage />)
    const loading = screen.getByText('Loading...')
    expect(loading).toBeInTheDocument()
  })
  test('Renders error state if error is returned', () => {
    jest.mocked(useFetch).mockReturnValue({
      error: 'error',
      loading: false,
    })
    render(<ProductPage />)
    const error = screen.getByText('Something went wrong')
    expect(error).toBeInTheDocument()
  })
  test('Renders error state if no data', () => {
    jest.mocked(useFetch).mockReturnValue({
      data: undefined,
      loading: false,
    })
    render(<ProductPage />)
    const error = screen.getByText('Something went wrong')
    expect(error).toBeInTheDocument()
  })
})
