import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import { slide as Menu } from 'react-burger-menu'
import '../styles/nav.css'

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <Menu right>
          <Link to="/" className="menu-item" id="home">
            Главная
          </Link>

          <Link to="/about" className="menu-item" id="home">
            О нас
          </Link>

          <Link to="/services" className="menu-item" id="home">
            Услуги
          </Link>

          <Link to="/contacts" className="menu-item" id="home">
            Контакты
          </Link>

          <Link to="/blog" className="menu-item" id="home">
            Блог
          </Link>
        </Menu>
      </Fragment>
    )
  }
}

export default Nav
