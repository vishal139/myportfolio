import React from "react";

import MyProjectCard from "./MyProjectCard";

import NewsAppPic from "../../public/images/mynewsapp.png";
import ChatAppPic from "../../public/images/myChatApp.png";

const Projects = () => {
  const NewsProjectDetails = [
    {
      key: 1,
      desc: `Developed a dynamic and responsive news application using
      React.js, providing real-time news articles to users with
      filtering options`,
    },
    {
      key: 2,
      desc: ` Utilized React.js for component-based development, ensuring a
      scalable and maintainable codebase.`,
    },
    {
      key: 3,
      desc: `Technologies Used: React.js, JavaScript`,
    },
  ];
  const ChatProjectDetails = [
    {
      key: 1,
      desc: ` Developed a comprehensive real-time chat application that enables users to engage in one-on-one and group chats with real-time notifications`,
    },
    {
      key: 2,
      desc: `Implemented user authentication and registration, ensuring secure access to the application.`,
    },
    {
      key: 3,
      desc: `Technologies Used: JavaScript, React.js, Node.js, Express.js, Socket.io`,
    },
  ];
  return (
    // <div className="w-full text-center my-8 mb-0 sm: mt-[700px] md:mt-[100px]">
    <div className="w-full text-center my-8 mb-0" id='project_page'>
      <div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
        <h2 className="capitalize text-[#273c75] font-bold tracking-widest mb-4">
          My Projects
        </h2>
        <MyProjectCard
          pic={NewsAppPic}
          title={`News Applicaton`}
          year={"2021"}
          ProjectDetails={NewsProjectDetails}
          githubLink={`https://github.com/vishal139/ReactNewsApp`}
        />
        <MyProjectCard
          pic={ChatAppPic}
          title={`Chat Applicaton`}
          year={"2023"}
          ProjectDetails={ChatProjectDetails}
          githubLink={`https://github.com/vishal139/mern-chat-app-server`}
        />
      </div>
    </div>
  );
};

export default Projects;
