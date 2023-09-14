import Image from "next/image";
import React from "react";
import ProfileImage from "../public/images/profilepic.jpeg";

const AboutPage = () => {
  return (
    <div
      className="w-full h-screen text-center sm:mt-[-16] mt-24"
      id="about_page"
    >
      <div>
        <h2 className="capitalize text-[#273c75] font-bold tracking-widest">
          About Me
        </h2>
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center mt-0 sm:mt-[-16] ">
          <div className="flex justify-between flex-wrap p-4 mt-8 md:mt-0 text-lg">
            <div>
              Hello, I'm <span className="text-[#273c75] font-bold">Vishal Kachhap </span>,
              a skilled and enthusiastic <span className="text-[#273c75] font-bold">full stack developer. </span> With a passion
              for crafting innovative and user-friendly web applications, I
              possess expertise in both <span className="text-[#273c75] font-bold">front-end</span> and <span className="text-[#273c75] font-bold">back-end</span> development. My
              journey in the world of technology has equipped me with a
              versatile skill set, including proficiency in languages like
              <span className="text-[#273c75] font-bold">JavaScript, HTML, and CSS,</span> as well as experience with frameworks
              such as <span className="text-[#273c75] font-bold">React and Express.</span> I thrive on solving complex challenges,
              from designing seamless user interfaces to building robust
              server-side logic. With a commitment to staying updated in the
              ever-evolving tech landscape, I'm dedicated to delivering
              efficient and elegant solutions that make a meaningful impact.
              Let's collaborate and bring your digital ideas to life!
            </div>
            <div className="mx-auto my-8 bg-blue-400 w-full  md:w-1/2">
              <Image src={ProfileImage} alt="" width={300} height={100} className="mx-auto w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
