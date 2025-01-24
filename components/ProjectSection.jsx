import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { project } from "@/data/projects";

const ProjectSection = () => {
  return (
    <div className="w-full pt-5">
      <div className="py-8 w-full max-w-3xl">
        <div className=" font-sans mx-auto w-fit bg-white text-black/90 text-sm rounded-md px-4 font-semibold">
          Projects 💎
        </div>
        <h1 className="font-bold text-4xl text-center py-3">
          {" "}
          What I've Built{" "}
        </h1>
        <h1 className="font-light text-white/50 tracking-wider text-md mb-6 text-center">
          Discover innovation and creativity.{" "}
          <Link href="/projects">
            <button className="text-blue-500 underline hover:text-blue-400">
              Explore solutions
            </button>
          </Link>{" "}
          crafted with precision, showcasing the journey from idea to reality.
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {project.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
