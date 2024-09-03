import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`${window.location.origin}/api/v1/signin`, Inputs).then(
      (response) => {
        setInputs({ email: "", password: "" });
        if (response.data.message === "Please Enter Correct Password") {
          toast.error(response.data.message);
        } else if (response.data.message === "Please Register First") {
          toast.error(response.data.message);
        } else if (response.data.others.email === Inputs.email) {
          sessionStorage.setItem("id", response.data.others._id);

          setTimeout(() => {
            dispatch(authActions.login());
            toast.success("Login Successful !");
          }, 1500);
          navigate("/");
          window.location.reload();
        }
      },
      (error) => {
        toast.error(error.response.data.message);
      }
    );
  };
  return (
    <>
      <div className="flex flex-col items-center sm:flex-wrapsm:px-5 sm:items-center sm:justify-center sm:w-full sm:h-full gap-8 h-[85dvh] w-full justify-center px-[50px] pt-[25px] pb-[25px] bg-[#151515]	">
        <Toaster position="top-center" reverseOrder={true} />
        <div className="mt-7  p-8 sm:w-[350px] w-[500px] bg-[#151515] border border-gray-200  text-[#EEEEEE]  rounded-xl shadow-sm">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold pb-2">Sign in</h1>
              <p className="mt-2 text-sm ">
                Don't have an account? &nbsp; &nbsp;
                <span
                  className="text-[#C73659] decoration-2 hover:underline cursor-pointer focus:outline-none focus:underline font-medium"
                  onClick={() => navigate("/signup")}
                >
                  Signup here
                </span>
              </p>
            </div>

            <div className="mt-5">
              <form>
                <div className="grid gap-y-4 ">
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full text-[#EEEEEE] bg-[#151515] border border-gray-600 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none"
                        required
                        aria-describedby="email-error"
                        value={Inputs.email}
                        onChange={change}
                      />
                      <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                        <svg
                          className="size-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="py-3 px-4 block w-full text-[#EEEEEE] bg-[#151515] border border-gray-600  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        aria-describedby="password-error"
                        value={Inputs.password}
                        onChange={change}
                      />
                      <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                        <svg
                          className="size-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="password-error"
                    >
                      8+ characters required
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#C73659] text-[#EEEEEE] hover:text-[#EEEEEE] focus:outline-none hover:bg-[#A91D3A]  disabled:opacity-50 disabled:pointer-events-none"
                    onClick={submit}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
