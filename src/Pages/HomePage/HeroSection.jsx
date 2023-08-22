// @ts-nocheck
import React from "react";
import Navbar from "../../Components/Navbar";
import Link from "react-router-dom";
import GoogleLocationSearch from "./GoogleLocationSearch";

export default function HeroSection() {
  return (
    <section className="relative">
      <Navbar bgColor="bg-white " />
      <div className="bg-heroSectionBg pt-28">
        <div className="lg:grid grid-cols-2 w-[85%] md:w-[80%] lg:w-[70%] 2xl:w-[65%] m-auto pt-20 space-y-12 lg:space-y-0">
          <div className="space-y-10">
            <h1 className="text-4xl md:text-[52px] text-white font-switzer font-extrabold max-w-sm leading-normal">
              Discover and get great food.
            </h1>

            {/* <GoogleLocationSearch /> */}
            <div>
              <Link
                to="/resturants"
                className="bg-white text-black px-10 py-3 font-switzer font-semibold hover:bg-black hover:text-white duration-300"
              >
                Explore Restaurants
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end gap-10">
            <div>
              <img
                src="/images/hero-img-three.webp"
                alt="hero-img"
                className="w-[110px] object-contain"
              />
            </div>
            <div>
              <img
                src="/images/hero-img-one.webp"
                alt="hero-img"
                className="w-[250px] object-contain"
              />
              <img
                src="/images/hero-img-two.webp"
                alt="hero-img"
                className="w-[250px] mt-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
