import React from "react";

function Grid() {
  return (
    <>
      <section className="container grid grid-cols-2 gap-5 mt-10 lg:mt-20 max-w-[1080px] mx-auto h-[70px]">
        <div className=" bg-white rounded-xl flex flex-col col-span-1 row-span-1 gap-1">
          1
        </div>
        <div className=" bg-amber-600 rounded-xl flex flex-col col-span-1 row-span-1 gap-1">
          2
        </div>

        <div className=" bg-teal-950 rounded-xl flex flex-col col-span-1 row-span-2 gap-1">
          3
        </div>
      </section>
    </>
  );
}

export default Grid;
