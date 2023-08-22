import React from "react";
import { FaBicycle } from "react-icons/fa";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function AllResturantCards(props) {
  return (
    <div className="shadow-xl rounded-2xl relative ">
      <Link to={props.link}>
        <img src={props.imgSrc} alt={props.alt} className="rounded-t-2xl" />
        <img
          src="/images/resturants/memebank-img.webp"
          alt="Meme-bank"
          className="w-12 h-12 absolute top-1/2 right-5 outline outline-white rounded-md"
        />
        <div className="bg-white rounded-b-2xl">
          <div className="border-b border-gray-400 border-dashed py-6 px-5 lg:px-8">
            <h4 className="text-black font-switzer font-semibold">
              44 Brekkie Eggdrop
            </h4>
            <p className="text-paraColor font-switzer text-sm">
              Fruhstuck, Kaffee
            </p>
          </div>

          <div className="py-4 px-5 lg:px-8 flex items-center gap-5">
            <FaBicycle className="text-xl text-paraColor" />
            <span className="text-paraColor font-switzer font-semibold tracking-wider">
              3,90 € • 25-35 min •{" "}
            </span>
            <BsFillEmojiLaughingFill className="text-2xl text-[#FFCB29]" />
            <span className="text-paraColor font-switzer font-semibold">
              9.0
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
