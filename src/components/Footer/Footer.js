import React from 'react'
import Link from 'gatsby-link'
import './footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div>
        <div className="row">
          <div className="col">
            <ul className="footer__address">
              <li>111033</li>
              <li>г. Москва</li>
              <li>Золоторожский средний</li>
              <li>переулок, д. 13</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <a href="tel:+74957963303">+7 495 796-33-03</a>
              </li>
              <li>
                <a href="tel:+74953909633">+7 495 390-96-33</a>
              </li>
              <li>
                <a
                  className="whatsapp"
                  href="https://wa.me/79651897920?text=Я%20заинтересован%20в%20заказе%20услуг%20остекления"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:info@vysotnik-msk.ru">info@vysotnik-msk.ru</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/services">Услуги</Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
              <li>
                <Link to="/blog">Блог</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <Link to="/vacancies">Вакансии</Link>
              </li>
              <li>
                <Link to="/partners">Партнерам</Link>
              </li>
              <li>
                <Link to="/investors">Инвесторам</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
