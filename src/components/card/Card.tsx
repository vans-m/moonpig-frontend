import React, { FC, useState } from 'react'
import './card.css'
import Details from '../details/Details'
import CardImg from '../cardImg/CardImg'
import { Product } from '../../types/product'

type CardProps = {
  product: Product
}

const Card: FC<CardProps> = ({ product }) => {
  const image = product.ProductImage.Link.Href
  const name = product.Title
  const [areDetailsOpen, setAreDetailsOpen] = useState(false)

  const openDetails = () => {
    setAreDetailsOpen(true)
  }

  const closeDetails = () => {
    setAreDetailsOpen(false)
  }

  return (
    <li className="card-wrapper">
      <button onClick={openDetails} className="card-button">
        <CardImg image={image} name={name} />
      </button>
      <Details
        product={product}
        isOpen={areDetailsOpen}
        closeDetails={closeDetails}
      />
    </li>
  )
}

export default Card
