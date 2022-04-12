import { Card } from "@components/campaign";
import beeheader from "@public/bee-header.webp";

const campaigns = () => {
  return (
    <div className="mx-auto px-6 py-12 max-w-screen-2xl">
      <h1 className="py-3 text-3xl font-semibold md:text-4xl lg:text-5xl">
        Campañas
      </h1>
      <div className="grid gap-x-6 gap-y-8 md:grid-cols-1 lg:grid-cols-2">
        <Card href="#" imgSrc="/bee-header.webp">
          <h2 className="font-bold">Apicultura de México y el Mundo</h2>
          Grupo para compartir información referente a la apicultura: dudas,
          consejos, materiales, equipos, precios de miel, enjambres, reinas,
          comercialización, entre otros, con el fin de apoyarnos y fortalecer
          esta valiosa actividad, ya seas principiante o profesional.
        </Card>
        <Card href="#" imgSrc="/bee-header.webp">
          <h2 className="font-bold">Apicultores mexicanos</h2>
          Grupo para compartir todo lo relacionado al mundo de las abejas y
          apicultores en México.
        </Card>
        <Card href="#" imgSrc="/bee-header.webp">
          <h2 className="font-bold">
            Cursos, Eventos y Libros sobre Meliponinos y Abejas Meliferas México
          </h2>
          Grupo para publicar cursos, talleres, conferencias, así como libros y
          eventos sobre abejas, especialmente Meliponinos, aunque son
          bienvenidas las abejas melíferas.
        </Card>
        <Card href="#" imgSrc="/bee-header.webp">
          <h2 className="font-bold">
            Dennis vanEngelsdorp: una súplica por las abejas
          </h2>
          Las abejas están muriendo por montones. ¿Por qué? El destacado
          apicultor Dennis vanEngelsdorp da una mirada al delicado e
          incomprendido lugar de esta criatura tan importante en la naturaleza y
          el misterio tras su alarmante desaparición.
        </Card>
      </div>
    </div>
  );
};

export default campaigns;
