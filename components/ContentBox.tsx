import { ReactNode } from 'react';

interface ContentBoxProps {
  left: boolean;
  imageURL: string;
  imageAltText: string;
  title: ReactNode;
  children: ReactNode;
}

export default function ContentBox({ left, imageURL, imageAltText, title, children }: ContentBoxProps) {  
  return (
    left ? <div className="flex md:flex-row flex-col text-center md:text-left mb-6 md:mb-0">
      <div className="md:w-1/2 flex justify-center items-center p-6">
        <img src={imageURL} alt={imageAltText}/>
      </div>

      <div className="md:w-1/2 my-auto p-6 flex flex-col items-center md:block">
        <h4 className="mt-4 md:mt-0 mb-2 font-semibold">
          {title}
        </h4>

        {children}
      </div>
    </div>
    :
    <div className="flex md:flex-row flex-col text-center md:text-left">
      <div className="md:w-1/2 my-auto p-6 order-2 md:order-1 flex flex-col items-center md:block">
        <h4 className="mt-4 mb-2 font-semibold">
          {title}
        </h4>

        {children}
      </div>

      <div className="md:w-1/2 flex justify-center items-center p-6 order-1 md:order-2">
        <img src={imageURL} alt={imageAltText}/>
      </div>
    </div>
  );
}
