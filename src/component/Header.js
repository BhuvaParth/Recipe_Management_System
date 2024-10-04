import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-slate-100 shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-between sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to={"/home"} className="text-2xl font-bold">
                  My Food
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-2">
                  <Link
                    to={"/search"}
                    className="flex items-center gap-2 text-gray-900 px-3 py-2 text-lg font-bold transition duration-300 ease-in-out hover:text-indigo-600"
                  >
                    Search
                    <IoSearch />
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0  items-center pr-2 hidden md:flex">
              <Link
                to={"/addrecipe"}
                className="relative rounded bg-gray-800 px-3 py-2 text-slate-100 hover:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration"
              >
                Add Recipe
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              className="flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              to={"/search"}
            >
              Search
              <IoSearch />
            </Link>
            <Link
              className="flex items-center justify-center rounded-md bg-gray-800 px-3 py-2 text-base font-medium text-slate-100 hover:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration"
              to={"/addrecipe"}
            >
              Add Recipe
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
