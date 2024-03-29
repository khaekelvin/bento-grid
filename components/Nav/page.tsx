import React from "react";
import LogoSrc from "@/images/pfp1.png";

function Nav() {
  return (
    <>
      <div className="bg-nav-bar">
        <nav className=" max-w-[1080px] mx-auto h-[70px]">
          <div className="flex justify-between items-center lg:mx-0 mx-5">
            <div className="flex">
              <img src={LogoSrc.src} alt="Logo" width={50} />
              <p className="ml-3 text-lg content-center ">King</p>
            </div>

            <div className="flex items-center">
              <button className="border border-white h-10 w-10 rounded-lg text-xl">
                +
              </button>
              <button className="border border-white h-10 w-20 rounded-lg ml-2">
                Account
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
