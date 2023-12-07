import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './button.css'

type ButtonProps = {
  type: 'primary' | 'secondary'
  children: ReactNode
  action?: () => void
  to?: string
  override?: string
}

const Button: FC<ButtonProps> = ({ type, children, action, to, override }) => {
  const styling = `button ${type} ${override}`
  if (to) {
    return (
      <Link className={styling} to={to}>
        {children}
      </Link>
    )
  }
  return (
    <button className={styling} onClick={action}>
      {children}
    </button>
  )
}

export default Button
