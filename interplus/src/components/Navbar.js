import { Link } from "gatsby"
import React, { useState } from "react"

export default function Navbar() {
  console.log(window.location.href.split("/").pop())
  const [state, setState] = useState(false)


  return (
    <div className="">
      <div>
        <nav className="bg-white dark:bg-gray-800 shadow w-full z-50 ">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className="w-full justify-between flex items-center">
                <a className="flex-shrink-0" href="/">
                  <span className='font-logo text-indigo-600 hover:text-blue-500'>INTER PLUS</span>
                </a>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      className={`text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium`}
                      to="/"
                    >
                      Pocetna
                    </Link>
                    <Link
                      className={`text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium`}
                      to="/about"
                    >
                      O nama
                    </Link>
                    <Link
                      className={`text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium`}
                      to="/borovnica"
                    >
                      Borovnica
                    </Link>
                    <Link
                      className={`text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium`}
                      to="/sipak"
                    >
                      Sipak
                    </Link>
                    <Link
                      className="text-gray-500  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md  font-medium"
                      to="/gallery"
                    >
                      Galerija
                    </Link>
                    <Link
                      className="text-gray-500  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md  font-medium"
                      to="/contact"
                    >
                      Kontakt
                    </Link>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="ml-4 flex items-center md:ml-6"></div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button onClick={() => {setState(!state)}} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <div id="nav-icon3" className={`${state ? "open" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={`${state ? "" : "hidden ease-in-out"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white w-screen shadow-md">
              <Link
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/"
              >
                Pocetna
              </Link>
              <Link
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/about"
              >
                O Nama
              </Link>
              <Link
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/borovnica"
              >
                Borovnica
              </Link>
              <Link
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/sipak"
              >
                Sipak
              </Link>
              <Link
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/gallery"
              >
                Galerija
              </Link>
              <Link
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/contact"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
