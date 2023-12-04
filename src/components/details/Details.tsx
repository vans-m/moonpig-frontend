import React, { FC } from 'react'
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
  const name = product.Title
  return (
    <>
      {isOpen && (
        <div className="details-overlay" onClick={closeDetails}>
          <div className="details-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeDetails}>
              &times;
            </span>
            <div className="details-image-wrapper">
              <CardImg image={image} name={name} />
            </div>
            <div className='details-actions-wrapper'>
                <Button secondary={true}>More details</Button>
                <Button secondary={false}>Buy now</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Details
