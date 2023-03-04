import { PropsWithChildren } from 'react';

export default function Section({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <section>
      <div className="container">
        <h1 className="font-weight-bold mb-4 font-size-55">{title}</h1>
        {children}
      </div>
    </section>
  );
}
