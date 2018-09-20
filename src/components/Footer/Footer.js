import React from 'react'
import Link from 'gatsby-link'

export function Footer() {
  return (
    <div>
      <div className="grid">
        <h2 className="col md-push-1 lg-push-2">Свяжитесь с нами</h2>
      </div>

      <div className="grid">
        <p className="col sm-12 md-5 lg-3 md-push-1 lg-push-3 contact">
          <span className="contact-phone">
            <a href="tel:+74957963303">+7 495 796-33-03</a>
          </span>
          <span className="contact-phone">
            <a href="tel:+74953909633">+7 495 390-96-33</a>
          </span>
          <span className="contact-phone">
            <a href="https://wa.me/79651897920?text=Я%20заинтересован%20в%20заказе%20услуг%20остекления">
              WhatsApp
            </a>
          </span>
          <span className="contact-or">
            <span>или</span>
          </span>
          <a className="contact-link" href="mailto:info@vysotnik-msk.ru">
            info@vysotnik-msk.ru
          </a>
        </p>

        <div className="col fluid md-3 lg-2 md-push-1 lg-push-2 button-group">
          <Link to="/vacancies" className="button -block">
            Вакансии
          </Link>
          <Link to="/partners" className="button -block">
            Парнерам
          </Link>
          <Link to="/investors" className="button -block">
            Инвесторам
          </Link>
        </div>
      </div>
    </div>
  )
}
