import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Todo from "./components/Todo";

import { useDispatch } from "react-redux";
import { authActions } from "./store";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (sessionStorage.getItem("id")) {
            dispatch(authActions.login());
        }
    }, [dispatch]);
    return (
        <>
            <Router>
                <div className="z-10 w-[100%] px-12 py-6 items-center  ">
                    <Navbar />
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
