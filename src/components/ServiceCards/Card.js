import React from 'react'
import Link from 'gatsby-link'
import './card.css'

const Card = props => {
  return (
    <div className="card">
      <span className="card__header">{props.header}</span>
      <span className="card__description">card description</span>
      <Link to={`/services#${props.to}`}>card link</Link>
    </div>
  )
}

export default Card
