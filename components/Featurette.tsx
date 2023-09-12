import { ReactNode } from 'react';

interface FeatureProps {
  icon: ReactNode;
  title: ReactNode;
  children: ReactNode;
}

export default function Featurette({ icon, title, children }: FeatureProps) {
  return (
    <div>
      <h5 className="flex font-semibold items-center md:justify-start justify-center gap-2">
        <div className="text-2xl">{icon}</div>

        {title}
      </h5>

      <p className="font-xs">{children}</p>
    </div>
  );
}
