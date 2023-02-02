import { useEffect } from 'react';
import { Overlay, ModalContent } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = ({ toggleModal, title, children, actions }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') toggleModal();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handelBackdropClick = event => {
    if (event.currentTarget === event.target) toggleModal();
  };

  return createPortal(
    <Overlay onClick={handelBackdropClick}>
      <ModalContent>
        <h2>{title}</h2>
        <div>{children}</div>
        {actions && <div>{actions}</div>}
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
