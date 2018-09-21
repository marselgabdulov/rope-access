const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for blog post nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogPostTemplate = path.resolve('src/templates/blog-post.js')
  const getBlogPost = makeRequest(
    graphql,
    `
    {
      allContentfulRopeAccessBlog(limit: 100) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each blog post.
    result.data.allContentfulRopeAccessBlog.edges.forEach(edge => {
      createPage({
        path: edge.node.slug,
        component: blogPostTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
    return
  })

  const vacancyTemplate = path.resolve('src/templates/vacancy.js')
  const getVacancy = makeRequest(
    graphql,
    `
         {
           allMarkdownRemark(
             filter: { frontmatter: { vacancy: { eq: true } } }
           ) {
             edges {
               node {
                 html
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
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: vacancyTemplate,
      })
    })
    return
  })

  // Queries for blog posts and vacancies nodes to use in creating pages.
  return Promise.all([getBlogPost, getVacancy])
}
