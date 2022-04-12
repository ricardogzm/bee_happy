import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import type { NextPage } from "next";
import { HeaderForm } from "@components/home";
import { useContext, useEffect } from "react";
import beeheader from "@public/bee-header.webp";
import { UserContext } from "contexts/UserContext";

const Home: NextPage = () => {
  const { data } = useContext(UserContext);

  useEffect(() => {
    if (data?.currentUser) router.push("/feed");
  }, [data]);

  return (
    <>
      <Head>
        <title>Bee Happy</title>
        <meta name="description" content="Página principal de Bee Happpy" />
      </Head>
      <div className="pb-6 bg-yellow-500 md:pb-10">
        <header className="flex justify-between">
          <div className="mx-auto md:flex-shrink-0 md:max-w-lg lg:max-w-xl">
            <section className="mt-12 mx-6">
              <h1 className="py-3 text-gray-800 text-2xl font-bold sm:text-3xl lg:text-4xl">
                Las abejas necesitan nuestra ayuda.
              </h1>
              <p className="pb-8 text-gray-800 text-base font-medium sm:text-lg">
                Únete ahora a una comunidad de personas preocupadas por el
                bienestar del medio ambiente y las abejas.
              </p>

              <HeaderForm />
            </section>
          </div>

          <div className="hidden overflow-hidden md:block">
            <Image
              layout="fixed"
              width="1060"
              height="720"
              className="rounded-bl-[200px]"
              src={beeheader}
              alt="Bees"
            />
          </div>
        </header>
        <div className="flex justify-center mt-12 mx-auto">
          <section className="mx-6 max-w-screen-xl">
            <h2 className="my-3 text-2xl font-semibold md:text-4xl">
              El poder de la polinización
            </h2>
            <p className="text-md md:text-lg">
              La polinización —la transferencia del polen de las partes
              masculinas a las partes femeninas de una planta— es vital para la
              reproducción de las plantas, y el 90% de las plantas con flor
              reciben ayuda de algún tipo de especie animal polinizadora. En la
              agricultura, se calcula que aproximadamente un tercio del volumen
              total de los alimentos que se producen se benefician de la
              polinización animal. <br /> Son muchos los animales que actúan
              como polinizadores, desde mamíferos como murciélagos y monos,
              hasta los colibríes e incluso algunos tipos de lagartijas. Pero
              los insectos son el principal grupo de polinizadores, siendo las
              abejas, por lejos, las mayores contribuyentes.
            </p>
            <h2 className="my-3 text-2xl font-semibold md:text-4xl">
              ¿Qué está pasando con la población apícola?
            </h2>
            <p className="text-md md:text-lg">
              ¿Las abejas están desapareciendo? En el caso de las abejas
              melíferas, el panorama general indica que no. Las colonias de
              abejas melíferas gestionadas han aumentado, de hecho, en un 65% a
              nivel mundial desde 1961. <br /> Para las abejas silvestres, la
              situación es más complicada: distintas abejas silvestres tienen
              características biológicas y necesidades muy diferentes, lo que
              complica la evaluación de su desarrollo en general. Sin embargo,
              es una realidad que ciertos grupos de especies de abejas
              silvestres en regiones específicas están disminuyendo. <br /> Y
              tanto las abejas silvestres como las abejas melíferas siguen
              enfrentándose a varios desafíos entre los que se encuentran plagas
              y enfermedades, factores genéticos, falta de nutrición y hábitat
              condiciones climáticas adversas y prácticas agronómicas, entre
              otros.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
