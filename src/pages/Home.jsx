import React from "react";
//import heroImg from "../components/assets/images/hero.png";
import articlesImg from "../components/assets/images/home-search-bg.png";
import heroImgback from "../components/assets/images/hero-shape-purple.png";
import { About } from "./About";
//import { Courses } from "./Courses";
import { Instructor } from "./Instructor";
import VideoPlayer from "../components/common/VideoPlayer";

export const Home = () => {
  return (
    <>
      <HomeContent />
      <VideoPlayer />
      <About />
      {/*<Courses />*/}
      <Instructor />
    </>
  );
};
export const HomeContent = () => {
  return (
    <>
      <section className="bg-secondary py-10 h-[92vh] md:h-full">
        <div className="container">
          <div className="flex items-center justify-center md:flex-col">
            <div className="left w-1/2 text-black md:w-full">
              <h1 className="text-4xl leading-tight text-black font-semibold">
                Préparez-vous pour la rentrée 2024 <br />
              </h1>
              <h3 className="text-lg mt-3">
                Plus de 200 articles scolaires de haute qualité! pour satisfaire
                tout vos besoins.
              </h3>
              <span className="text-[14px]">
                de grandes marques au meilleur prix
              </span>

              {/*<div className="relative text-gray-600 focus-within:text-gray-400 mt-5">
                <input
                  type="search"
                  className="py-3 text-sm  bg-white rounded-md pl-10 focus:outline-none "
                  placeholder="Search..."
                  autocomplete="off"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <FiSearch />
                  </button>
                </span>
              </div>
              <span className="text-[14px]">
                You`re guaranteed to find something that`s right for you.
              </span>*/}
            </div>
            <div className="right w-1/2 md:w-full relative">
              <div className="images relative">
                <img
                  src={heroImgback}
                  alt=""
                  className=" absolute top-32 left-10 w-96 md:left-10"
                />
                <div className="img h-[85vh] w-full">
                  <img
                    src={articlesImg}
                    alt=""
                    className="h-full w-full object-contain z-20 relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
