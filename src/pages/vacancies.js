import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout/layout'

const VacanciesPage = ({ data }) => (
  <Layout>
    <div>
      <h1>Vacancies</h1>
      {data.allMarkdownRemark.edges.map(vacancy => (
        <div key={vacancy.node.id}>
          <h3>{vacancy.node.frontmatter.title}</h3>
          <small>{vacancy.node.frontmatter.date}</small>
          <br />
          <Link to={vacancy.node.frontmatter.path}>
            {vacancy.node.frontmatter.title}
          </Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query VacanciesIndexQuery {
    allMarkdownRemark(filter: { frontmatter: { vacancy: { eq: true } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`

export default VacanciesPage
