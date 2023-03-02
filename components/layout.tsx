import Header from './Header';
import Footer from './footer';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="py-20">{children}</main>
      <Footer />
    </>
  );
}
