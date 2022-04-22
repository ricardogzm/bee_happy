import axios from "axios";
import router from "next/router";
import { Input } from "@components/ui";
import { useState } from "react";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "hooks/useUser";

export const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useUser();

  const login = async (event: React.FormEvent) => {
    event.preventDefault();

    await axios
      .post(
        "/api/auth/signin",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .catch((error) => console.error(error))
      .then((response) => {
        if (response!.status === 200) {
          mutate();
          setTimeout(() => router.push("/feed"), 1000);
        }
      });
  };

  return (
    <div>
      <form className="mt-6 space-y-6" onSubmit={login}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm space-y-3">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Correo
            </label>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              className="rounded-md shadow-sm"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Contraseña
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="rounded-md shadow-sm"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="remember-me"
              className="block ml-2 text-gray-900 text-sm"
            >
              Recuérdame
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="hover:text-blue-500 text-blue-600 font-medium"
            >
              Olvidé mi contraseña
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="group relative flex justify-center px-4 py-2 w-full text-white text-lg font-medium bg-blue-600 hover:bg-blue-700 border border-transparent rounded-md focus:outline-none transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon
              icon={faUnlock}
              className="group-hover:text-blue-300 text-blue-400 transition-colors"
            />
          </span>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};
