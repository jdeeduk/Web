import Head from 'next/head';
import Link from 'next/link';
import Section from '../components/Section';

export default function Press() {
  return (
    <>
      <Head>
        <title>Echo Photos - Press</title>
      </Head>
      <Section title="Press">
        <p>
          We have a collection of images in a press kit as well as a flyer
          containing the most improtat data of Echo Photos.
        </p>
        <p>
          <Link href="https://drive.google.com/file/d/1PBWO5sMAmvOZXWJRvTqc7jXGNEVen-vp/view?usp=sharing">
            <img src="/images/icons/arrow.down.circle.fill.svg" height="60" />{' '}
            Download Press Kit
          </Link>
        </p>
        <p>
          <Link href="https://drive.google.com/file/d/1QHwwimtBLHvvvqouhTmqMmy6Kn_ejor8/view?usp=sharing">
            <img src="/images/icons/arrow.down.circle.fill.svg" height="60" />{' '}
            Download Flyer
          </Link>
        </p>
      </Section>
    </>
  );
}
