import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalBox } from './Modal.styled';

// ({ url, title, closeModal }) =>

const modalRoot = document.querySelector('#modal');

class Modal extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseByEsc);
  }

  handleCloseByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { modalData } = this.props.modalData;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalBox>
          <img src={modalData.largeImageURL} alt={modalData.tags} />
        </ModalBox>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalData: PropTypes.arrayOf(
    PropTypes.shape({
      modalData: PropTypes.arrayOf(
        PropTypes.shape({
          largeImageURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    })
  ),
};
