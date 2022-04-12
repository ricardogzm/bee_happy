import cn from "classnames";
import TextareaAutosize from "react-textarea-autosize";
import { TextareaAutosizeProps } from "react-textarea-autosize";

interface IInput extends TextareaAutosizeProps {
  className?: string;
}

export const TextArea = ({ className, ...rest }: IInput) => {
  return (
    <TextareaAutosize
      className={cn(
        "w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-400 focus:ring-opacity-80 resize-none",
        className
      )}
      {...rest}
    />
  );
};
