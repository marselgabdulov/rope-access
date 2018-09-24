import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'

import { BurgerIcon } from '../../icons/BurgerIcon'
import { CrossIcon } from '../../icons/CrossIcon'
import './nav.css'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpened: false }
  }

  handleClose = () => this.setState({ isOpened: false })
  handleOpen = () => this.setState({ isOpened: true })

  renderLinks = (links, onClick) => {
    return links.map(link => (
      <Link key={link.to} to={link.to} title={link.name} onClick={onClick}>
        {link.name}
      </Link>
    ))
  }

  render() {
    const links = [
      { name: 'главная', to: '/' },
      // { name: 'о нас', to: '/about' },
      { name: 'услуги', to: '/services' },
      { name: 'контакты', to: '/contacts' },
      { name: 'блог', to: '/blog' },
    ]
    return (
      <Fragment>
        <a
          href="#"
          className="mobile-menu -open"
          onClick={this.handleOpen}
          role="button"
          tabIndex={0}
        >
          <BurgerIcon />
        </a>

        <nav
          id="mobile-nav"
          className={`main-nav -mobile ${
            this.state.isOpened ? 'is-opened' : null
          }`}
        >
          <a
            href="#"
            className="mobile-menu -close"
            onClick={this.handleClose}
            role="button"
            tabIndex={0}
          >
            <CrossIcon />
          </a>
          {this.renderLinks(links, this.handleClose)}
        </nav>
        <nav className="main-nav -desktop ">{this.renderLinks(links)}</nav>
      </Fragment>
    )
  }
}

export default Nav
