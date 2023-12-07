import React, { FC, useState } from 'react'
import './details.css'
import CardImg from '../cardImg/CardImg'
import { Product } from '../../types/product'
import Button from '../button/Button'

type DetailsProps = {
  isOpen: boolean
  closeDetails: () => void
  product: Product
}

const Details: FC<DetailsProps> = ({ isOpen, closeDetails, product }) => {
  const image = product.ProductImage.Link.Href
  const { Title: name, MoonpigProductNo: id } = product
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
    }, 500)
  }

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
          <Button type={'secondary'} to={`/product/${id}`}>
            More details
          </Button>
          <Button type={'primary'} action={handleAddToCart}>
            {isAdded ? 'Added!' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Details
