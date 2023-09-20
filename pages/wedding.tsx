import * as Icons from "react-icons/io5";
import { GetStaticPropsContext } from "next";
import { Cinzel } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Quicksand } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import AppStore from "../components/Badges/AppStore";
import Featurette from "../components/Featurette";
import GooglePlay from "../components/Badges/GooglePlay";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ContentBox from "../components/ContentBox";
import FullScreenSection from "../components/FullScreenSection";

const cinzelFont = Cinzel({ subsets: ["latin"] });
const quickSandFont = Quicksand({ subsets: ["latin"] });
const montserratSandFont = Montserrat({ subsets: ["latin"] });
const josefinSansFont = Josefin_Sans({ subsets: ["latin"] });
const playfairFont = Playfair_Display({ subsets: ["latin"] });

const titleFont = playfairFont;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "home"])),
    },
  };
}

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <FullScreenSection className="bg-rose-50">
        <ContentBox left={false} imageURL="images/title.png" title="">
          <h1 className={`${titleFont.className} font-bold mb-6`}>
            Celebrate. Capture. Relive.
          </h1>

          <h4 className="my-4">
            The best way to collect all photos of your big event.
          </h4>

          <div className="mt-7 flex flex-row items-center justify-center md:justify-start">
            <AppStore appendix="?ppid=018749c4-f51a-4659-874a-36ce62c57a24" />

            <GooglePlay />
          </div>

          <p className="my-3">
            Available on iPhone, Android, Web, Mac and Apple TV
          </p>
        </ContentBox>
      </FullScreenSection>

      <section
        className="pt-10 pb-10 md:pt-24 md:pb-40 bg-red-300"
        id="features"
      >
        <div
          className={`flex flex-col text-stone-50 items-center text-center md:text-left m-auto container max-w-6xl px-4`}
        >
          <h2 className={`${titleFont.className} font-bold mb-10 md:mb-6`}>
            The App
          </h2>

          <div className="md:grid flex flex-col grid-rows-3 grid-cols-3 grid-flow-col gap-10 md:gap-y-4">
            <Featurette
              big={true}
              titleClassName={`${titleFont.className}`}
              icon={<Icons.IoImages />}
              title="An album for all guests"
            >
              Bring all your guests together in an album. Everyone has some
              special snaps you do not want to miss!
            </Featurette>

            <Featurette
              big={true}
              titleClassName={`${titleFont.className}`}
              icon={<Icons.IoSparkles />}
              title="The best in class"
            >
              No ads and a premium quality app makes evryone love to use it.
            </Featurette>

            <Featurette
              big={true}
              titleClassName={`${titleFont.className}`}
              icon={<Icons.IoHeart />}
              title="Relive the best moments"
            >
              Bring back the moment by recounting best story that lead to the
              snap in the comments. And don't forget to like your favs!
            </Featurette>

            <div className="row-span-3 my-auto mx-auto">
              <img src="images/iphone.png" />
            </div>

            <Featurette
              big={true}
              titleClassName={`${titleFont.className}`}
              icon={<Icons.IoQrCode />}
              title="Share the QR Code"
            >
              To get everyone on board, each album has a QR Code that guests can
              scan to get in.
            </Featurette>

            <Featurette
              big={true}
              titleClassName={`${titleFont.className}`}
              icon={<Icons.IoCloudDownload />}
              title="Download all photos"
            >
              Save the photos into your phone's gallery or create a download
              link - everyone will get the photos they want.
            </Featurette>
            <Featurette
              big={true}
              titleClassName={`${titleFont.className}`}
              icon={<Icons.IoLink />}
              title="Invite with a link"
            >
              An album invite link is all your guests need to upload their
              photos to your event's album.
            </Featurette>

            {/* <div>
              <h5 className="flex font-semibold items-center md:justify-start justify-center gap-2">
                With Echo Photos, anyone with an invite link can upload their
                photos to your event's album.☭ ♥︎♞♠︎☼☾⚭✚❉❆❋✻💍🤵‍♂️👰‍♀️💒☀️ Test
              </h5>

              <p className="font-xs">More</p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
