import {
  IconAccessPoint,
  IconDiscountCheck,
  IconLeaf,
  IconLock,
  IconPhotoUp,
  IconStar,
  IconUsers,
} from '@tabler/icons-react';
import Link from 'next/link';
import Feature from '../components/Feature';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <section className="pt-5 pb-24">
        <div
          className={`flex justify-center items-center ${styles.sectionContainer}`}
        >
          <div className="w-1/2 flex justify-center items-center px-2">
            <img
              src="images/title.png"
              alt="Three phones with demo views of the Echo Photos application."
              width="300"
            />
          </div>

          <div className="w-1/2 flex flex-col px-2">
            <h1 className="font-bold mb-6">
              Full-Res. Simple. Supreme Photo Albums
            </h1>

            <p className="mb-6">
              The prime solution for sharing photos: Create albums, add friends,
              upload full-resolution images and write comments - make
              everlasting memories!
            </p>

            <div className="flex items-center">
              <Link href="https://apps.apple.com/us/app/id1499073049">
                <img
                  src="images/AppStore.svg"
                  height="40"
                  width="120"
                  alt="Get Echo from the App Store"
                />
              </Link>

              <Link href="https://play.google.com/store/apps/details?id=ch.echolabs.echo">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  height="60"
                  width="155"
                  alt="Get Echo on Google Play"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" id="features">
        <div
          className={`flex flex-col items-center ${styles.sectionContainer} px-4`}
        >
          <h2 className="font-bold mb-6">Unlimited Memories</h2>

          <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-y-4">
            <Feature icon={<IconPhotoUp />} title="Full resolution">
              Share your photos in full resolution in their original quality.
            </Feature>

            <Feature icon={<IconLock />} title="Premium privacy">
              No ads, no tracking and secure storage: the advantages of an
              independent company benefit everyone.
            </Feature>

            <Feature icon={<IconStar />} title="Free for the first year">
              No subscriptions, no storage limits: Premium features are paid
              once and kept forever. During the first year of usage, all albums
              are Premium for free!
            </Feature>

            <div className="row-span-3 my-auto">
              <img
                src="images/iphone.png"
                alt="Phone with a demo view of the EchoPhotos app."
              />
            </div>

            <Feature icon={<IconAccessPoint />} title="AirDrop, but for groups">
              Apart from Android support, Echo Photos has many advantages
              compared to AirDrop. With smart download tools, do never
              accidentally download your photos again!
            </Feature>

            <Feature icon={<IconDiscountCheck />} title="Refined design">
              A carefully crafted app: Simple and yet feature-rich, letting you
              focus on what you want to do.
            </Feature>

            <Feature icon={<IconUsers />} title="Social sharing">
              Comments and likes for your group images: Echo provides a private
              social network experience. For real friends only.
            </Feature>
          </div>
        </div>
      </section>

      <section className="bg-zinc-800 py-20">
        <div className={`${styles.sectionContainer} flex`}>
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="images/groups.png"
              alt="Phone with a demo view of the Groups feature."
            />
          </div>

          <div className="w-1/2 my-auto pr-4">
            <h3 className="text-white">Say no to Tracking!</h3>

            <h2 className="font-bold text-white mb-2.5 flex gap-2 items-center">
              Premium Privacy
              <IconLock color="white" size={30} />
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
        <div className={`${styles.sectionContainer} flex`}>
          <div className="w-1/2 text-right my-auto">
            <h3 className="text-green-700">Care for the Climate</h3>

            <h2 className="font-bold mb-2.5 flex items-center gap-2 text-green-700 justify-end">
              <IconLeaf className="-scale-x-100" size={32} />
              Carbon Neutral
            </h2>

            <p className="my-1">Our servers run entirely carbon-neutral.</p>

            <p className="my-1">
              Plus, we are committed to be completely carbon-free by 2030.
            </p>
          </div>

          <div className="w-1/2 flex justify-center items-center">
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

          <div className="flex">
            <div className="w-1/2 flex justify-center items-center">
              <img className="" src="images/group.png" alt="" />
            </div>

            <div className="w-1/2 my-auto pr-4">
              <h3 className="text-3xl my-2">Share Photos - Keep Forever</h3>

              <p className="my-2">
                With Echo Photos, you'll get fast, simple and eternal photo
                sharing. No subscription needed!
              </p>

              <p className="my-2">
                Echo Photos is the best way to share pictures of a memorable day
                with your friends.
              </p>

              <p className="my-2">
                Safely store your pictures with Echo Photos' eternal storage.
              </p>

              <p className="my-2">
                Like and comment your friends' pictures in your albums.
              </p>
            </div>
          </div>

          <div className="mt-20 flex">
            <div className="w-1/2 my-auto text-right pl-4">
              <h3 className="text-3xl my-2">
                Premium Photos For Unforgettable Moments
              </h3>

              <p className="my-2">
                Share pictures with hundreds of guests of events like weddings,
                parties and other festivities. 🥳
              </p>
            </div>

            <div className="w-1/2 flex justify-center items-center">
              <img className="" src="images/image.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="desktop" className="py-24">
        <div className={`${styles.sectionContainer} px-4`}>
          <div className="text-center pb-10">
            <h2 className="font-bold mb-4">Desktop</h2>

            <p className="text-neutral-500 px-6">
              Use Echo Photos wherever you want! Besides the main iOS and
              Android apps you can also view your albums on macOS and in the
              browser!
            </p>
          </div>

          <div className="flex">
            <div className="w-1/2 justify-center items-center p-6">
              <img className="" src="images/browser.jpg" alt="" />
            </div>

            <div className="w-1/2 my-auto p-6">
              <h3 className="my-4">Echo Photos In Your Browser</h3>

              <p className="my-4">
                Upload and download the photos directly from your computer
                through the Echo Photos browser plugin.
              </p>

              <Link href="https://web.echophotos.io" target="_blank">
                <button className="mt-4 text-white rounded-lg text-sm font-bold py-3 px-9 uppercase inline-block bg-blue-600 hover:bg-blue-500 focus:bg-blue-500">
                  Open Web App
                </button>
              </Link>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2 my-auto p-6">
              <h3 className="my-4">Client For MacOS</h3>

              <p className="my-4">
                Use Echo Photos through the macOS App on any Mac that uses the
                same iCloud account as your iOS device. Currently, log-in is
                only possible this way.
              </p>

              <Link href="https://apps.apple.com/us/app/id1499073049">
                <img
                  src="images/MacAppStore.svg"
                  height="40"
                  alt="Get Echo from the App Store"
                />
              </Link>
            </div>

            <div className="w-1/2 flex justify-center items-center p-6">
              <img className="" src="images/macOS.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
