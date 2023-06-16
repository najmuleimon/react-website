import React from 'react'

const SectionTitle = ({title, span, desc, maxWidth, centered}) => {
  return (
    <div className={`section-title ${centered && 'mx-auto text-center'}`} style={{maxWidth: maxWidth}}>
        <h2>{title} <span>{span}</span></h2>
        <p>{desc}</p>
    </div>
  )
}

export default SectionTitle