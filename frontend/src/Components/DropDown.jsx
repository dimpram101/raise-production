/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const DropDown = (props) => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <>
      <div
        onMouseLeave={props.DropdownHidden}
        onMouseOver={props.DropdownShowUp}
        id="dropdownAvatarName"
        className={` ${props.Nohidden} z-10  bg-white divide-y divide-gray-100 fixed font-poppins rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          className="py-2 text-sm text-[#073054] dark:text-gray-200"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li>
            <a
              href="/myorder"
              onClick={() => navigate("/myorder")}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Pesanan
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Akun Saya
            </a>
          </li>
          {auth && auth.role === "admin" && (
            <li>
              <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
          )}
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-red-800 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={() => {
              localStorage.removeItem("accessToken");
              setAuth(null);
              navigate("/");
            }}
          >
            Sign out
          </a>
        </div>
      </div>
    </>
  );
};

export default DropDown;
