import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import { useEffect } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useUser } from "hooks/useUser";
import { HeaderForm } from "@components/home";
import beeheader from "@public/bee-header.webp";

const Home: NextPage = () => {
  const { data } = useUser();

  useEffect(() => {
    if (data?.currentUser) router.push("/feed");
  }, [data]);

  if (data?.currentUser) {
    return <div>Redirecting to feed</div>;
  }

  return (
    <>
      <Head>
        <title>Bee Happy</title>
        <meta name="description" content="Página principal de Bee Happpy" />
      </Head>
      <div className="bg-yellow-500">
        <header className="flex justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              bounce: 0.5,
              stiffness: 100,
            }}
            className="mx-auto md:max-w-lg md:flex-shrink-0 lg:max-w-xl"
          >
            <section className="mx-6 mt-12">
              <h1 className="py-3 text-2xl font-bold text-gray-800 sm:text-3xl lg:text-5xl">
                Las abejas necesitan nuestra ayuda.
              </h1>
              <p className="pb-8 text-base font-medium text-gray-800 sm:text-lg">
                Únete ahora a una comunidad de personas preocupadas por el
                bienestar del medio ambiente y las abejas.
              </p>

              <HeaderForm />
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              type: "spring",
              bounce: 0.5,
              stiffness: 100,
            }}
            className="hidden max-h-min overflow-hidden md:block"
          >
            <Image
              layout="fixed"
              width="1060"
              height="720"
              className="rounded-bl-[200px]"
              src={beeheader}
              alt="Bees"
              priority
            />
          </motion.div>
        </header>
        <div className="mx-auto flex justify-center bg-white pt-8 pb-10">
          <section className="mx-6 max-w-screen-xl">
            <div className="my-4 w-1/2">
              <iframe
                width="100%"
                height="120"
                scrolling="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/466282227&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false"
              ></iframe>
              <div
                style={{
                  fontSize: "10px",
                  color: "#cccccc",
                  lineBreak: "anywhere",
                  wordBreak: "normal",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontFamily:
                    "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                  fontWeight: 100,
                }}
              >
                <a
                  href="https://soundcloud.com/rousseaumusique"
                  title="Rousseau"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  Rousseau
                </a>{" "}
                ·{" "}
                <a
                  href="https://soundcloud.com/rousseaumusique/rimsky-korsakov-flight-of-the-bumblebee-arr-rachmaninoff"
                  title="Rimsky-Korsakov - Flight Of The Bumblebee (arr. Rachmaninoff)"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  Rimsky-Korsakov - Flight Of The Bumblebee (arr. Rachmaninoff)
                </a>
              </div>
            </div>

            <h2 className="my-2 text-2xl font-semibold md:text-4xl">
              El poder de la polinización
            </h2>
            <p className="text-md mb-6 md:text-lg">
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
            <h2 className="my-2 text-2xl font-semibold md:text-4xl">
              ¿Qué está pasando con la población apícola?
            </h2>
            <p className="text-md mb-6 md:text-lg">
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
            <h2 className="my-2 text-2xl font-semibold md:text-4xl">
              Documental de abejas
            </h2>
            <iframe
              width="50%"
              className="aspect-video"
              src="https://www.youtube.com/embed/jfX09ZcxK64"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
