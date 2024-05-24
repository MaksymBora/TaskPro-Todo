import { FC, useRef } from 'react';
import css from './EditAvatar.module.css';
import Icon from '@/components/utils/Icon';

export const EditAvatar: FC = () => {
  const filePicker = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;

    if (selectedFile) {
      console.log('Selected file: >>', selectedFile);
    }
  };

  const handlePick = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
  };

  return (
    <div className={css.avatarContainer}>
      <Icon name="icon-user-avatar" width="68px" height="68px" />

      <button type="button" className={css.selectBtn} onClick={handlePick}>
        <Icon name="icon-plus" width="10px" height="10px" fill="#161616" />
      </button>

      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*,.jpg,.png,.gif,.web,"
        className={css.fileInput}
        ref={filePicker}
      />
    </div>
  );
};
