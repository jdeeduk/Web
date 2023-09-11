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
import Featurette from '../components/Featurette';
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
      <section className="pt-24 pb-40" id="features">
        <div
          className={`flex flex-col items-center text-center md:text-left m-auto container max-w-6xl px-4`}
        >
          <h2 className="font-bold mb-10 md:mb-6">
            Wed with Echo
          </h2>

          <div className="md:grid flex flex-col grid-rows-3 grid-cols-3 grid-flow-col gap-10 md:gap-y-4">
            <Featurette
              icon={<IoImages />}
              title={t('home:features.list.0.title')}
            >
              {t('home:features.list.0.description')}
            </Featurette>

            <Featurette
              icon={<IoLockClosed />}
              title={t('home:features.list.1.title')}
            >
              {t('home:features.list.1.description')}
            </Featurette>

            <Featurette
              icon={<IoStar />}
              title={t('home:features.list.2.title')}
            >
              {t('home:features.list.2.description')}
            </Featurette>

            <div className="row-span-3 my-auto mx-auto">
              <img
                src="images/iphone.png"
                alt={t('home:features.image-alt-text') ?? ''}
              />
            </div>

            <Featurette
              icon={<IoRadioOutline />}
              title={t('home:features.list.3.title')}
            >
              {t('home:features.list.3.description')}
            </Featurette>

            <Featurette
              icon={<IoSparkles />}
              title={t('home:features.list.4.title')}
            >
              {t('home:features.list.4.description')}
            </Featurette>

            <Featurette
              icon={<IoPeople />}
              title={t('home:features.list.5.title')}
            >
              {t('home:features.list.5.description')}
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
              <IoLockClosed color="white" size={30} />
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
              <IoLeaf className="-scale-x-100 -z-10" size={32} />
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
    </>
  );
}
