import { Button } from "@components/ui";
import Image from "next/image";
import { ReactNode } from "react";

interface ICard {
  href: string;
  imgSrc: string;
  children: ReactNode;
}

export const Card = ({ href, imgSrc, children }: ICard) => {
  return (
    <div className="block bg-yellow-400 rounded-lg shadow-lg md:flex md:px-0 md:py-0 md:w-auto">
      <div className="relative mb-4 w-full h-40 md:mb-0 md:w-5/12 md:h-auto">
        <Image
          src={imgSrc}
          className="rounded-t-lg md:rounded-l-lg md:rounded-r-none"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>

      <div className="pb-8 px-6 md:py-6 md:w-7/12">
        <p className="pb-3 text-gray-800 font-medium">{children}</p>

        <Button href={href} className="w-full md:w-auto">
          Más información
        </Button>
      </div>
    </div>
  );
};
