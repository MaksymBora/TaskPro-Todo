/* eslint-disable @typescript-eslint/no-unused-expressions */
import ReactDOM from 'react-dom';
import css from './ModalWindow.module.css';

export const ModalWindow = ({ children }) => {
  const modalRoot = document.getElementById('#modal-root');

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button type="button" className={css.closeBtn}>
          close
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
