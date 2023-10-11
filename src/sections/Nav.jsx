import logo from "../assets/logo.svg";
import dark_logo from "../assets/dark_logo.svg"
import { navLinks } from "../constants/navLinks";
import ContactButton from "../components/ContactButton";
import hamburger from "../assets/icons/hamburger.svg";
import { useState } from "react";
import Menu from "../components/Menu";
import right_arrow from '../assets/icons/right_arrow.svg'

const Nav = ({ isMenuShown, setIsMenuShown }) => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <div className=" rounded-[20px]  pl-8  bg-primary dark:bg-secondary">
      <div className="flex justify-between items-center">
        <div className="max-sm:ml-0 flex gap-1 justify-center items-center">
          <img src={`${isDarkMode ? dark_logo : logo}`} alt="" className=""/>
          <p className="font-bold text-3xl">Hulty</p>
        </div>
        <div className="flex gap-10 max-lg:hidden">
          {navLinks.map((link) => (
            <a href={link.link} className="text-lg">
              {link.name}
            </a>
          ))}
        </div>
        <ContactButton />
        <div
          className=" block lg:hidden mr-8 cursor-pointer"
          onClick={() => setIsMenuShown(!isMenuShown)}
        >
          <img src={isMenuShown ? right_arrow : hamburger} alt="" height={24} width={24} className={`fill-${isDarkMode ? `primary` : 'white'}`}/>
        </div>
      </div>
      <div className="ml-[-32px]">
        {isMenuShown && (
          <Menu isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
        )}
      </div>
    </div>
  );
};

export default Nav;
