import Link from "next/link";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ project }) => {
  return (
    <div className="body">
      <div className="card  flex flex-col md:flex-row-reverse shadow-3xl border border-white/10 rounded-lg w-full h-[280px]">
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full rounded-md md:rounded-lg object-cover object-top"
          />
        </div>
        <div className="p-6">
          <div className="rounded-full font-sans py-1 px-4 border border-white/60 text-xs transition-all shadow-sm w-fit font-bold text-center">
            {project.title}
          </div>
          <h1 className="font-sans text-xl py-2 font-bold">
            {project.description}
          </h1>
          <ul className="py-3 space-y-2 text-sm font-sans text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index} className="flex justify-start items-center gap-2">
                <FaRegCheckCircle className=" text-green-500" />
                {feature.length > 37 ? `${feature.substr(0, 37)}...` : feature}
              </li>
            ))}
          </ul>
          <div className="flex justify-start items-center gap-3">
            <a
              href={project.sourceLink}
              className="font-semibold text-sm hover:scale-110 transition-transform duration-300 flex items-center px-3 bg-[#212121] py-1 rounded-lg border border-white/20"
            >
              <FaGithub className="mr-1" /> Source
            </a>

            <a
              href={project.liveLink}
              className="group relative hover:scale-110 duration-300  font-semibold text-sm flex items-center px-3 py-1 rounded-lg border border-white/20 bg-[#212121] overflow-hidden"
            >
              <span className="relative z-10 flex items-center">Live</span>
              <MdArrowOutward className="ml-1 transition-transform group-hover:translate-x-2 group-hover:rotate-45 duration-300 text-md" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
