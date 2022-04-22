import {
  faCheck,
  faEnvelope,
  faKey,
  faRedoAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import router from "next/router";
import { useState } from "react";
import { Input } from "@components/ui";
import { useUser } from "hooks/useUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const { mutate } = useUser();

  const register = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confpassword) return;

    await axios
      .post("/api/auth/signup", {
        username,
        email,
        password,
      })
      .catch((error) => console.error(error))
      .then((response) => {
        if (response!.status === 201) {
          mutate();
          router.push("/feed");
        }
      });
  };

  return (
    <form onSubmit={register} className="mt-6 space-y-6">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="space-y-3">
        <div>
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-medium"
          >
            Nombre de usuario
          </label>
          <div className="flex mt-1 rounded-md shadow">
            <span
              onClick={(e) => document.getElementById("username")!.focus()}
              className="inline-flex items-center px-3 text-gray-500 text-base bg-gray-100 border border-r-0 border-gray-300 rounded-l-md"
            >
              <FontAwesomeIcon icon={faUser} />
            </span>
            <Input
              id="username"
              name="username"
              type="text"
              className="rounded-r-md"
              value={username}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email-address"
            className="block text-gray-700 text-sm font-medium"
          >
            Correo
          </label>
          <div className="flex mt-1 rounded-md shadow">
            <span
              onClick={(e) => document.getElementById("email-address")!.focus()}
              className="inline-flex items-center px-3 text-gray-500 text-base bg-gray-100 border border-r-0 border-gray-300 rounded-l-md"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              className="rounded-r-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-medium"
          >
            Contraseña
          </label>
          <div className="flex mt-1 rounded-md shadow">
            <span
              onClick={(e) => document.getElementById("password")!.focus()}
              className="inline-flex items-center px-3 text-gray-500 text-base bg-gray-100 border border-r-0 border-gray-300 rounded-l-md"
            >
              <FontAwesomeIcon icon={faKey} />
            </span>

            <Input
              id="password"
              name="password"
              type="password"
              className="rounded-r-md"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="block text-gray-700 text-sm font-medium"
          >
            Confirmar contraseña
          </label>
          <div className="flex mt-1 rounded-md shadow">
            <span
              onClick={(e) =>
                document.getElementById("confirm-password")!.focus()
              }
              className="inline-flex items-center px-3 text-gray-500 text-base bg-gray-100 border border-r-0 border-gray-300 rounded-l-md"
            >
              <FontAwesomeIcon icon={faRedoAlt} />
            </span>

            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              className="rounded-r-md"
              autoComplete="new-password"
              value={confpassword}
              onChange={(e) => setConfpassword(e.target.value)}
              required
            />
          </div>
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
            className="block pl-2 text-gray-900 text-sm select-none"
          >
            Recuérdame
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="group relative flex justify-center px-4 py-2 w-full text-white text-lg font-medium bg-blue-600 hover:bg-blue-700 border border-transparent rounded-md focus:outline-none transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FontAwesomeIcon
            icon={faCheck}
            className="group-hover:text-blue-300 text-blue-400 transition-colors"
          />
        </span>
        Crear cuenta
      </button>
    </form>
  );
};
