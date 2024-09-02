import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();

    const logout = () => {
        sessionStorage.removeItem("id");
        dispatch(authActions.logout());
        navigate("/");
        window.location.reload();
    };

    return (
        <>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:mx-auto   sm:pt-10  bg-[#151515]">
                <Link
                    to="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Todo App"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#EEEEEE]">
                        Todo App
                    </span>
                </Link>

                <div className="space-x-9">
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
                            Add Todo
                        </button>
                    </Link>
                    {!isLoggedIn && (
                        <>
                            <Link to="/signup">
                                <button
                                    type="button"
                                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 focus:outline-none focus:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none dark:text-teal-500 dark:bg-teal-800/30 dark:hover:bg-teal-800/20 dark:focus:bg-teal-800/20"
                                >
                                    Sign Up
                                </button>
                            </Link>
                            <Link to="/signin">
                                <button
                                    type="button"
                                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
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
            </div>
        </>
    );
}

export default Navbar;
