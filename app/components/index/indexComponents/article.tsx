import Image from "next/image";
import GridCategories from "./articleComponents/gridCategories";

const IndexArticle = () => {
  return (
    <article className={``}>
      <div className="flex flex-col my-4 xl:grid xl:grid-cols-6 xl:my-10 xl:mx-10">
        <div className="xl:col-start-1 xl:col-end-5 xl:mx-10 ">
          <div className="w-full h-48 md:h-56 lg:h-[36rem] flex items-center justify-center overflow-hidden relative">
            <Image
              src="/index/mainCouch.jpg"
              className="bg-accentSecondary scale-100 hover:scale-110 transition-all duration-400"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div>
            <div className="border-4 border-b-quaternary">
              <h2 className="flex justify-center py-3 text-3xl text-white font-semibold font-general drop-shadow-[0_2px_5px_rgba(0,0,0,1)]">
                {" "}
                Cordoba Woods{" "}
              </h2>
            </div>

            <div className="bg-transparent absolute top-48 z-10 drop-shadow-[0_2px_5px_rgba(0,0,0,1)] ">
              <span className="font-general text-quaternary text-2xl font-semibold flex mx-2">
                {" "}
                Lo que necesitas.
              </span>
              <span className="text-3xl text-quaternary font-semibold font-general mx-2">
                Donde lo necesites
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 mx-1 h-12  shadow-lg ">
        <div className="col-start-1 px-1 bg-secondary ">
          <span className="text-xs font-semibold block"> Envio gratis </span>
          <span className="text-xs"> En caba o amba</span>
        </div>

        <div className="col-start-2 px-1 bg-secondary ">
          <span className="text-xs font-semibold block"> 30 dias de garantia </span>
          <span className="text-xs"> En todos los productos</span>
        </div>

        <div className="col-start-3 px-1 bg-secondary">
          <span className="text-xs  font-semibold block"> 100% Pagos seguros </span>
          <span className="text-xs"> Con cualquier metodo</span>
        </div>
      </div>

      <GridCategories/>

    </article>
  );
};

export default IndexArticle;
