import { IconMenu, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import styles from './header.module.css';

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <header>
      <nav className="h-20 py-3 px-4 flex items-center justify-between w-full fixed bg-white">
        <Link className="nav-brand" href="/">
          <img
            src="/images/logo125.png"
            height="50"
            width="125"
            alt="EchoPhotos logo"
          />
        </Link>

        <button className="md:hidden" onClick={toggleOpen}>
          {isOpen ? <IconX /> : <IconMenu />}
        </button>

        <div
          className={`absolute top-20 left-0 px-6 pb-3 ${
            isOpen ? '' : 'hidden'
          } bg-white w-full  md:p-0 md:w-auto md:mr-2 md:top-0 md:relative md:block`}
        >
          <ul className="flex justify-between flex-col w-full gap-1 md:flex-row md:gap-6">
            <li>
              <Link className={styles.navLink} href="/#features">
                Features
              </Link>
            </li>

            <li>
              <Link className={styles.navLink} href="/#albums">
                Albums
              </Link>
            </li>

            <li>
              <Link className={styles.navLink} href="/#desktop">
                Desktop
              </Link>
            </li>

            <li>
              <Link className={styles.navLink} href="/">
                Download
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
