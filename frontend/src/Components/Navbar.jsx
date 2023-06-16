/* eslint-disable react/prop-types */

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-[#073054]  dark:bg-gray-900 w-full shadow-md fixed z-20 top-0 left-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-64 ">
          <a href="" className="flex items-center">
            <img
              src="./assets/logo/Logo RP.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <h1 className=" text-[32px] font-semibold text-[#ECB365] font-poppins">
              Raise{" "}
              <span className="text-white font-thin text-[24px]">
                Production
              </span>
            </h1>
          </a>

          <div className="flex md:order-2">
            {!auth ? (
              <ul className="flex flex-row space-x-8 mt-[20px] h-16">
                <li className="mt-1.5">
                  <a
                    onClick={() => navigate("/login")}
                    href="/login"
                    className="text-[#ECB365] hover:text-[#e19f42] text-[16px]  font-poppins font-thin"
                  >
                    {" "}
                    Masuk
                  </a>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => navigate("/register")}
                    className="text-white bg-[#ECB365] hover:bg-[#e19f42] focus:ring-4 focus:outline-none focus:ring-[#ECB365] font-medium rounded-md text-[16px] px-2 py-2 text-center font-poppins mr-3 md:mr-0 "
                  >
                    Daftar
                  </button>
                </li>
              </ul>
            ) : (
              <div
                className="mt-[20px]  h-16"
                onMouseOver={props.DropdownShowUp}
                onMouseLeave={props.DropdownHidden}
              >
                <a href="#">
                  <ul className="flex flex-row space-x-3 items center">
                    <li>
                      <div className="relative w-10 h-10 overflow-hidden bg-gray-900 rounded-full">
                        <svg
                          className="absolute w-12 h-12 text-white -left-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </li>
                    <li className="mt-2.5">
                      <p className="font-poppins text-[#ECB365] ">
                        {" "}
                        {auth.nama}{" "}
                      </p>
                    </li>
                  </ul>
                </a>
              </div>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4  font-medium font-poppins bg-[#073054]  md:flex-row md:space-x-8 md:mt-0  ">
              <li>
                <button>
                  <a
                    href="/"
                    onClick={() => "/"}
                    className="nav"
                    aria-current="page"
                  >
                    Beranda
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <Link to="/gallery" className="nav">
                    Galeri
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <a onClick={props.pushButtonAboutUs} className="nav">
                    Tentang Kami
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a onClick={props.pushButtonService} className="nav">
                    Layanan
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a onClick={props.pushButtonContact} className="nav">
                    Kontak Kami
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
