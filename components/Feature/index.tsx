import { ReactNode } from 'react';

interface FeatureProps {
  icon: ReactNode;
  title: ReactNode;
  children: ReactNode;
}

/**
 * @param icon an SVG icon to be rendered next to the title.
 * @param title rendered as an `h4`, it's the summary of this feature.
 * @param children whatever you pass as a child to this component will be rendered inside a `p` tag.
 */
export default function Feature({ icon, title, children }: FeatureProps) {
  return (
    <div>
      <h4 className="flex font-bold items-center md:justify-start justify-center gap-2">
        {icon}

        {title}
      </h4>

      <p>{children}</p>
    </div>
  );
}
