export const HeaderForm = () => {
  return (
    <form action="" className="grid grid-cols-1 gap-5">
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Nombre completo"
        className="w-full rounded-md border-gray-300 shadow-sm py-3 px-3 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-400 focus:ring-opacity-80"
        required
      />
      <input
        type="email"
        name="email-add"
        id="email-add"
        placeholder="Correo"
        className="w-full rounded-md border-gray-300 shadow-sm py-3 px-3 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-400 focus:ring-opacity-80"
        required
      />
      <input
        type="password"
        name="passw"
        id="passw"
        placeholder="Contraseña"
        className="w-full rounded-md border-gray-300 shadow-sm py-3 px-3 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-400 focus:ring-opacity-80"
        required
      />
      <button
        type="submit"
        className="w-full text-lg sm:text-xl font-semibold text-white bg-blue-500 hover:text-blue-500 hover:bg-blue-100 border-2 border-blue-500 transition-colors py-3 mb-4 md:mb-0 rounded-md"
      >
        Involúcrate
      </button>
    </form>
  );
};
