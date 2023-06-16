import React from 'react'

const FeatureCard = ({data}) => {
    const {icon, title, desc} = data || {}

  return (
    <div className='feature-card transition h-100'>
        <div className="icon d-flex align-items-center justify-content-center">
            <img src={require(`../../../assets/images/${icon}`)} alt="" className='img-fluid w-100' />
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default FeatureCard