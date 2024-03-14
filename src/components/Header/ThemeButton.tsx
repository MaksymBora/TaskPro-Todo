import { FC, useEffect, useRef, useState } from 'react';
import css from './ThemeSelect.module.css';

interface ThemeButtonProps {
  theme: string;
  onClick: () => void;
}

const ThemeButton: FC<ThemeButtonProps> = ({ theme, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      tabIndex={0}
      className={css.themeSelector}
    >
      {theme}
    </button>
  );
};

export const DropdownMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleTheme = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleThemeSelect = (theme: string) => {
    setSelectedTheme(theme);
    setIsOpen(false);

    console.log(selectedTheme);
  };

  // useEffect(() => {
  //   console.log('selectedTheme changed:', selectedTheme);
  // }, [selectedTheme]);

  return (
    <div ref={dropdownRef} className={css.themeWrapper}>
      <button type="button" className={css.themeButton} onClick={handleTheme}>
        Theme
        <svg fill="#161616" viewBox="0 0 32 32" width="16px" height="16px">
          <path
            stroke="currentColor"
            d="M16.946 17.867c-0.124 0.125-0.271 0.224-0.434 0.292s-0.337 0.103-0.513 0.103c-0.176 0-0.35-0.035-0.513-0.103s-0.31-0.167-0.434-0.292l-6.107-6.12c-0.124-0.125-0.271-0.224-0.434-0.292s-0.337-0.103-0.513-0.103c-0.176 0-0.35 0.035-0.513 0.103s-0.31 0.167-0.434 0.292c-0.248 0.25-0.388 0.588-0.388 0.94s0.139 0.69 0.388 0.94l6.12 6.12c0.75 0.749 1.767 1.17 2.827 1.17s2.077-0.421 2.827-1.17l6.12-6.12c0.246-0.248 0.385-0.584 0.387-0.933 0.001-0.175-0.033-0.349-0.099-0.512s-0.164-0.31-0.288-0.435c-0.124-0.125-0.272-0.224-0.434-0.292s-0.337-0.103-0.513-0.103c-0.176 0-0.35 0.035-0.513 0.103s-0.31 0.167-0.434 0.292l-6.107 6.12z"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className={css.dropdownMenu}>
          <li>
            <ThemeButton
              theme="Light"
              onClick={() => handleThemeSelect('light')}
            />
          </li>
          <li>
            {' '}
            <ThemeButton
              theme="Dark"
              onClick={() => handleThemeSelect('dark')}
            />
          </li>
        </ul>
      )}
    </div>
  );
};
