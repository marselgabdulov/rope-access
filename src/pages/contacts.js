import React from 'react'

import Layout from '../components/layout/layout'

const ContactsPage = () => (
  <Layout>
    <div className="container">
      <div className="aligner-center">
        <div className="row">
          <h1>ООО &laquo;Высотник&raquo;</h1>
        </div>
        <div className="row">
          <h3>Контактная информация</h3>
        </div>
        <div className="row">
          <div className="col">
            <ul>
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
                  href="https://wa.me/79651897920?text=Я%20заинтересован%20в%20заказе%20услуг%20остекления"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:info@vysotnik-msk.ru">info@vysotnik-msk.ru</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <h3>Юридическая информация</h3>
          <div className="row">
            <div className="col">
              <ul>
                <li>ОГРН: 1157746267216</li>
                <li>ИНН: 7722321736</li>
                <li>КПП: 772201001</li>
                <li>БИК: 044525201</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactsPage

{
  /* <div class="container">
  <section class="contact-page">
    <div class="contact-page__info">
      <span class="contact-page__title">ООО &laquo;Высотник&raquo;</span>
      <span class="contact-page__subtitle">Контактная информация</span>
      <div class="contact-page__address">
        <ul class="contact-page__list">
          <li class="contact-page__item">111033,</li>
          <li class="contact-page__item">г. Москва,</li>
          <li class="contact-page__item">Золоторожский средний</li>
          <li class="contact-page__item">переулок, д. 13</li>
        </ul>
        <ul class="contact-page__list">
          <li class="contact-page__item"><a class="contact-page__link" href="tel:+74957963303">+7 495 796-33-03</a></li>
          <li class="contact-page__item"><a class="contact-page__link" href="tel:+74953909633">+7 495 390-96-33</a></li>
          <li class="contact-page__item"><a class="contact-page__link whatsapp" href="https://wa.me/79651897920?text=Я%20заинтересован%20в%20заказе%20услуг%20остекления" target="_blank">WhatsApp</a></li>
          <li class="contact-page__item"><a class="contact-page__link" href="mailto:info@vysotnik-msk.ru">info@vysotnik-msk.ru</a></li>
        </ul>
      </div>
      <div class="contact-page__law">
        <span class="contact-page__subtitle">Юридическая информация</span>
        <ul class="contact-page__list">
          <li class="contact-page__item">ОГРН: 1157746267216</li>
          <li class="contact-page__item">ИНН: 7722321736</li>
          <li class="contact-page__item">КПП: 772201001</li>
          <li class="contact-page__item">БИК: 044525201</li>
        </ul>
      </div>
    </div>
  </section>
</div> */
}
