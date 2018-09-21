import React from 'react'
import Link from 'gatsby-link'

export default function VacancyTemplate({ data }) {
  const vacancy = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Все статьи</Link>
      <hr />
      <h1>{vacancy.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: vacancy.html }} />
    </div>
  )
}

export const vacancyQuery = graphql`
  query VacancyQueryByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
