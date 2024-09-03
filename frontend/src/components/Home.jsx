import React from "react";

function Home() {
    return (
        <>
            <div className="flex flex-col items-center gap-8 sm:text-wrap  sm:pt-0 sm:px-[25px] h-[85dvh] w-full justify-center px-[50px] pt-[25px] pb-[25px] bg-[#151515]	">
                <h1 className="text-[#EEEEEE] text-center text-[70px]  font-bold sm:text-[50px] ">
                    Organize your <br />{" "}
                    <span className="text-[#C73659] text-[70px] font-bold sm:text-[50px]">
                        work
                    </span>{" "}
                    &{" "}
                    <span className="text-[#C73659] text-[70px] font-bold sm:text-[50px]">
                        life{" "}
                    </span>{" "}
                    , finally.
                </h1>
                <p className="text-[#EEEEEE] text-xl font-medium ">
                    Become focused, organized & productive. <br />{" "}
                    <span className="ml-24 p-2 ">
                        {" "}
                        with{" "}
                        <span className="text-[#C73659] text-xl font-medium">
                            Todo App
                        </span>{" "}
                        The World's{" "}
                        <span className="text-[#C73659] text-xl font-medium">
                            {" "}
                            #1
                        </span>{" "}
                        Task Manager App.{" "}
                    </span>
                </p>
            </div>
        </>
    );
}

export default Home;
