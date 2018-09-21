import React, { Component } from 'react'
import RequestForm from '../RequestForm/RequestForm'
import Modal from 'react-modal'
import './modal_component.css'

Modal.setAppElement('body')

class ModalComponent extends Component {
  state = {
    showModal: false,
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} className="modal__open-button">
          Заказать
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          className="modal__content"
          style={{ zIndex: '1000' }}
        >
          <div className="modal__header">
            <span className="form__header">Свяжитесь с нами</span>
            <span
              className="modal__close-button"
              onClick={this.handleCloseModal}
            >
              &times;
            </span>
          </div>
          <RequestForm />
        </Modal>
      </div>
    )
  }
}

export default ModalComponent
