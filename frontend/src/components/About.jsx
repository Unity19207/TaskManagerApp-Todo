import React from "react";

function About() {
    return (
        <>
            <div className="flex flex-col items-center sm:flex-wrap sm:text-wrap  sm:h-[100%] gap-8 h-[85dvh] w-full justify-center px-[50px] pt-[25px] pb-[25px] bg-[#151515]	">
                <h1 className="text-[#EEEEEE] text-center text-[70px] font-bold sm:text-[40px]   ">
                    About Us
                </h1>
                <p className="text-[#EEEEEE] text-sm leading-relaxed text-center  font-light max-w-[900px]">
                    Welcome to Todo App
                    <br /> your personal productivity companion! Todo App is a
                    simple yet powerful ToDo application designed to help you
                    stay organized, manage your time effectively, and achieve
                    your goals with ease. Whether you're managing your daily
                    tasks, planning a project, or tracking long-term goals, Todo
                    App is here to make your life easier.
                    <br /> Why Todo App? In today's fast-paced world, keeping
                    track of your tasks can be overwhelming. Todo App is
                    designed to simplify your life by providing an efficient way
                    to manage your to-dos, reduce stress, and help you achieve
                    more. Whether you're a student, professional, or just
                    someone who loves to stay organized, Todo App is the tool
                    you need.
                </p>
            </div>
        </>
    );
}

export default About;
