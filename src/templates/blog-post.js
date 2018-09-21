import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BlogPost extends Component {
  render() {
    const { title, content } = this.props.data.contentfulRopeAccessBlog
    return (
      <div>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

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
