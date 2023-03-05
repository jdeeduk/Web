import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import QRCode from 'react-qr-code';
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import admin from 'firebase-admin';
import Button from '../../components/Button';
import GooglePlay from '../../components/GooglePlay';
import AppStore from '../../components/AppStore';

export interface InviteData {
  albumImagePreviewURL?: string;
  albumName?: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
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
    },
  };
};

export default function InvitePage(inviteData: InviteData) {
  const router = useRouter();
  const fullInviteId = router.query.id as string;
  const inviteCode = fullInviteId.substring(0, 8);

  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => setQrUrl(window.location.href), []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteCode);
    alert('Copied to Clipboard!');
  };

  return (
    <>
      <Head>
        <title>Echo Photos - Invite to {inviteData.albumName}</title>

        <meta
          property="og:image"
          content={
            inviteData.albumImagePreviewURL ??
            'https://www.echophotos.io/images/AppIcon300.png'
          }
        />
        <meta
          property="og:title"
          content={inviteData.albumName ?? 'Join Album'}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Echo Photos" />
        <meta
          property="og:description"
          content="This link allows you to join an Echo Photos album."
        />
      </Head>

      <section>
        <div className="container mx-auto max-w-6xl py-8">
          <div id="inviteInfo" className="flex mb-20">
            <div
              className="w-1/2 flex justify-center items-center px-5"
              id="qrcode"
            >
              <QRCode value={qrUrl} />
            </div>

            <div className="w-1/2 px-5 my-auto">
              <div className="block">
                <h4 className="font-bold mb-4 font-size-55" id="title">
                  Album Invite Code
                </h4>

                <p
                  style={{
                    fontFamily: "'Courier New', ui-monospace",
                  }}
                  id="inviteCode"
                  className="text-center py-2 px-5 bg-neutral-200 rounded-3xl uppercase font-light text-5xl mb-2"
                >
                  {inviteCode}
                </p>

                <p className="mb-6">
                  Join the album by <b>entering the code</b> in the Echo Photos
                  app. You can also <b>scan the QR code with your phone</b> if
                  you have the app installed.
                </p>

                <Button onClick={copyToClipboard}>Copy Code</Button>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2 px-5 my-auto">
              <div className="block">
                <h1 className="font-bold mb-6" id="title">
                  Get Echo Photos
                </h1>

                <p className="mb-6">
                  The invite link you are trying to open can be opened with the
                  Echo Photos App.
                </p>

                <div className="flex items-center">
                  <AppStore />

                  <GooglePlay />
                </div>
              </div>
            </div>

            <div className="w-1/2 px-5 flex items-center justify-center">
              <img src="/images/AppIcon300.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
