import React from 'react'

function SectionTitle({ heading, title }) {
  return (
    <div className="section-title">
      <span className="section-subtitle">{heading}</span>
      <h2 className="section-name">{title}</h2>
    </div>
  )
}

export default SectionTitle
