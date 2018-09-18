import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__address footer__section">
        <span class="footer__block-header">Адрес</span>
        <ul class="footer__items">
          <li class="footer__item">111033, г. Москва,</li>
          <li class="footer__item">Золоторожский средний</li>
          <li class="footer__item">переулок, д. 13</li>
        </ul>
      </div>
      <div class="footer__contacts  footer__section">
        <span class="footer__block-header">Контакты</span>
        <ul class="footer__items">
          <li class="footer__item">
            <a class="footer__link" href="tel:+74957963303">
              +7 495 796-33-03
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="tel:+74953909633">
              +7 495 390-96-33
            </a>
          </li>
          <li class="footer__item">
            <a
              class="footer__link whatsapp"
              href="https://wa.me/79651897920?text=Я%20заинтересован%20в%20заказе%20услуг%20остекления"
            >
              WhatsApp
            </a>
          </li>
          <li class="footer__item footer__contacts-item">
            <a class="footer__link" href="mailto:info@vysotnik-msk.ru">
              info@vysotnik-msk.ru
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__requisites  footer__section">
        <span class="footer__block-header">Меню</span>
        <ul class="footer__items">
          <li className="footer__item">
            <Link to="/" className="footer__link">
              Главная
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/about" className="footer__link">
              О нас
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/services" className="footer__link">
              Услуги
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/contacts" className="footer__link">
              Контакты
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/blog" className="footer__link">
              Блог
            </Link>
          </li>
        </ul>
      </div>
      <div class="footer__working-time  footer__section">
        <span class="footer__block-header">Время работы</span>
        <ul class="footer__items">
          <li>Ежедневно: 9:00—20:00</li>
        </ul>
      </div>

      <div class="footer__admin-links  footer__section">
        <ul class="footer__items">
          <li className="footer__item">
            <Link to="/admin" className="footer__link">
              техподдержка
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/vacancies" className="footer__link">
              викансии
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
