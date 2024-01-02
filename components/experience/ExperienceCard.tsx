import React from "react";
import Image from "next/image";

import TribeLogo from "../../public/images/tribelogo.jpg";
import Link from "next/link";

const ExperienceCard = () => {
  return (
    <div className="grid grid-cols-3 shadow-xl p-2">
      <div className="col-span-3  md:col-span-1 flex justify-center items-center">
        <div className="flex justify-start items-center rounded-md bg-[#273c75]">
          <Image
            src={TribeLogo.src}
            height={100}
            width={600}
            alt="logo"
            className="p-4 rounded-md w-full"
          />
        </div>
      </div>
      <div className="col-span-3 w-full md:col-span-2">
        <div className="grid grid-cols-2 justify-start p-4">
          <div className="text-lg font-bold text-[#273c75] capitalize col-span-2 md:col-span-1">
            Full Stack Engineer (at Invest with Tribe){" "}
          </div>
          <div className="text-lg font-bold text-[#273c75] capitalize col-span-2 md:col-span-1">
            dec 2021 - oct 2023
          </div>
        </div>
        <div className=" text-start p-3 text-[#273c75] font-semibold">
          <ul className="list-decimal list-inside pl-6 space-y-3 mt-4">
            <li className="text-md">
              Designed and developed the landing page for a stock advisor
              website, including interactive tables, advanced filters, a search
              bar, pagination, and sorting functionalities
            </li>
            <li className="text-md">
              Website Analytics Integration - Implemented Google Analytics and
              Google Tag Manager to track user behavior on the company website.
              - Configured custom events and goals to gather specific insights
              into user interactions. - Collaborated with the marketing team to
              set up conversion tracking for key performance indicators. -
              Analyzed data trends and provided actionable insights to improve
              user experience and website performance.
            </li>
            <li className="text-md">
              Implemented user-friendly pop-up forms to enhance user engagement
              and interaction
            </li>
            <li className="text-md">
              Developed and implemented a cutting-edge real-time alert system by
              harnessing the capabilities of Amazon Simple Queue Service (SQS)
              and seamlessly integrating with Twilio, enabling immediate
              notifications for critical events. This innovative solution
              garnered enthusiastic acclaim from customers and played a pivotal
              role in enhancing their experience.
            </li>
            <li className="text-md">
              Admin Dashboard for User Management - Developed using React.js and
              Node.js. - Implemented user authentication, data visualization,
              and feature to perform CRUD operation
            </li>
            <li className="text-md">
              Conducted code reviews, providing constructive feedback and
              improving overall code quality within the team.
            </li>
          </ul>

          <p className="pl-6 space-y-3 mt-8 text-lg">Visit Invest with tribe</p>
          <div className="grid grid-cols-2 items-center">
            <div className="pl-6 space-y-3 mt-4 text-blue-500 col-span-2 md:col-span-1">
              <Link
                href={"https://expert.investwithtribe.com/"}
                target="_blank"
              >
                Invest with tribe (expert app)
              </Link>
            </div>
            <div className="pl-6 space-y-3 text-blue-500 col-span-2 md:col-span-1">
              <Link
                href={"https://investor.investwithtribe.com/lp"}
                target="_blank"
              >
                Invest with tribe (investor app)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
