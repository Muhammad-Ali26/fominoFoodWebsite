import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import Canvas from "./Canvas";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import NavbarMenu from "./NavbarMenu";
import AddAddressFromNavbar from "./AddAddressFromNavbar";
export default function Navbar(props) {
  const location = useLocation();

  return (
    <header
      className={`w-full px-10 lg:px-20 2xl:px-32 fixed z-50 ${props.bgColor}`}
    >
      <nav className="grid grid-cols-3 items-center relative z-50 h-20 ">
        <div className="flex gap-40">
          <Link to="/">
            <img
              src="/images/logo.webp"
              alt="logo"
              className="w-24 top-3 absolute"
            />
          </Link>

          {location.pathname === "/" ? "" : <AddAddressFromNavbar />}
        </div>

        {location.pathname === "/" ? (
          <div></div>
        ) : (
          <div className="relative">
            <input
              type="text"
              placeholder="Search in Fomino..."
              className="bg-white w-full h-12 font-switzer text-tabColor rounded-3xl border-none outline-none px-14"
            />
            <LuSearch className="absolute top-3 left-6 text-2xl" />
          </div>
        )}

        <div className="flex gap-6 justify-end">
          <div className="hidden lg:block">
            <LoginModal />
          </div>

          <div className="hidden lg:block">
            <SignUpModal />
          </div>
          <div className="block lg:hidden">
            <NavbarMenu />
          </div>
          {/* <Canvas /> */}
        </div>
      </nav>
    </header>
  );
}
