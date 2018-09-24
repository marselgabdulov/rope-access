import React, { Component } from 'react'
import Layout from '../components/layout/layout'

class BlogPostTemplate extends Component {
  render() {
    const { title, content } = this.props.data.contentfulRopeAccessBlog
    return (
      <Layout>
        <div className="container">
          <h1>{title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulRopeAccessBlog(slug: { eq: $slug }) {
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
