import React from 'react'

import Layout from '../components/layout/layout'
import ModalComponent from '../components/ModalComponent/ModalComponent'
import { Typewriter } from '../components/Typewriter/Typewriter'
import ServiceCards from '../components/ServiceCards/ServiceCards'
import '../styles/index.css'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="intro-container">
      <section className="intro">
        <div className="intro__info">
          <p>ООО &laquo;Высотник&raquo;</p>
          <h1>Высотные работы по Москве и области</h1>
          <Typewriter
            className="intro__typing"
            texts={['Остекление', 'Монтаж', 'Мойка']}
          />
          <p>
            <span>Гарантия от 2-х лет</span>
            <br />
            <a href="tel:+74957963303">+7 495 796-33-03</a>
            <br />
            <a href="mailto:info@vysotnik-msk.ru">info@vysotnik-msk.ru</a>
          </p>
          <div className="intro__modal">
            <ModalComponent />
          </div>
        </div>

        <div className="intro__image" />
      </section>
    </div>
    <div className="container">
      <ServiceCards />
    </div>
  </Layout>
)

export default IndexPage
