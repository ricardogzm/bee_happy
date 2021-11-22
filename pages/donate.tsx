import Image from "next/image";
import { Button } from "@components/ui";
import stb from "@public/save_the_bees.webp";
import { OwnImage } from "@components/common";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const donate = () => {
  return (
    <div className="bg-blue-500">
      <div className="mx-auto pt-12 px-6 max-w-screen-2xl">
        <h2 className="py-3 text-yellow-400 text-2xl font-semibold sm:text-3xl lg:text-4xl">
          ¿Cómo aportan tus donaciones?
        </h2>
        <p className="mb-6 text-gray-900 text-base font-medium sm:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, excepturi minima! Distinctio, repellendus? Voluptatum
          blanditiis itaque commodi consectetur laborum minima omnis repellat
          deleniti, vitae vero beatae impedit facere veniam numquam facilis
          voluptas labore? Facilis ducimus distinctio incidunt assumenda eaque!
          Quis nemo error eveniet magni enim odit nesciunt doloremque ad amet.
        </p>
        <div className="block md:flex md:items-center md:justify-between">
          <Button href="#" className="block">
            <p className="text-center text-4xl font-bold">
              <FontAwesomeIcon icon={faHeart} /> Donar
            </p>
          </Button>
          <div className="relative w-64 h-64">
            <OwnImage src={"/save_the_bees.webp"} />
            {/* <Image src={stb} alt="Save the bees" layout="fill" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default donate;
