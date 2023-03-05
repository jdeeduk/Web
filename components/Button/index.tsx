import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Button({
  icon,
  children,
  className,
  ...other
}: ButtonProps) {
  return (
    <button
      className={`text-white rounded-lg text-sm
	font-bold py-3 px-9 uppercase flex gap-2 items-center
	bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 ${className}
	`}
      {...other}
    >
      {icon ?? null}

      {children}
    </button>
  );
}
