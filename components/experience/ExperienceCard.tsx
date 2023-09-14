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
            dec 2021 - aug 2023
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
              Implemented user-friendly pop-up forms to enhance user engagement
              and interaction
            </li>
            <li className="text-md">
              Innovatively incorporated a Live alert feature for investors and
              experts, providing real-time market updates and enhancing the
              site’s value proposition.
            </li>
            <li className="text-md">
              Managed integration and optimization of Google Analytics and
              Google Tag Manager.
            </li>
            <li className="text-md">
              Conducted code reviews, providing constructive feedback and
              improving overall code quality within the team.
            </li>
            <li className="text-md">
              dentified and resolved critical front-end and back-end bugs to
              ensure smooth user experiences.
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
