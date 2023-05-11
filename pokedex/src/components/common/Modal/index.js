import MuiModal from '@mui/material/Modal';
import styles from './Modal.module.css';

const Modal = ({
  children,
  isOpen,
  handleClose,
  modalName,
  modalDescription,
}) => {
  const { closeIcon, contentWrapper, content } = styles;

  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby={`modal-${modalName}`}
      aria-describedby={`modal-${modalDescription}`}
    >
      <div className={contentWrapper}>
        <div className={closeIcon} onClick={handleClose} />
        <div className={content}>{children}</div>
      </div>
    </MuiModal>
  );
};

export default Modal;
