import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A groundbreaking platform for online learning.",
      features: [
        "Revolutionizing online education tools",
        "Responsive, modern, and scalable platform",
        "Designed for seamless user experience",
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80",
      sourceLink: "https://github.com/project-alpha",
      liveLink: "https://project-alpha.live",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "A next-gen solution for task management.",
      features: [
        "Streamlined workflows and productivity tools",
        "Cross-platform support",
        "Optimized for teams and individuals",
      ],
      image:
        "https://images.unsplash.com/photo-1533228100848-1c05e5c10c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      sourceLink: "https://github.com/project-beta",
      liveLink: "https://project-beta.live",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "An innovative platform for fitness enthusiasts.",
      features: [
        "Personalized workout plans",
        "Integrated health tracking",
        "Community-driven support",
      ],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      sourceLink: "https://github.com/project-gamma",
      liveLink: "https://project-gamma.live",
    },
  ];

  return (
    <div className="w-full">
      <div className="py-8 w-full max-w-3xl">
        <h1 className="font-bold text-4xl text-center"> Projects </h1>
        <h1 className="font-light text-md mb-6 text-center">
          Explore my journey of building practical, scalable, and creative
          solutions.{" "}
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
