import { Input } from "@components/ui";
import { FormEvent } from "react";

export const CommInput = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Enter");
  };

  return (
    <div className="pb-2 pt-3 w-full">
      <form onSubmit={onSubmit}>
        <label htmlFor="comm-input" className="text-sm font-medium">
          Tú - Álvaro Torres
        </label>
        <Input
          id="comm-input"
          name="comm-input"
          type="text"
          placeholder="Escribe un comentario..."
          className="text-sm rounded-md"
          autoComplete="off"
        />
      </form>
    </div>
  );
};
