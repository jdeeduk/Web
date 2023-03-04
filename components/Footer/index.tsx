import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className="bg-neutral-100 py-12 text-sm">
      <div className="container mx-auto text-center flex flex-col items-center">
        <Link href="/" className="hover:underline mb-4">
          Echo Photos
        </Link>

        <ul className="flex gap-6 mt-4">
          <li>
            <Link className={styles.footerLink} href="/">
              Home
            </Link>
          </li>

          <li>
            <Link className={styles.footerLink} href="/#albums">
              Albums
            </Link>
          </li>

          <li>
            <Link
              className={styles.footerLink}
              href="https://web.echophotos.io"
              target="_blank"
            >
              Web App
            </Link>
          </li>

          <li>
            <Link
              href="http://instagram.com/echophotos.io"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.footerLink}
            >
              Instagram
            </Link>
          </li>

          <li>
            <Link className={styles.footerLink} href="/">
              Download
            </Link>
          </li>

          <li>
            <Link className={styles.footerLink} href="/privacy">
              Privacy
            </Link>
          </li>

          <li>
            <Link className={styles.footerLink} href="/press">
              Press
            </Link>
          </li>
        </ul>

        <p className="text-neutral-500 font-light text-xs leading-5 mt-6 mb-8">
          Copyright &copy;{' '}
          <Link href="http://www.echolabs.ch" className="text-neutral-800">
            {' '}
            Echo Labs AG
          </Link>{' '}
          | All rights reserved.
        </p>

        <span className="text-neutral-500 mb-4">Coded with ❤️ in 🇨🇭</span>
      </div>
    </footer>
  );
}
