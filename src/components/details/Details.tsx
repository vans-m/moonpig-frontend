import React, { FC } from 'react'
import './details.css'
import CardImg from '../cardImg/CardImg'
import { Product } from '../../types/product'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'

type DetailsProps = {
  isOpen: boolean
  closeDetails: () => void
  product: Product
}

const Details: FC<DetailsProps> = ({ isOpen, closeDetails, product }) => {
  const image = product.ProductImage.Link.Href
  const name = product.Title
  const navigate = useNavigate()

  if (!isOpen) return null

  return (
    <div className="details-overlay" onClick={closeDetails}>
      <div className="details-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeDetails}>
          &times;
        </span>
        <div className="details-image-wrapper">
          <CardImg image={image} name={name} />
        </div>
        <div className="details-actions-wrapper">
          <Button type={'secondary'} action={() => navigate('product')}>
            More details
          </Button>
          <Button type={'primary'} action={() => null}>
            Buy now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Details
