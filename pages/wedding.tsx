import * as Icons from "react-icons/gi";
import * as IoIcons from "react-icons/io5";
import { GetStaticPropsContext } from "next";
import { Cinzel } from "next/font/google";
import AppStore from "../components/Badges/AppStore";
import Featurette from "../components/Featurette";
import GooglePlay from "../components/Badges/GooglePlay";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ContentBox from "../components/ContentBox";
import FeatureSection from "../components/FeatureSection";

const cinzelFont = Cinzel({ subsets: ["latin"] });

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
      <section className="pt-5 pb-24 bg-rose-50 h-screen">
        <ContentBox left={true} imageURL="images/title.png" title="">
          <h1 className={`${cinzelFont.className}font-bold mb-6 `}>
            The Photo Album for your Wedding
          </h1>

          <p className="my-3">
            Supported on iPhone, Android, Web, Mac and Apple TV
          </p>

          <div className="flex items-center justify-center md:justify-start">
            <AppStore appendix="?ppid=018749c4-f51a-4659-874a-36ce62c57a24" />

            <GooglePlay />
          </div>
        </ContentBox>
      </section>

      <section className="pt-24 pb-40 bg-red-300" id="features">
        <div
          className={`flex flex-col text-stone-50 items-center text-center md:text-left m-auto container max-w-6xl px-4`}
        >
          <h2 className="font-bold mb-10 md:mb-6">
            {t("home:featureOverviewSection.title")}
          </h2>

          <div className="md:grid flex flex-col grid-rows-3 grid-cols-3 grid-flow-col gap-10 md:gap-y-4">
            <Featurette
              icon={<Icons.GiLockedHeart />}
              title={t("home:featureOverviewSection.features.0.title")}
            >
              {t("home:featureOverviewSection.features.0.description")}
            </Featurette>

            <Featurette
              icon={<Icons.GiClover />}
              title={t("home:featureOverviewSection.features.1.title")}
            >
              {t("home:featureOverviewSection.features.1.description")}
            </Featurette>

            <Featurette
              icon={<Icons.GiLinkedRings />}
              title={t("home:featureOverviewSection.features.2.title")}
            >
              {t("home:featureOverviewSection.features.2.description")}
            </Featurette>

            <div className="row-span-3 my-auto mx-auto">
              <img src="images/iphone.png" />
            </div>

            <Featurette
              icon={<Icons.GiRose />}
              title={t("home:featureOverviewSection.features.3.title")}
            >
              {t("home:featureOverviewSection.features.3.description")}
            </Featurette>

            <Featurette
              icon={<Icons.GiOlive />}
              title={t("home:featureOverviewSection.features.4.title")}
            >
              {t("home:featureOverviewSection.features.4.description")}
            </Featurette>

            <Featurette
              icon={<Icons.GiOakLeaf />}
              title={t("home:featureOverviewSection.features.5.title")}
            >
              {t("home:featureOverviewSection.features.5.description")}
            </Featurette>
          </div>
        </div>
      </section>
    </>
  );
}
