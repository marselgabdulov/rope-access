import React from 'react'

import Layout from '../components/layout/layout'

const ContactsPage = () => (
  <Layout>
    <div className="container">
      <div>
        <div className="row">
          <h1>ООО &laquo;Высотник&raquo;</h1>
        </div>
        <div className="row">
          <h3>Контакты</h3>
        </div>
        <div className="row-small">
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
                  className="whatsapp"
                  href="https://wa.me/79651897920?text=Я%20заинтересован%20в%20заказе%20услуг%20остекления"
                  target="_blank"
                  rel="noopener noreferrer"
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
          <h3>Реквизиты</h3>
        </div>
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
  </Layout>
)

export default ContactsPage
