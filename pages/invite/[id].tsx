import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import QRCode from 'react-qr-code';
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import admin from 'firebase-admin';

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

export default (inviteData: InviteData) => {
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
        <title>Echo Photos A</title>

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
        <div className="container">
          <div id="inviteInfo" className="row">
            <div className="col-md-6 text-center mb-5 mb-md-0" id="qrcode">
              <QRCode value={qrUrl} />
            </div>
            <div className="col-md-6 align-self-center text-center text-md-left">
              <div className="block">
                <h4 className="font-weight-bold mb-4 font-size-55" id="title">
                  Album Invite Code
                </h4>
                <p
                  style={{
                    textAlign: 'center',
                    paddingTop: '20px',
                    paddingRight: '20px',
                    paddingBottom: '20px',
                    paddingLeft: '20px',
                    backgroundColor: 'lightgray',
                    borderRadius: '25px',
                    textTransform: 'uppercase',
                    fontWeight: 'light',
                    fontSize: '50px',
                    fontFamily: "'Courier New', ui-monospace",
                  }}
                  id="inviteCode"
                >
                  {inviteCode}
                </p>
                <p className="mb-4">
                  Join the album by <b>entering the code</b> in the Echo Photos
                  app. You can also <b>scan the QR code with your phone</b> if
                  you have the app installed.
                </p>
                <button
                  className="btn btn-main btn-main-sm"
                  onClick={() => copyToClipboard()}
                >
                  Copy Code
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <svg width="100" height="100" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 align-self-center text-center text-md-left">
              <div className="block">
                <h1 className="font-weight-bold mb-4 font-size-55" id="title">
                  Get Echo Photos
                </h1>
                <p className="mb-4">
                  The invite link you are trying to open can be opened with the
                  Echo Photos App.
                </p>

                <Link href="https://apps.apple.com/us/app/id1499073049">
                  <img
                    src="/images/AppStore.svg"
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
            <div className="col-md-6 text-center mb-5 mb-md-0">
              <img src="/images/AppIcon300.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
