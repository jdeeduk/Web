import {
  IoLockClosed,
  IoLeaf,
  IoImages,
  IoStar,
  IoRadioOutline,
  IoPeople,
  IoSparkles,
} from "react-icons/io5";
import { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import AppStore from '../components/AppStore';
import Button from '../components/Button';
import Feature from '../components/Feature';
import GooglePlay from '../components/GooglePlay';
import styles from './Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'home'])),
    },
  };
}

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="pt-5 pb-24">
        <div
          className={`flex md:flex-row flex-col justify-center text-center md:text-left items-center ${styles.sectionContainer}`}
        >
          <div className="md:w-1/2 flex justify-center items-center px-2">
            <img
              src="images/title.png"
              alt={t('home:image-alt-text') ?? ''}
              width="300"
            />
          </div>

          <div className="md:w-1/2 flex flex-col px-2 md:mt-0 mt-10">
            <h1 className="font-bold mb-6">{t('home:title')}</h1>

            <p className="mb-6">{t('home:subtitle')}</p>

            <div className="flex items-center justify-center md:justify-start">
              <AppStore />

              <GooglePlay />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 pb-40" id="features">
        <div
          className={`flex flex-col items-center text-center md:text-left ${styles.sectionContainer} px-4`}
        >
          <h2 className="font-bold mb-10 md:mb-6">
            {t('home:features.title')}
          </h2>

          <div className="md:grid flex flex-col grid-rows-3 grid-cols-3 grid-flow-col gap-10 md:gap-y-4">
            <Feature
              icon={<IoImages />}
              title={t('home:features.list.0.title')}
            >
              {t('home:features.list.0.description')}
            </Feature>

            <Feature
              icon={<IoLockClosed />}
              title={t('home:features.list.1.title')}
            >
              {t('home:features.list.1.description')}
            </Feature>

            <Feature
              icon={<IoStar />}
              title={t('home:features.list.2.title')}
            >
              {t('home:features.list.2.description')}
            </Feature>

            <div className="row-span-3 my-auto mx-auto">
              <img
                src="images/iphone.png"
                alt={t('home:features.image-alt-text') ?? ''}
              />
            </div>

            <Feature
              icon={<IoRadioOutline />}
              title={t('home:features.list.3.title')}
            >
              {t('home:features.list.3.description')}
            </Feature>

            <Feature
              icon={<IoSparkles />}
              title={t('home:features.list.4.title')}
            >
              {t('home:features.list.4.description')}
            </Feature>

            <Feature
              icon={<IoPeople />}
              title={t('home:features.list.5.title')}
            >
              {t('home:features.list.5.description')}
            </Feature>
          </div>
        </div>
      </section>

      <section className="bg-zinc-800 py-20">
        <div
          className={`${styles.sectionContainer} flex md:flex-row flex-col items-center text-center md:text-left`}
        >
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src="images/groups.png"
              alt="Phone with a demo view of the Groups feature."
            />
          </div>

          <div className="md:w-1/2 my-auto px-4">
            <h3 className="text-white">Say no to Tracking!</h3>

            <h2 className="font-bold text-white mb-2.5 flex text-[2.25rem] gap-2 items-center justify-center md:justify-start">
              Premium Privacy
              <IoLockClosed color="white" size={30} />
            </h2>

            <p className={styles.privacyText}>
              Echo Photos does not monetize your private data. We do not track
              user data for ads or to sell them. For us, you are our customer -
              you deserve our best service!
            </p>

            <p className={styles.privacyText}>
              Your memories are in a safe place. Using the highest security
              standards, we keep up with the newest safety features.
            </p>

            <p className={styles.privacyText}>
              Our servers run with cutting-edge security features - we do not
              put anything at risk.
            </p>

            <p className={styles.privacyText}>
              Privacy is our top concern. All your data is securely stored in
              Switzerland 🇨🇭. One should never worry about the protection of
              one's pictures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div
          className={`${styles.sectionContainer} flex md:flex-row flex-col items-center`}
        >
          <div className="md:w-1/2 text-center md:text-right my-auto px-6">
            <h3 className="text-green-700">Care for the Climate</h3>

            <h2 className="font-bold mb-4 flex items-center gap-2 text-[2.25rem] text-green-700 justify-center md:justify-end">
              <IoLeaf className="-scale-x-100" size={32} />
              Carbon Neutral
            </h2>

            <p className="mb-1">Our servers run entirely carbon-neutral.</p>

            <p className="mb-4">
              Plus, we are committed to be completely carbon-free by 2030.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center items-center px-6">
            <img
              className=""
              src="https://source.unsplash.com/eluzJSfkNCk/400x600"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="albums" className="py-24">
        <div className={styles.sectionContainer}>
          <h2 className="font-bold mb-6 text-center">Shared Albums</h2>

          <div className="flex md:flex-row flex-col items-center text-center md:text-left">
            <div className="md:w-1/2 flex justify-center items-center">
              <img className="" src="images/group.png" alt="" />
            </div>

            <div className="md:w-1/2 my-auto px-6">
              <h3 className="text-3xl my-4">Share Photos - Keep Forever</h3>

              <p className="my-1">
                With Echo Photos, you'll get fast, simple and eternal photo
                sharing. No subscription needed!
              </p>

              <p className="my-1">
                Echo Photos is the best way to share pictures of a memorable day
                with your friends.
              </p>

              <p className="my-1">
                Safely store your pictures with Echo Photos' eternal storage.
              </p>

              <p className="my-1">
                Like and comment your friends' pictures in your albums.
              </p>
            </div>
          </div>

          <div className="mt-16 flex md:flex-row flex-col text-center md:text-left">
            <div className="md:w-1/2 my-auto px-6 order-2 md:order-1">
              <h3 className="text-3xl my-4">
                Premium Photos For Unforgettable Moments
              </h3>

              <p className="my-1">
                Share pictures with hundreds of guests of events like weddings,
                parties and other festivities. 🥳
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2">
              <img className="" src="images/image.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="desktop" className="py-24">
        <div className={`${styles.sectionContainer} lg:p-0 md:px-16`}>
          <div className="text-center pb-10">
            <h2 className="font-bold mb-4">Desktop</h2>

            <p className="text-neutral-500 px-6">
              Use Echo Photos wherever you want! Besides the main iOS and
              Android apps you can also view your albums on macOS and in the
              browser!
            </p>
          </div>

          <div className="flex md:flex-row flex-col text-center md:text-left mb-6 md:mb-0">
            <div className="md:w-1/2 justify-center items-center p-6">
              <img className="" src="images/browser.jpg" alt="" />
            </div>

            <div className="md:w-1/2 my-auto p-6 flex flex-col items-center md:block">
              <h3 className="mt-4 mb-2">Echo Photos In Your Browser</h3>

              <p className="mb-4">
                Upload and download the photos directly from your computer
                through the Echo Photos browser plugin.
              </p>

              <Link href="https://web.echophotos.io" target="_blank">
                <Button>Open Web App</Button>
              </Link>
            </div>
          </div>

          <div className="flex md:flex-row flex-col text-center md:text-left">
            <div className="md:w-1/2 my-auto p-6 order-2 md:order-1 flex flex-col items-center md:block">
              <h3 className="mt-4 mb-2">Client For MacOS</h3>

              <p className="mb-4">
                Use Echo Photos through the macOS App on any Mac that uses the
                same iCloud account as your iOS device. Currently, log-in is
                only possible this way.
              </p>

              <AppStore mac />
            </div>

            <div className="md:w-1/2 flex justify-center items-center p-6 order-1 md:order-2">
              <img className="" src="images/macOS.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
