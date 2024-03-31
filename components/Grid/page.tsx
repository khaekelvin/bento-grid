"use client";
import React from "react";
import LogoSrc from "@/images/pfp2.svg";
import LogoHol from "@/images/final hollow.png";
import LogoHol1 from "@/images/pfpp.png";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Grid() {
  return (
    <>
      <section className="container lg:grid lg:grid-cols-2 gap-5  max-w-[1080px] h-[700px] mx-auto text-black grid grid-cols-1 mt-5 lg:mt-28 px-2 lg:px-0">
        <div className=" bg-main-one rounded-3xl flex flex-col col-span-1 row-span-1 gap-1 justify-center">
          <div className=" max-w-[500px] mx-auto ml-2">
            <p className="lg:text-7xl text-5xl font-bold flex mb-1 mt-2 lg:mt-0">
              Discover <br></br> Your Style
            </p>
            <div className="flex justify-between flex-col">
              <div>
                <p>
                  At Hollow, we're more than just a clothing brand we're a
                  destination for fashion-forward individuals seeking style and
                  convenience.
                </p>
              </div>
              <div>
                <div className="mt-5 mb-5 lg:mb-0 flex">
                  <p className="font-bold">Trendy</p>
                  <p className="font-bold ml-2">Innovative</p>
                  <p className="font-bold ml-2">Personalized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-main-two rounded-3xl flex flex-col col-span-1 row-span-2 gap-1">
          <div className="flex flex-col">
            <img
              src={LogoSrc.src}
              alt="Logo"
              className="rounded-3xl object-fill flex mx-auto justify-center mt-0 lg:mt-5"
              width={480}
            />
            <div className="flex justify-between mb-5 mx-6 mt-2">
              <button className="text-lg content-center border-2 border-black rounded-full w-28 font-bold">
                King
              </button>
              <button className=" border-black rounded-3xl w-20 h-10 border-2">
                <div className="rounded-full bg-black w-7 h-7 ml-11"></div>
              </button>
            </div>
          </div>
          <div className="flex flex-row mx-auto justify-between">
            <div className="lg:flex w-[480px] justify-between hidden ">
              <div>
                <img
                  src={LogoHol1.src}
                  alt="Logo"
                  className="rounded-3xl object-fill lg:flex mx-auto justify-center mt-7 hidden"
                  width={60}
                />
              </div>

              <div>
                <img
                  src={LogoHol.src}
                  alt="Logo"
                  className="rounded-3xl object-fill flex mx-auto justify-center"
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-main-two rounded-3xl flex flex-col col-span-1 row-span-1 gap-1 justify-center">
          <div className=" max-w-[500px] mx-auto ml-2">
            <div className="flex">
              <p className="lg:text-7xl text-5xl font-bold mr-1 mb-2 lg:mt-0 mt-2">
                Trendsetting{" "}
              </p>

              <div>
                <button className=" border-black rounded-3xl w-10 h-10 border-2 mt-2 lg:mt-6">
                  <div className="rounded-full bg-black w-7 h-7 ml-1"></div>
                </button>
              </div>
            </div>

            <p>
              Stay ahead of the curve with our latest arrivals and exclusive
              collections, curated to reflect the hottest trends in fashion.
            </p>
            <div className="flex mt-5 mb-5 lg:mb-0">
              <button className=" border-black rounded-3xl w-20 h-10 border-2">
                <div className="rounded-full bg-black w-7 h-7 ml-1"></div>
              </button>
              <div className="flex mt-1 mb-2 lg:mb-0">
                <FaTwitter size={30} className="ml-3" />
                <FaFacebook size={30} className="ml-3" />
                <FaInstagram size={30} className="ml-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Grid;
