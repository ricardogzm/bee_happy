import { classNames, INavLinks } from "@widgets/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderLink = ({ name, href, className }: INavLinks) => {
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
      >
        {name}
      </a>
    </Link>
  );
};
