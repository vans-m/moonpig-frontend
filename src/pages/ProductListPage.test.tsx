import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import ProductListPage from './ProductListPage'
import { useFetch } from '../hooks/useFetch'
import { mockProducts } from '../mocks/products'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: () => <a href="helo">Helloooo</a>,
}))

jest.mock('../hooks/useFetch')
jest.mock('../components/card/Card', () => () => (
  <div data-testid="card-mock"></div>
))

describe('Product list page', () => {
  test('Renders an initial list of products', () => {
    jest.mocked(useFetch).mockReturnValue({
      data: { Products: mockProducts },
      loading: false,
    })
    render(<ProductListPage />)
    const cards = screen.getAllByTestId('card-mock')
    expect(cards.length).toBe(10)
    expect(useFetch).toHaveBeenCalled()
  })
  test('Renders more products when load more is clicked', async () => {
    jest.mocked(useFetch).mockReturnValue({
      data: { Products: mockProducts },
      loading: false,
    })
    render(<ProductListPage />)
    const cards = screen.getAllByTestId('card-mock')
    expect(cards.length).toBe(10)
    const button = screen.getByRole('button')
    user.click(button)
    await waitFor(() => {
      const newCards = screen.getAllByTestId('card-mock')
      expect(newCards.length).toBe(20)
    })
  })
  test('Renders loading state', () => {
    jest.mocked(useFetch).mockReturnValue({
      data: undefined,
      loading: true,
    })
    render(<ProductListPage />)
    const loading = screen.getByText('Loading...')
    expect(loading).toBeInTheDocument()
  })
  test('Renders error state if error is returned', () => {
    jest.mocked(useFetch).mockReturnValue({
      error: 'error',
      loading: false,
    })
    render(<ProductListPage />)
    const error = screen.getByText('Something went wrong')
    expect(error).toBeInTheDocument()
  })
  test('Renders error state if no data', () => {
    jest.mocked(useFetch).mockReturnValue({
      data: undefined,
      loading: false,
    })
    render(<ProductListPage />)
    const error = screen.getByText('Something went wrong')
    expect(error).toBeInTheDocument()
  })
})
