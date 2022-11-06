// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalBox } from './Modal.styled';

// ({ url, title, closeModal }) =>

const modalRoot = document.querySelector('#modal');

function Modal({ modalData, closeModal }) {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleCloseByEsc);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleCloseByEsc);
  // }

  const handleCloseByEsc = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  window.addEventListener('keydown', handleCloseByEsc);
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBox>
        <img src={modalData.largeImageURL} alt={modalData.tags} />
      </ModalBox>
    </Overlay>,
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalData: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
