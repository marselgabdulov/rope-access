import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'

import Animate from 'react-smooth'

import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import '../../styles/normalize.css'
import '../../styles/layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,600&amp;subset=cyrillic,cyrillic-ext"
            rel="stylesheet"
          />
          <html lang="en" />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        <div className="nav__container">
          <Nav />
        </div>
        <Animate from={{ opacity: 0 }} to={{ opacity: 1 }} easing="ease-in">
          {({ opacity }) => <main style={{ opacity }}>{children}</main>}
        </Animate>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
