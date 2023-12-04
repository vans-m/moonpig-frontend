import React, { FC } from 'react'
import './cardImg.css'

type CardImgProps = {
  image: string
  name: string
}

const CardImg: FC<CardImgProps> = ({ image, name }) => {
  return (
    <picture className="card-img-wrapper">
      <img src={image} alt={name} />
    </picture>
  )
}

export default CardImg
