import { IconDownload } from '@tabler/icons-react';
import Head from 'next/head';
import Link from 'next/link';
import Section from '../../components/Section';
import styles from './press.module.css';

export default function Press() {
  return (
    <>
      <Head>
        <title>Echo Photos - Press</title>
      </Head>
      <Section title="Press">
        <p className="mb-4">
          We have a collection of images in a press kit as well as a flyer
          containing the most important data of Echo Photos.
        </p>

        <Link
          href="https://drive.google.com/file/d/1PBWO5sMAmvOZXWJRvTqc7jXGNEVen-vp/view?usp=sharing"
          className={styles.link}
          target="_blank"
        >
          <IconDownload size={20} />
          Download Press Kit
        </Link>

        <Link
          href="https://drive.google.com/file/d/1QHwwimtBLHvvvqouhTmqMmy6Kn_ejor8/view?usp=sharing"
          className={styles.link}
          target="_blank"
        >
          <IconDownload size={20} />
          Download Flyer
        </Link>
      </Section>
    </>
  );
}
