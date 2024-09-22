import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

import logoImage from "../task.png";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logout = () => {
    sessionStorage.removeItem("id");
    dispatch(authActions.logout());
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-4 bg-[#151515]">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logoImage} className=" size-10" alt="Todo App" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#EEEEEE]">
            Task Manager
          </span>
        </Link>

        {/* Regular navbar for medium and larger screens */}
        <div className="sm:hidden md:hidden space-x-9">
          <Link to="/">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:bg-blue-100 focus:text-blue-800 active:bg-blue-100 active:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:bg-blue-800/30 dark:focus:text-blue-400 dark:active:bg-blue-800/30 dark:active:text-blue-400"
            >
              Home
            </button>
          </Link>
          <Link to="/about">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:bg-blue-100 focus:text-blue-800 active:bg-blue-100 active:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:bg-blue-800/30 dark:focus:text-blue-400 dark:active:bg-blue-800/30 dark:active:text-blue-400"
            >
              About
            </button>
          </Link>
          <Link to="/todo">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:bg-blue-100 focus:text-blue-800 active:bg-blue-100 active:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:bg-blue-800/30 dark:focus:text-blue-400 dark:active:bg-blue-800/30 dark:active:text-blue-400"
            >
              Add Tasks
            </button>
          </Link>
          {!isLoggedIn && (
            <>
              <Link to="/signup">
                <button
                  type="button"
                  className="py-3 px-4 
                  inline-flex items-center gap-x-2 text-sm font-medium
                   rounded-lg border border-transparent
                    bg-teal-100 text-teal-800 hover:bg-teal-200 
                    focus:outline-none focus:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none
                     dark:text-teal-500 dark:bg-teal-800/30 dark:hover:bg-teal-800/20
                      dark:focus:bg-teal-800/20"
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/signin">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex 
                  items-center gap-x-2 text-sm font-medium rounded-lg border
                   border-transparent bg-blue-100 text-blue-800
                    hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                >
                  Sign In
                </button>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                  onClick={logout}
                >
                  Logout
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu icon */}
        <div className="hidden sm:flex md:flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-[#EEEEEE] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0  w-[300px] h-[100%] bg-[#151515] transform ${
          !isSidebarOpen ? "translate-x-full" : "translate-x-0"
        } transition-transform duration-300 ease-in-out sm:block md:block hidden z-50`}
      >
        <div className="flex flex-col place-items-center p-4 space-y-4">
          <button
            onClick={toggleSidebar}
            className="text-[#EEEEEE] self-end focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
          <Link to="/" onClick={toggleSidebar}>
            <button
              type="button"
              className="py-3 px-4 w-full text-left text-sm font-medium text-blue-600 hover:bg-blue-100 hover:text-blue-800"
            >
              Home
            </button>
          </Link>
          <Link to="/about" onClick={toggleSidebar}>
            <button
              type="button"
              className="py-3 px-4 w-full text-left text-sm font-medium text-blue-600 hover:bg-blue-100 hover:text-blue-800"
            >
              About
            </button>
          </Link>
          <Link to="/todo" onClick={toggleSidebar}>
            <button
              type="button"
              className="py-3 px-4 w-full text-left text-sm font-medium text-blue-600 hover:bg-blue-100 hover:text-blue-800"
            >
              Add Tasks
            </button>
          </Link>
          {!isLoggedIn && (
            <>
              <Link to="/signup" onClick={toggleSidebar}>
                <button
                  type="button"
                  className="py-3 px-[80px] w-full text-left text-sm 
                    rounded-lg border
                   border-transparent bg-blue-100 text-blue-800
                    hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/signin" onClick={toggleSidebar}>
                <button
                  type="button"
                  className="py-3 px-[80px] w-full text-left text-sm 
                    rounded-lg border border-transparent
                    bg-teal-100 text-teal-800 hover:bg-teal-200 
                    focus:outline-none focus:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none
                     dark:text-teal-500 dark:bg-teal-800/30 dark:hover:bg-teal-800/20
                      dark:focus:bg-teal-800/20"
                >
                  Sign In
                </button>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link
                to="/"
                onClick={() => {
                  toggleSidebar();
                  logout();
                }}
              >
                <button
                  type="button"
                  className="py-3 px-[80px] w-full text-left text-sm items-center gap-x-2  font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                >
                  Logout
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Overlay to close sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-100 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Navbar;
