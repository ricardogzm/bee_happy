import { Input } from "@components/ui";

export const HeaderForm = () => {
  return (
    <form action="" className="grid gap-3 grid-cols-1">
      <Input
        type="text"
        name="fullname"
        id="fullname"
        className="rounded-md shadow-sm"
        placeholder="Nombre completo"
        required
      />
      <Input
        type="email"
        name="email-add"
        id="email-add"
        className="rounded-md shadow-sm"
        placeholder="Correo"
        required
      />
      <Input
        type="password"
        name="passw"
        id="passw"
        className="rounded-md shadow-sm"
        placeholder="Contraseña"
        required
      />
      <button
        type="submit"
        className="mb-4 py-3 w-full hover:text-blue-500 text-white text-lg font-semibold hover:bg-blue-100 bg-blue-500 border-2 border-blue-500 rounded-md transition-colors sm:text-xl md:mb-0"
      >
        Involúcrate
      </button>
    </form>
  );
};
