import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const defaultLinkClass =
    "text-[#FE9A00] hover:text-[#D47F00] transition duration-300 font-semibold";

  
  const scrolledLinkClass =
    "text-[#FE9A00] hover:text-[#D47F00] transition duration-300 font-semibold";

  // Mobil
  const mobileLinkClass =
    "text-gray-900 hover:text-[#FE9A00] text-lg transition duration-300 font-semibold";

  const navClass = isScrolled ? "bg-white shadow-md" : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ease-in-out ${navClass}`}
    >
      <div className="container mx-auto flex justify-between items-center px-8">
        <Link
          to="/"
          className={`flex items-center space-x-2 ${
            isScrolled ? "text-[#FE9A00]" : "text-[#FE9A00]"
          }`}
        >
          <img src={logo} alt="Aranybúza logó" className="h-10 w-auto" />
        </Link>

        {/* Desktop  */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={isScrolled ? scrolledLinkClass : defaultLinkClass}
          >
            Kezdőlap
          </Link>
          <Link
            to="/termekek"
            className={isScrolled ? scrolledLinkClass : defaultLinkClass}
          >
            Termékeink
          </Link>
          <Link
            to="/rolunk"
            className={isScrolled ? scrolledLinkClass : defaultLinkClass}
          >
            Rólunk
          </Link>
          <Link
            to="/kapcsolat"
            className={isScrolled ? scrolledLinkClass : defaultLinkClass}
          >
            Kapcsolat
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={
              isScrolled
                ? "text-[#FE9A00] focus:outline-none"
                : "text-[#FE9A00] focus:outline-none"
            }
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-900 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link to="/" onClick={toggleMenu} className={mobileLinkClass}>
            Kezdőlap
          </Link>
          <Link to="/termekek" onClick={toggleMenu} className={mobileLinkClass}>
            Termékeink
          </Link>
          <Link to="/rolunk" onClick={toggleMenu} className={mobileLinkClass}>
            Rólunk
          </Link>
          <Link
            to="/kapcsolat"
            onClick={toggleMenu}
            className={mobileLinkClass}
          >
            Kapcsolat
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
