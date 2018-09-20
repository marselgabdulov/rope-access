import React from 'react'
import ModalComponent from '../components/ModalComponent'
import '../styles/hero.css'

const hero = () => (
  <div className="hero">
    <div className="hero__container">
      <div className="hero__titles">
        <span className="hero__main-title">Остекение</span>
        <span className="hero__secondary-title">
          Замена, монтаж и обслуживание.
        </span>
        <span className="hero__secondary-title">
          Работаем по всем Москве и области.
        </span>
        <span className="hero__secondary-title">Гарантия от 2-х лет.</span>
      </div>

      <div className="hero__contacts">
        <a className="hero__contacts-link" href="tel:+74957963303">
          +7 495 796-33-03
        </a>
        <a className="hero__contacts-link" href="mailto:info@vysotnik-msk.ru">
          info@vysotnik-msk.ru
        </a>
        <div className="hero__contacts-button">
          <ModalComponent />
        </div>
      </div>
    </div>
  </div>
  // <div className="hero">
  //   <div className="hero__container">
  //     <div className="hero__info">
  //       <span className="hero__title">Остекление</span>
  //       <br />
  //       <span className="hero__title-secondary">
  //         Замена, монтаж и обслуживание.
  //       </span>
  //       <br />
  //       <span className="hero__title-secondary">
  //         Работаем по всей Москве и области.
  //       </span>
  //       <br />
  //       <span className="hero__title-garanty">Гарантия от 2-х лет.</span>
  //     </div>
  //     <div className="hero__contact" id="hero__contact">
  //       <a className="hero__link" href="tel:+74957963303">
  //         +7 495 796-33-03
  //       </a>
  //       <a className="hero__link" href="mailto:info@vysotnik-msk.ru">
  //         info@vysotnik-msk.ru
  //       </a>
  //       <div className="hero__button">
  //         <ModalComponent />
  //       </div>
  //     </div>
  //   </div>
  // </div>
)

export default hero
