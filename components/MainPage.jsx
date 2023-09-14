import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import Link from "next/link";

const MainPage = () => {
  return (
    <div className=" w-full h-screen text-center z-[1]" id="main_page" >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-16">
          <h2>
            Hi I am <span className="text-[#273c75] font-bold">Vishal Kachhap</span>
          </h2>
          <h2>A Full Stack Engineer</h2>
          <p className="my-2 p-2 tracking-wide py-4 text-lg">
            Hello, I'm <span className="text-[#273c75] font-bold">Vishal Kachhap </span>,
            a one-year-experienced <span className="text-[#273c75] font-bold">full stack engineer.</span>  I specialize in crafting
            user-friendly web applications, combining front-end finesse with
            robust back-end functionality. Let's build something great together!
          </p>
          <div className="flex w-full justify-between items-center max-w-[380px] m-auto my-4 p-4">
            <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link
                href="https://www.linkedin.com/in/vishal-kachhap-5a0b1b19b/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="https://github.com/vishal139" target="_blank">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="mailto: vishalkachhap62@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
