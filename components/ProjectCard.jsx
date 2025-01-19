import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = () => {
  return (
    <div className="body">
      <div className="card flex flex-col md:flex-row-reverse shadow-3xl border border-white/10 rounded-lg w-full h-[280px]">
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="card-image"
            className="h-full w-full rounded-md md:rounded-lg object-cover"
          />
        </div>
        <div className="p-6">
          <div className="rounded-full font-sans py-1 px-4 border border-white/60 text-xs transition-all shadow-sm w-fit font-bold text-center">
            STARTUP • 2024
          </div>
          <h1 className="font-sans text-xl py-2 font-bold">
            Lyft launching cross-platform service this week
          </h1>
          <ul className="py-3 space-y-2 text-sm font-sans text-gray-300">
            <li className="flex justify-start items-center gap-2">
              <FaRegCheckCircle className=" text-green-500" /> Revolutionizing
              online educatedge tools
            </li>
            <li className="flex justify-start items-center gap-2">
              <FaRegCheckCircle className=" text-green-500" /> Responsive,
              modern, and scalable platform
            </li>
            <li className="flex justify-start items-center gap-2">
              <FaRegCheckCircle className=" text-green-500" /> Designed for
              seamless user experience
            </li>
          </ul>
          <div className="flex justify-start items-center gap-3">
            <a
              href="#"
              className="font-semibold text-sm hover:scale-110 transition-transform duration-300 flex items-center px-3 bg-[#212121] py-1 rounded-lg border border-white/20"
            >
              <FaGithub className="mr-1" /> Source
            </a>

            <a
              href="#"
              className="group relative font-semibold text-sm flex items-center px-3 py-1 rounded-lg border border-white/20 bg-[#212121] overflow-hidden"
            >
              <span className="relative z-10 flex items-center">Live</span>
              <MdArrowOutward className="ml-2 transition-transform group-hover:translate-x-2 group-hover:rotate-45 duration-300 text-md" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
