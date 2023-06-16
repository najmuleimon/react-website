import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryButton = ({children, link, padding, border, className}) => {
  return (
    <Link to={link} style={{padding: padding, border: border}} className={`primary-btn ${className}`}>
        {children}
    </Link>
  )
}

export default PrimaryButton