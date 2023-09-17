import * as IoIcons from "react-icons/io5";
import { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import AppStore from '../components/Badges/AppStore';
import Button from '../components/Button';
import Featurette from '../components/Featurette';
import GooglePlay from '../components/Badges/GooglePlay';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ContentBox from "../components/ContentBox";
import FeatureSection from "../components/FeatureSection";

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
          className={`flex md:flex-row flex-col justify-center text-center md:text-left items-center m-auto container max-w-6xl`}
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
          className={`flex flex-col items-center text-center md:text-left m-auto container max-w-6xl px-4`}
        >
          <h2 className="font-bold mb-10 md:mb-6">
            {t('home:featureOverviewSection.title')}
          </h2>

          <div className="md:grid flex flex-col grid-rows-3 grid-cols-3 grid-flow-col gap-10 md:gap-y-4">
            <Featurette
              icon={<IoIcons.IoImages />}
              title={t('home:featureOverviewSection.features.0.title')}
            >
              {t('home:featureOverviewSection.features.0.description')}
            </Featurette>

            <Featurette
              icon={<IoIcons.IoLockClosed />}
              title={t('home:featureOverviewSection.features.1.title')}
            >
              {t('home:featureOverviewSection.features.1.description')}
            </Featurette>

            <Featurette
              icon={<IoIcons.IoStar />}
              title={t('home:featureOverviewSection.features.2.title')}
            >
              {t('home:featureOverviewSection.features.2.description')}
            </Featurette>

            <div className="row-span-3 my-auto mx-auto">
              <img
                src="images/iphone.png"
                alt={t('home:featureOverviewSection.image-alt-text') ?? ''}
              />
            </div>

            <Featurette
              icon={<IoIcons.IoRadioOutline />}
              title={t('home:featureOverviewSection.features.3.title')}
            >
              {t('home:featureOverviewSection.features.3.description')}
            </Featurette>

            <Featurette
              icon={<IoIcons.IoSparkles />}
              title={t('home:featureOverviewSection.features.4.title')}
            >
              {t('home:featureOverviewSection.features.4.description')}
            </Featurette>

            <Featurette
              icon={<IoIcons.IoPeople />}
              title={t('home:featureOverviewSection.features.5.title')}
            >
              {t('home:featureOverviewSection.features.5.description')}
            </Featurette>
          </div>
        </div>
      </section>

      <section className="bg-zinc-800 py-20">
        <div
          className={`m-auto container max-w-6xl flex md:flex-row flex-col items-center text-center md:text-left`}
        >
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src="images/groups.png"
              alt={t('home:privacy.image-alt-text') ?? ''}
            />
          </div>

          <div className="md:w-1/2 my-auto px-4">
            <h3 className="text-white">{t('home:privacy.subtitle')}</h3>

            <h2 className="font-bold text-white mb-2.5 flex text-[2.25rem] gap-2 items-center justify-center md:justify-start">
              {t('home:privacy.title')}
              <IoIcons.IoLockClosed color="white" size={30} />
            </h2>

            <p className="my-2 text-white">
              {t('home:privacy.paragraphs.0')}
            </p>

            <p className="my-2 text-white">
              {t('home:privacy.paragraphs.1')}
            </p>

            <p className="my-2 text-white">
              {t('home:privacy.paragraphs.2')}
            </p>

            <p className="my-2 text-white">
              {t('home:privacy.paragraphs.3')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div
          className={`m-auto container max-w-6xl flex md:flex-row flex-col items-center`}
        >
          <div className="md:w-1/2 text-center md:text-right my-auto px-6">
            <h3 className="text-green-700">{t('home:climate.subtitle')}</h3>

            <h2 className="font-bold mb-4 flex items-center gap-2 text-[2.25rem] text-green-700 justify-center md:justify-end">
              <IoIcons.IoLeaf className="-scale-x-100 -z-10" size={32} />
              {t('home:climate.title')}
            </h2>

            <p className="mb-1">{t('home:climate.paragraphs.0')}</p>

            <p className="mb-4">{t('home:climate.paragraphs.1')}</p>
          </div>

          <div className="md:w-1/2 flex justify-center items-center px-6">
            <img
              src="https://source.unsplash.com/eluzJSfkNCk/400x600"
              alt={t('home:climate.image-alt-text') ?? ''}
            />
          </div>
        </div>
      </section>

      <FeatureSection
        sectionId = "albums"
        title={t('home:albums.title')}
        description=''>

          <ContentBox
            left = {true}
            imageURL="images/group.png"
            imageAltText={t('home:albums.sections.0.image-alt-text') ?? ''}
            title={t('home:albums.sections.0.title')}
          >


              <p className="my-1">{t('home:albums.sections.0.paragraphs.0')}</p>

              <p className="my-1">{t('home:albums.sections.0.paragraphs.1')}</p>

              <p className="my-1">{t('home:albums.sections.0.paragraphs.2')}</p>

              <p className="my-1">{t('home:albums.sections.0.paragraphs.3')}</p>
          </ContentBox>

          <ContentBox
            left = {false}
            imageURL="images/image.png"
            imageAltText={t('home:albums.sections.1.image-alt-text') ?? ''}
            title={t('home:albums.sections.1.title')}
          >
              <p className="my-1">{t('home:albums.sections.1.description')}</p>
          </ContentBox>
      </FeatureSection>

      <FeatureSection
            sectionId = "desktop"
            title={t('home:desktop.title')}
            description={t('home:desktop.description')}>

          <ContentBox
            left = {true}
            imageURL="images/browser.jpg"
            imageAltText={t('home:desktop.sections.0.image-alt-text') ?? ''}
            title={t('home:desktop.sections.0.title')}
          >
            <p className="mb-4">{t('home:desktop.sections.0.description')}</p>

            <Link href="https://web.echophotos.io" target="_blank">
              <Button>{t('home:desktop.sections.0.open-web-app')}</Button>
            </Link>
          </ContentBox>

          <ContentBox
            left = {false}
            imageURL="images/macOS.jpg"
            imageAltText={t('home:desktop.sections.1.image-alt-text') ?? ''}
            title={t('home:desktop.sections.1.title')}
          >
            <p className="mb-4">{t('home:desktop.sections.1.description')}</p>

            <AppStore mac />
          </ContentBox>
      </FeatureSection>
    </>
  );
}
