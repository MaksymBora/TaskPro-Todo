import { FC, useState } from 'react';
import Modal from 'react-modal';
import css from './HelpModal.module.css';

Modal.setAppElement('#help-modal-root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
};

export const HelpModal: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Need Help Modal"
        className={css.Modal}
      >
        <h2>Test</h2>
        <h2>Test</h2>
      </Modal>
    </div>
  );
};
