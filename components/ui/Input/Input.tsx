import cn from "classnames";
import { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...rest }: IInput) => {
  return (
    <input
      className={cn(
        "w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-400 focus:ring-opacity-80",
        className
      )}
      {...rest}
    />
  );
};
