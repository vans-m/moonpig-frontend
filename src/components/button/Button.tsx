import React, { FC, ReactNode } from 'react'
import './button.css'

type ButtonProps = {
  type: 'primary' | 'secondary'
  children: ReactNode
  action: () => void
}

const Button: FC<ButtonProps> = ({ type, children, action }) => {
  return (
    <button className={`button ${type}`} onClick={action}>
      {children}
    </button>
  )
}

export default Button
