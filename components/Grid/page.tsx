import React from "react";

function Grid() {
  return (
    <>
      <section className="container grid grid-cols-2 gap-5  max-w-[1080px] h-[700px] mx-auto text-black">
        <div className=" bg-main-one rounded-3xl flex flex-col col-span-1 row-span-1 gap-1">
          <div>
            <p className="text-7xl">DESIGN MEETING</p>
            <div className="flex">
              <p>1</p>
              <p>1</p>
              <p>1</p>
            </div>
          </div>
        </div>
        <div className=" bg-main-two rounded-3xl flex flex-col col-span-1 row-span-2 gap-1"></div>

        <div className=" bg-main-two rounded-3xl flex flex-col col-span-1 row-span-1 gap-1">
          <div>
            <p>Design Meeting</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Grid;
