"use client";
import React from "react";
import LogoSrc from "@/images/pfp2.png";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Grid() {
  return (
    <>
      <section className="container lg:grid lg:grid-cols-2 gap-5  max-w-[1080px] h-[700px] mx-auto text-black grid grid-cols-1 mt-5 lg:mt-0">
        <div className=" bg-main-one rounded-3xl flex flex-col col-span-1 row-span-1 gap-1 justify-center">
          <div className=" max-w-[500px] mx-auto ml-2">
            <p className="lg:text-7xl text-5xl font-bold flex">
              Discover <br></br> Your Style
            </p>
            <div className="flex justify-between flex-col">
              <div>
                <p>
                  At BentoGrid, we're more than just a clothing brand we're a
                  destination for fashion-forward individuals seeking style and
                  convenience.
                </p>
              </div>
              <div>
                <div className="mt-5 flex">
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
              className=" bg-black  object-fill"
              width={100}
            />
            <button className="ml-3 text-lg content-center ">King</button>
          </div>
        </div>

        <div className=" bg-main-two rounded-3xl flex flex-col col-span-1 row-span-1 gap-1 justify-center">
          <div className=" max-w-[500px] mx-auto ml-2">
            <div className="flex">
              <p className="lg:text-7xl text-5xl font-bold mr-1 mb-2">
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
            <div className="flex mt-5">
              <button className=" border-black rounded-3xl w-20 h-10 border-2">
                <div className="rounded-full bg-black w-7 h-7 ml-1"></div>
              </button>
              <div className="flex mt-1">
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
