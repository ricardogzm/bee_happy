import { Card } from "@components/campaign";

const campaigns = () => {
  return (
    <div className="mx-auto pt-12 px-6 max-w-screen-2xl">
      <h1 className="py-3 text-3xl font-semibold md:text-4xl lg:text-5xl">
        Campañas
      </h1>
      <div className="grid gap-x-6 gap-y-8 md:grid-cols-1 lg:grid-cols-2">
        <Card href="#" imgSrc="/bee-header.webp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat
          expedita totam assumenda veritatis minus ullam impedit aspernatur
          reiciendis repellat.
        </Card>
        <Card href="#" imgSrc="/bee-header.webp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat
          expedita totam assumenda veritatis minus ullam impedit aspernatur
          reiciendis repellat.
        </Card>
        <Card href="#" imgSrc="/bee-header.webp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat
          expedita totam assumenda veritatis minus ullam impedit aspernatur
          reiciendis repellat.
        </Card>
      </div>
    </div>
  );
};

export default campaigns;
