import Link from "next/link";
import Image from "next/image";
import bee from "@public/bee-header.webp";
import { SignupForm } from "@components/forms";

const signup = () => {
  return (
    <div className="flex justify-between min-h-screen">
      <div className="z-10 flex justify-center w-full min-h-screen shadow-2xl lg:items-center lg:w-1/2 xl:w-4/12">
        <div className="mx-6 my-14 w-full max-w-lg space-y-6 lg:my-0 lg:max-w-md">
          <div>
            <h2 className="mt-6 text-gray-900 text-3xl font-bold">
              Regístrate
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              ¿Ya tienes una cuenta? Ingresa{" "}
              <Link href="/signin">
                <a className="hover:text-blue-500 text-blue-600 font-medium">
                  aquí
                </a>
              </Link>
              .
            </p>
          </div>

          <SignupForm />
        </div>
      </div>

      <div className="relative hidden overflow-hidden md:block lg:w-1/2 xl:w-8/12">
        <Image
          layout="fill"
          className=""
          objectFit="cover"
          src={bee}
          alt="Bees"
        />
      </div>
    </div>
  );
};

export default signup;
