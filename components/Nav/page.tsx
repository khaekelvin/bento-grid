import React from "react";
import LogoSrc from "@/images/pfp1.png";
import { LuCrown } from "react-icons/lu";

function Nav() {
  return (
    <>
      <div className="bg-nav-bar text-white">
        <nav className=" max-w-[1080px] mx-auto h-[70px]">
          <div className="flex justify-between items-center lg:mx-0 mx-5">
            <div className="flex">
              <img src={LogoSrc.src} alt="Logo" width={50} />
              <p className="ml-3 text-lg content-center ">King</p>
            </div>

            <div className="flex items-center">
              <button className="border-2 border-white h-10 w-10 rounded-lg text-xl">
                +
              </button>

              <LuCrown className="text-4xl ml-2" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
