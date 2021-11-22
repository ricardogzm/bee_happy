import {
  faCheck,
  faEnvelope,
  faKey,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@components/ui";

export const SignupForm = () => {
  return (
    <form className="mt-6 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="space-y-4">
        <div>
          <label
            htmlFor="email-address"
            className="block text-sm font-medium text-gray-700"
          >
            Correo
          </label>
          <div className="mt-1 flex rounded-md shadow">
            <span
              onClick={(e) => document.getElementById("email-address")!.focus()}
              className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-base"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-r-md"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <div className="mt-1 flex rounded-md shadow">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-base">
              <FontAwesomeIcon icon={faKey} />
            </span>

            <Input
              id="password"
              name="password"
              type="password"
              required
              className="rounded-r-md"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirmar contraseña
          </label>
          <div className="mt-1 flex rounded-md shadow">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-base">
              <FontAwesomeIcon icon={faRedoAlt} />
            </span>

            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              className="rounded-r-md"
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
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Recuérdame
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-blue-400 group-hover:text-blue-300 transition-colors"
          />
        </span>
        Crear cuenta
      </button>
    </form>
  );
};
