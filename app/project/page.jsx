import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import React from "react";

const page = () => {
  return (
    <div className="center  w-full min-h-screen bg-black text-white ">
      <div className=" flex justify-start items-center flex-col py-10 w-full max-w-2xl  min-h-screen">
        <Navbar />

        <div className="w-full max-w-xl pt-5 sm:px-0 px-2">
          <div className="py-8 w-full ">
            <div className=" font-sans mx-auto w-fit bg-white text-black/90 text-sm rounded-md px-4 font-semibold">
              PROJECTS 🧑‍💻
            </div>
            <h1 className="font-bold text-5xl text-center py-3 flex  justify-center items-center ">
              Crafted with Code <span>🧑‍💻</span>
            </h1>
            <h1 className="font-light text-white/50 tracking-wider text-md mb-6 text-center">
              From Concept to Deployment: A Portfolio Showcasing Intuitive User
              Experiences, Robust Architectures, and Cutting-Edge Features
              <a href="https://github.com/mohit-thakre?tab=repositories">
                <button className="text-blue-500 underline hover:text-blue-400">
                  Explore More
                </button>
              </a>{" "}
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <a
            href="https://github.com/mohit-thakre?tab=repositories"
            className="card  flex justify-center items-center md:flex-row-reverse my-3 py-3 font-semibold font-sans shadow-3xl border border-white/10 rounded-lg w-full hover:bg-[#1f1f1f] duration-150 "
          >
            Explore More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
