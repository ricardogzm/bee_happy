import Head from "next/head";
import type { NextPage } from "next";
import { HeaderForm } from "@components/home/HeaderForm";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bee Happy</title>
        <meta name="description" content="Página principal de Bee Happpy" />
      </Head>
      <div className="bg-yellow-500 pb-6 md:pb-10">
        <header className="flex justify-between">
          <div className="mx-auto md:flex-shrink-0 md:max-w-lg lg:max-w-xl">
            <section className="mx-6 mt-20">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                Lorem, ipsum dolor sit.
              </h1>
              <p className="text-base sm:text-lg text-gray-800 font-medium mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                impedit natus eveniet optio id aperiam.
              </p>

              <HeaderForm />
            </section>
          </div>

          <div className="hidden md:block relative overflow-hidden">
            <img
              className="max-w-none rounded-bl-[200px]"
              width="1060"
              height="720"
              src="/bee-header.webp"
              alt="Bees"
            />
          </div>
        </header>
        <div className="mt-12 mx-auto flex justify-center">
          <section className="max-w-screen-xl mx-6">
            <h2 className="text-2xl md:text-5xl font-semibold mb-4 mt-6">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-lg md:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              iusto eius quos, omnis iste pariatur tenetur, unde deleniti cumque
              fuga necessitatibus distinctio quo tempora laborum fugit adipisci
              magni voluptas, at quam neque itaque sequi inventore et eligendi!
              Laudantium iusto numquam, facere tempora nam neque qui rerum
              deleniti aspernatur. Quos laboriosam temporibus accusamus autem
              molestiae, sequi iure ut labore odio blanditiis doloribus nihil
              natus explicabo veritatis eaque? Eum, laudantium quia? Vero
              explicabo molestiae praesentium magni obcaecati cum beatae
              molestias ab ea aspernatur. Laudantium excepturi exercitationem
              quas explicabo iste velit error ipsum nihil at esse aliquam,
              cumque aperiam libero accusantium, totam ullam.
            </p>
            <h2 className="text-2xl md:text-5xl font-semibold mb-4 mt-6">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-lg md:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              iusto eius quos, omnis iste pariatur tenetur, unde deleniti cumque
              fuga necessitatibus distinctio quo tempora laborum fugit adipisci
              magni voluptas, at quam neque itaque sequi inventore et eligendi!
              Laudantium iusto numquam, facere tempora nam neque qui rerum
              deleniti aspernatur. Quos laboriosam temporibus accusamus autem
              molestiae, sequi iure ut labore odio blanditiis doloribus nihil
              natus explicabo veritatis eaque? Eum, laudantium quia? Vero
              explicabo molestiae praesentium magni obcaecati cum beatae
              molestias ab ea aspernatur. Laudantium excepturi exercitationem
              quas explicabo iste velit error ipsum nihil at esse aliquam,
              cumque aperiam libero accusantium, totam ullam.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
