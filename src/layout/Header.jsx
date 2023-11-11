import React, { useState } from "react";
import Logo from "../assets/logo.png";
import List from "../assets/List.png";
import Search from "../assets/search.png";
import Cart from "../assets/cart.png";
import Sidebar from "./Sidebar";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="h-[60px] bg-primary-100 sticky top-0 z-[100]">
        <div className="container mx-auto h-full">
          <nav className="flex items-center justify-between h-full">
            <div className="flex gap-2">
              <button
                onClick={() => setIsOpen(true)}
                className="bg-white rounded-lg py-1 px-2"
              >
                <img className="w-[14px]" src={List} alt="" />
              </button>
              <button className="bg-white rounded-lg py-1 px-2">
                <span className="text-sm font-[800] text-[#303030]">EN</span>
              </button>
            </div>
            <div className="max-w-[140px]">
              <a href="/">
                <img className="w-full" src={Logo} alt="Karaz" />
              </a>
            </div>
            <div className="flex gap-2">
              <a href="/" className="bg-white rounded-lg p-2">
                <img className="w-[14px]" src={Search} alt="" />
              </a>
              <a href="/" className="bg-white rounded-lg p-2">
                <img className="w-[14px]" src={Cart} alt="" />
              </a>
            </div>
          </nav>
        </div>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
