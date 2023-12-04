import React, { FC, ReactNode } from 'react'
import './button.css'

type ButtonProps = {
  secondary: boolean
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ secondary, children }) => {
  return (
    <button className={`button ${secondary ? 'secondary' : ''}`}>
        {children}
    </button>
  )
}

export default Button
