import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center mb-5 mb-md-0">
              <img src="images/title.png" alt="" width="300" />
            </div>
            <div className="col-md-6 align-self-center text-center text-md-left">
              <div className="block">
                <h1 className="font-weight-bold mb-4 font-size-55">
                  Full-Res. Simple. Supreme Photo Albums
                </h1>
                <p className="mb-4">
                  The prime solution for sharing photos: Create albums, add
                  friends, upload full-resolution images and write comments -
                  make everlasting memories!
                </p>
                <Link href="https://apps.apple.com/us/app/id1499073049">
                  <img
                    src="images/AppStore.svg"
                    height="40"
                    alt="Get Echo from the App Store"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=ch.echolabs.echo">
                  <img
                    height={60}
                    alt="Get it on Google Play"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading">
                <h2>Unlimited Memories</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-10 text-center text-md-left">
                <h3 className="font-weight-bold mb-2">
                  <img src="images/icons/photo.on.rectangle.svg" height="40" />
                </h3>
                <h4 className="font-weight-bold mb-2">Full Resolution</h4>
                <p>
                  Share your photos in full resolution in its original quality.
                </p>
              </div>
              <div className="mb-10 text-center text-md-left">
                <h3 className="font-weight-bold mb-2">
                  <img src="images/icons/lock.fill.svg" height="40" />
                </h3>
                <h4 className="font-weight-bold mb-2">Premium Privacy</h4>
                <p>
                  No ads, no tracking and secure storage: The advantages of an
                  independent company benefit everyone.
                </p>
              </div>
              <div className="mb-10 text-center text-md-left">
                <h3 className="font-weight-bold mb-2">
                  <img src="images/icons/star.fill.svg" height="40" />
                </h3>
                <h4 className="font-weight-bold mb-2">
                  Free for the First Year
                </h4>
                <p>
                  No subscriptions, no storage limits: Premium features are paid
                  once and kept forever. During the first year of usage, all
                  albums are premium for free!
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center align-self-center mb-4 mb-md-0">
              <img className="img-fluid" src="images/iphone.png" alt="" />
            </div>
            <div className="col-md-4">
              <div className="mb-10 text-center text-md-left">
                <h3 className="font-weight-bold mb-2">
                  <img
                    src="images/icons/dot.radiowaves.left.and.right.svg"
                    height="40"
                  />
                </h3>
                <h4 className="font-weight-bold mb-2">
                  AirDrop, but for Groups
                </h4>
                <p>
                  Apart from Android support, Echo Photos has many advantages
                  compared to AirDrop. With smart download tools, do never
                  accidentially download your photos again!
                </p>
              </div>
              <div className="mb-10 text-center text-md-left">
                <h3 className="font-weight-bold mb-2">
                  <img src="images/icons/checkmark.seal.fill.svg" height="40" />
                </h3>
                <h4 className="font-weight-bold mb-2">Refined Design</h4>
                <p>
                  A carefully crafted app: Simple and yet feature-rich, letting
                  you focus on what you want to do.
                </p>
              </div>
              <div className="mb-10 text-center text-md-left">
                <h3 className="font-weight-bold mb-2">
                  <img src="images/icons/person.2.fill.svg" height="40" />
                </h3>
                <h4 className="font-weight-bold mb-2">Social Sharing</h4>
                <p>
                  Comments and likes for your group images: Echo provides a
                  private social network experience. For real friends only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-800 section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center mb-5 mb-lg-0">
              <img className="img-fluid" src="images/groups.png" alt="" />
            </div>
            <div className="col-md-6 align-self-center text-center text-md-left">
              <div className="content">
                <h3 className="text-white">Say no to Tracking!</h3>
                <h2 className="subheading text-white font-weight-bold mb-2.5">
                  Premium Privacy{' '}
                  <img src="images/icons/lock.fill.white.svg" height="60" />
                </h2>
                <p className="text-white">
                  Echo Photos does not monetize your private data. We do not
                  track user data for ads or to sell them. For us, you are our
                  customer - you deserve our best service!
                </p>
                <p className="text-white">
                  Your memories are in a safe place. Using the highest security
                  standards, we keep up with the newest safety features.
                </p>
                <p className="text-white">
                  Our servers run with cutting-edge security features - we do
                  not put anything at risk.
                </p>
                <p className="text-white">
                  Privacy is our top concern. All your data is securely stored
                  in Switzerland 🇨🇭. One should never worry about the protection
                  of one's pictures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center text-center text-md-right">
              <div className="content">
                <h3 style={{ color: 'green' }}>Care for the Climate</h3>
                <h2
                  style={{ color: 'green' }}
                  className="subheading font-weight-bold mb-2.5"
                >
                  <img src="images/icons/leaf.fill.svg" height="60" />
                  Carbon Neutral
                </h2>
                <p>Our servers run entirely carbon-neutral.</p>
                <p>
                  Plus, we are committed to be completely carbon-free by 2030.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center mb-5 mb-lg-0">
              <img
                className="img-fluid"
                src="https://source.unsplash.com/eluzJSfkNCk/400x600"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="albums" className="feature-list section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2>Shared Albums</h2>
              </div>
            </div>
          </div>
          <div className="row mb-10">
            <div className="col-md-6 text-center mb-5 mb-lg-0">
              <img className="img-fluid" src="images/group.png" alt="" />
            </div>
            <div className="col-md-6 align-self-center text-center text-md-left">
              <div className="content">
                <h4 className="subheading">Share Photos - Keep Forever</h4>
                <p>
                  With Echo Photos, you'll get fast, simple and eternal photo
                  sharing. No subscription needed!
                </p>
                <p>
                  Echo Photos is the best way to share pictures of a memorable
                  day with your friends.
                </p>
                <p>
                  Safely store your pictures with Echo Photos' eternal storage.
                </p>
                <p>Like and comment your friends' pictures in your albums.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-md-1 order-2 align-self-center text-center text-md-left">
              <div className="content">
                <h4 className="subheading">
                  Premium Photos for unforgettable Moments
                </h4>
                <p>
                  Share pictures with hundreds of guests of events like
                  weddings, parties and other festivities. 🥳
                </p>
              </div>
            </div>
            <div className="col-md-6 order-md-2 order-1 text-center mb-5 mb-lg-0">
              <img className="img-fluid" src="images/image.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="desktop" className="feature-list section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2>Desktop</h2>
                <p>
                  Use Echo Photos wherever you want! Besides the main iOS and
                  Android apps you can also view your albums on macOS and in the
                  browser!
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-10">
            <div className="col-md-6 text-center mb-5 mb-lg-0">
              <img className="img-fluid" src="images/browser.jpg" alt="" />
            </div>
            <div className="col-md-6 align-self-center text-center text-md-left">
              <div className="content">
                <h4 className="subheading">Echo Photos in your Browser</h4>
                <p>
                  Upload and download the photos directly from your computer
                  through the Echo Photos browser plugin.
                </p>
                <Link
                  href="https://web.echophotos.io"
                  target="_blank"
                  className="btn btn-main btn-main-sm"
                >
                  Open Web App
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-md-1 order-2 align-self-center text-center text-md-left">
              <div className="content">
                <h4 className="subheading">Client for macOS</h4>
                <p>
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
            </div>
            <div className="col-md-6 order-md-2 order-1 text-center mb-5 mb-lg-0">
              <img className="img-fluid" src="images/macOS.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
