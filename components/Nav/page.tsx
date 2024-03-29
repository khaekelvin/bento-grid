import React from "react";
import LogoSrc from "@/images/pfp1.png";

function Nav() {
  return (
    <>
      <div className="bg-slate-400">
        <nav className="bg-slate-900  max-w-[1080px] mx-auto h-[70px]">
          <div className="flex">
            <div className="flex">
              <img src={LogoSrc.src} alt="Logo" width={50} />
              <p className="ml-3 text-lg ">King</p>
            </div>

            <div>
              <button className="border border-white h-10 w-20 rounded-lg">
                +
              </button>
              <button className="border border-white h-10 w-20 rounded-lg">
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
