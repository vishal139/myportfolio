import React from "react";
import Image from "next/image";

import Link from "next/link";

const MyProjectCard = ({ pic, title, year, ProjectDetails, githubLink }) => {
  return (
    <div className="grid grid-cols-3 shadow-xl p-2">
      <div className="col-span-3  md:col-span-1 flex justify-center items-center">
        <div className="flex justify-start items-center rounded-md bg-[#273c75]">
          <Image
            src={pic}
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
            {title}{" "}
          </div>
          <div className="text-lg font-bold text-[#273c75] capitalize col-span-2 md:col-span-1">
            {year}
          </div>
        </div>
        <div className=" text-start p-3 text-[#273c75] font-semibold">
          <ul className="list-decimal list-inside pl-6 space-y-3 mt-4">
            {ProjectDetails?.map((item) => {
              return <li className="text-md" key={item.key}>{item.desc}</li>;
            })}
          </ul>
          <div className="grid grid-cols-2 items-center">
            <div className="pl-6 space-y-3 mt-4 text-blue-500 col-span-2 md:col-span-1">
              <Link
                href={githubLink}
                target="_blank"
              >
                Link to GitHub Repository
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjectCard;
