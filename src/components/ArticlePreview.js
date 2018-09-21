import React from 'react'
import Link from 'gatsby-link'

export default ({ article }) => (
  <div>
    <h3>
      <Link to={`/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.createdAt}</small>
  </div>
)
