// @ts-nocheck
import React from "react";
import AllResturantCards from "./AllResturantCards";
import resturantCardData from "../Data";

export default function AllResturants() {
  return (
    <div>
      <h4 className="text-2xl lg:text-4xl text-white font-switzer font-semibold">
        All restaurants
      </h4>

      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 pt-10 pb-10 md:pb-20 space-y-5 md:space-y-0">
        {resturantCardData?.map((res, index) => (
          <AllResturantCards
            imgSrc={`/images/resturants/res-card-${res?.img}.webp`}
            alt={`card-image-${index + 1}`}
            link={res?.link}
          />
        ))}
      </div>
    </div>
  );
}
