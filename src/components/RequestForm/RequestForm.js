import React from 'react'
import './request_form.scss'

const RequestForm = () => (
  <form
    action="https://formspree.io/marsel.gabdulov@gmail.com"
    method="POST"
    className="request-form"
  >
    <input
      className="input-name"
      type="text"
      name="name"
      placeholder="Ваше имя"
      required
      autoFocus
    />
    <input
      className="input-email"
      type="email"
      name="email"
      placeholder="Ваш email"
      required
    />
    <input
      className="input-phone"
      type="tel"
      name="phone"
      placeholder="Ваш телефон"
      required
    />
    <input
      className="input-address"
      type="address"
      name="address"
      placeholder="Адрес Вашего объекта"
      required
    />
    <textarea
      className="input-problem"
      type="problem"
      name="problem"
      placeholder="Краткое описание проблемы"
    />
    <input
      className="input-date"
      type="text"
      name="data-time"
      placeholder="Удобное для Вас время и дата"
      required
    />
    <input type="submit" value="Отправить заявку" className="form-button" />
  </form>
)

export default RequestForm
