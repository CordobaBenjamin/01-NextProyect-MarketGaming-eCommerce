import React from "react";
import Image from "next/image";

const GridCategories = () => {
  return (
    <div className="mx-5 my-10 bg-transparent">

      <div className="grid grid-cols-3 grid-rows-2 gap-2 ">
        
        <div className="bg-accentTertiary col-start-1 col-end-2 p-1 rounded-sm">
          <div className="h-52 relative">
            <Image
              className=""
              layout="fill"
              objectFit="cover"
              src="/index/desingSection.jpg"
              alt="logo"
            />
          </div>
        </div>

        <div className="bg-accentTertiary col-start-2 p-1 rounded-sm">
          <div className=" w-full h-full col-start-1 col-end-2 relative ">
            <Image
              layout="fill"
              objectFit="cover"
              src="/index/chairSection.jpg"
              alt="logo"
            />
          </div>
        </div>

        <div className="bg-accentTertiary col-start-3 col-end-4 row-start-1 row-end-3 p-1 rounded-sm">
          <div className=" w-full h-full  col-start-1 col-end-2 relative ">
            <Image
              layout="fill"
              objectFit="cover"
              src="/index/lightSection.jpg"
              alt="logo"
            />
          </div>
        </div>

        <div className="bg-accentTertiary col-start-1 col-end-3 p-1 rounded-sm">
          <div className=" w-full h-full   col-start-1 col-end-2 relative">
            <Image
              layout="fill"
              objectFit="cover"
              src="/index/couchSection.jpg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCategories;
