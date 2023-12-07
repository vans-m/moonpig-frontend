import React, { FC } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import './productPage.css'
import Button from '../components/button/Button'

type ProductDetails = {
  Title: string
  Description: string
  ImageUrls: ImageUrls[]
  ProductUrl: string
}

type ImageUrls = {
  ImageNo: number
  ImageUrl: string
}

const ProductPage: FC = () => {
  const { id } = useParams()
  const { data, error, loading } = useFetch<ProductDetails>(
    `https://moonpig.github.io/tech-test-frontend/product/${id}.json`
  )
  if (loading) return <div>Loading...</div>
  if ((error || !data) && !loading) return <div>Something went wrong</div>
  const imgUrl = data?.ImageUrls.length && data?.ImageUrls[0].ImageUrl
  return (
    <>
      <header>
        <Button type="secondary" to="/" override="back-button">
          Back
        </Button>
      </header>
      <div className="product-page-wrapper">
        {imgUrl && (
          <picture>
            <img
              src={imgUrl}
              alt="card description"
              data-testid="product-image"
            />
          </picture>
        )}
        <div>
          <div>
            <h1>{data?.Title}</h1>
            <p>{data?.Description}</p>
          </div>
          <a
            href={data?.ProductUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button primary buy-now"
          >
            Buy now
          </a>
        </div>
      </div>
    </>
  )
}

export default ProductPage
