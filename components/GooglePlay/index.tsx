import Link from 'next/link';

export default function GooglePlay() {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=ch.echolabs.echo"
      target="_blank"
    >
      <img
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        height="60"
        width="155"
        alt="Get Echo on Google Play"
      />
    </Link>
  );
}
