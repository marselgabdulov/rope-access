import React from 'react'

import Layout from '../components/layout/layout'
import ModalComponent from '../components/ModalComponent/ModalComponent'
import { Typewriter } from '../components/Typewriter/Typewriter'
import ServiceCards from '../components/ServiceCards/ServiceCards'
import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="hero__container">
        <div className="hero__info">
          <span className="hero__title">Остекление</span>
          <br />
          {/* <Typewriter
            className="hero__title-typing"
            texts={['Замена.', 'Монтаж.', 'Обслуживание.']}
          /> */}

          <br />
          <span className="hero__title-secondary">
            Работаем по всей Москве и области.
          </span>
          <br />
          <span className="hero__title-garanty">Гарантия от 2-х лет.</span>
        </div>
        <div className="hero__contact" id="hero__contact">
          <a className="hero__link" href="tel:+74957963303">
            +7 495 796-33-03
          </a>
          <a className="hero__link" href="mailto:info@vysotnik-msk.ru">
            info@vysotnik-msk.ru
          </a>
          <div className="hero__button">
            <ModalComponent />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <ServiceCards />
    </div>
  </Layout>
)

export default IndexPage
