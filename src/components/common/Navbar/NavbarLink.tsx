import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { AnchorHTMLAttributes, ReactNode } from "react";

// AnchorHTMLAttributes is necessary for mobile menu to close when an item is clicked
export interface INavLinks extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className: string;
  children: ReactNode;
}

export const NavbarLink = ({
  href,
  className,
  children,
  ...rest
}: INavLinks) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        // Checks if current path is the same as href
        className={classNames(
          router.asPath === href
            ? "text-black"
            : "text-gray-500 hover:text-gray-800",
          className,
          "transition-colors"
        )}
        aria-current={router.asPath === href ? "page" : undefined}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
};
