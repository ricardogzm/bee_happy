import { ReactNode } from "react";
import Link from "next/link";
import cn from "classnames";

interface IButton {
  href: string;
  className?: string;
  children: ReactNode;
}

export const Button = ({ href, className, children }: IButton) => {
  return (
    <Link href={href}>
      <a
        className={cn(
          className,
          "inline-block px-3 py-2 text-center hover:text-blue-500 text-white text-base font-medium hover:bg-blue-100 bg-blue-500 border-2 border-blue-500 rounded-md transition-colors"
        )}
      >
        {children}
      </a>
    </Link>
  );
};
