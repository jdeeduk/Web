import Head from 'next/head';
import { useRouter } from 'next/router';
import QRCode from 'react-qr-code';
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import admin from 'firebase-admin';
import Button from '../../components/Button';
import GooglePlay from '../../components/GooglePlay';
import AppStore from '../../components/AppStore';
import WebApp from '../../components/WebApp';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export interface InviteData {
  albumImagePreviewURL?: string;
  albumName?: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
  locale,
}) => {
  if (admin.apps.length == 0) {
    admin.initializeApp();
  }
  const inviteId = params?.id as string;
  const host = req.headers.host;
  const projectId = admin.instanceId().app.options.projectId;

  let domain = `https://${projectId}.web.app`;
  if (host?.includes('localhost') || host?.includes('127.0.0.1')) {
    domain = 'https://echo-photos-dev.web.app';
  }

  const reqURL = `${domain}/api/invite?id=${inviteId}`;

  let propsData: InviteData = {};

  try {
    const res = await fetch(reqURL);
    const invite = await res.json();

    propsData.albumName = invite?.groupName;
    const groupImage = invite?.groupImage;
    if (groupImage !== undefined) {
      propsData.albumImagePreviewURL = `${domain}/api/image-preview?id=${groupImage}`;
    }
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      albumName: propsData.albumName ?? null,
      albumImagePreviewURL: propsData.albumImagePreviewURL ?? null,
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'invite'])),
    },
  };
};

export default function InvitePage(inviteData: InviteData) {
  const router = useRouter();
  const fullInviteId = router.query.id as string;
  const inviteCode = fullInviteId.substring(0, 8);

  const { t } = useTranslation();

  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => setQrUrl(window.location.href), []);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(inviteCode);
    alert(t('invite:copied'));
  };

  return (
    <>
      <Head>
        <title>{t('invite:head.title') + ' ' + inviteData.albumName}</title>

        <meta
          property="og:image"
          content={
            inviteData.albumImagePreviewURL ??
            'https://www.echophotos.io/images/AppIcon300.png'
          }
        />
        <meta
          property="og:title"
          content={t('invite:head.title') + ' ' + inviteData.albumName}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Echo Photos" />
        <meta
          property="og:description"
          content={
            t('invite:head.description') ??
            'This link allows you to join an Echo Photos album.'
          }
        />
      </Head>

      <section>
        <div className="container mx-auto max-w-6xl py-8">
          <div id="inviteInfo" className="flex mb-20 md:flex-row flex-col">
            <div
              className="md:w-1/2 flex justify-center items-center px-5"
              id="qrcode"
            >
              <QRCode value={qrUrl} />
            </div>

            <div className="md:w-1/2 px-5 my-auto block text-center md:text-left">
              <h4 className="font-bold mb-4 md:mt-0 mt-16" id="title">
                {t('invite:title')}
              </h4>

              <p
                id="inviteCode"
                className="font-mono text-center py-2 px-5 md:mx-0 mx-auto bg-neutral-200 rounded-xl uppercase font-light text-5xl mb-2"
              >
                {inviteCode}
              </p>

              <p className="mb-6">{t('invite:description')}</p>

              <Button onClick={copyToClipboard} className="mx-0">
                {t('invite:copy-code')}
              </Button>
            </div>
          </div>

          <div className="flex md:flex-row flex-col text-center md:text-left">
            <div className="md:w-1/2 px-5 my-auto">
              <div className="block">
                <h1 className="font-bold mb-6" id="title">
                  {t('invite:download.title')}
                </h1>

                <p className="mb-6">{t('invite:download.description')}</p>

                <div className="flex justify-center md:justify-start items-center">
                  <AppStore />
                  <GooglePlay />
                  <WebApp inviteId="{fullInviteId}" />
                </div>
              </div>
            </div>

            <div className="md:w-1/2 px-5 flex items-center justify-center">
              <img
                src="/images/AppIcon300.png"
                alt={t('invite:logo-alt-text') ?? ''}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
