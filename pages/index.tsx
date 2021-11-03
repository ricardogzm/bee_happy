import Head from "next/head";
import type { NextPage } from "next";
import { HeaderForm } from "@components/home";

const Home: NextPage = () => {
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
                Lorem, ipsum dolor sit.
              </h1>
              <p className="pb-8 text-gray-800 text-base font-medium sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                impedit natus eveniet optio id aperiam.
              </p>

              <HeaderForm />
            </section>
          </div>

          <div className="relative hidden overflow-hidden md:block">
            <img
              className="rounded-bl-[200px] max-w-none"
              width="1060"
              height="720"
              src="/bee-header.webp"
              alt="Bees"
            />
          </div>
        </header>
        <div className="flex justify-center mt-12 mx-auto">
          <section className="mx-6 max-w-screen-xl">
            <h2 className="mb-4 mt-6 text-2xl font-semibold md:text-5xl">
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
            <h2 className="mb-4 mt-6 text-2xl font-semibold md:text-5xl">
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
