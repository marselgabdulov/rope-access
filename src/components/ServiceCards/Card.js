import React from 'react'
import Link from 'gatsby-link'
import './card.css'

const Card = props => {
  const style = {
    backgroundImage: `url(${props.image})`,
  }
  return (
    <div className="card">
      <div className="card__bg" style={style} />
      <span className="card__header">{props.header}</span>
      <span className="card__description">card description</span>
      <Link to={`/services#${props.to}`}>card link</Link>
    </div>
  )
}

export default Card
