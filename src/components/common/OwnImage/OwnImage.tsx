import NextImage from "next/image";
import styles from "./OwnImage.module.css";
import cn from "classnames";

interface IOwnImage {
  src: string;
  divCN?: string;
  imgCN?: string;
  alt?: string;
}

export const OwnImage = ({ src, divCN, imgCN, alt }: IOwnImage) => {
  return (
    <div className={cn(styles.imageContainer, divCN)}>
      <NextImage
        src={src}
        layout="fill"
        className={cn(styles.image, imgCN)}
        alt={alt}
      />
    </div>
  );
};
