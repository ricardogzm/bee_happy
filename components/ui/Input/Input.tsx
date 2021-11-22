import cn from "classnames";
import { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...rest }: IInput) => {
  return (
    <input
      className={cn(
        className,
        "w-full border border-gray-300 py-3 px-3 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-400 focus:ring-opacity-80"
      )}
      {...rest}
    />
  );
};
