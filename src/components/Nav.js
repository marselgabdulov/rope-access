import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-small.png'

const Nav = () => (
  <header id="header">
    <nav className="nav">
      <input type="checkbox" id="nav" className="hidden" />
      <label htmlFor="nav" className="nav-btn">
        <i />
        <i />
        <i />
      </label>
      <div className="logo">
        <Link to="/" className="nav__link">
          <img src={logo} alt="Высотник" />
        </Link>
      </div>
      <div className="nav-wrapper">
        <ul className="nav__items">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Главная
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              О нас
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/services" className="nav__link">
              Услуги
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contacts" className="nav__link">
              Контакты
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/blog" className="nav__link">
              Блог
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Nav
