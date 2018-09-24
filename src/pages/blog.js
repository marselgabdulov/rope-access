import React from 'react'
import get from 'lodash/get'
import ArticlePreview from '../components/ArticlePreview'
import Layout from '../components/layout/layout'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulRopeAccessBlog.edges')

    return (
      <Layout>
        <div className="container">
          <h2>Блог</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulRopeAccessBlog(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
