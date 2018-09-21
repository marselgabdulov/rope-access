import React from 'react'
import get from 'lodash/get'
import ArticlePreview from '../components/ArticlePreview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulRopeAccessBlog.edges')

    return (
      <div style={{ background: '#fff' }}>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
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
      </div>
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
