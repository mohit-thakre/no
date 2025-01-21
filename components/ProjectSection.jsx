import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

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
  const project = [
    {
      id: 1,
      title: "LearnPros 2024",
      description: "An innovative EdTech platform bridging learners.",
      features: [
        "Wide range of courses and resources",
        "Teachers create courses and notes easily",
        "Students access tools and templates",
      ],
      image:
        "https://res.cloudinary.com/dixsjrfo5/image/upload/v1732289235/Screenshot_2024-11-22_205642_emjtf7.png",
      sourceLink: "https://github.com/mohit-thakre/LearnPros",
      liveLink: "www.learnpros.tech",
    },
    {
      id: 2,
      title: "Pages & Co 2024",
      description: "An intuitive platform for book buying and selling.",
      features: [
        "Simple book browsing and purchase",
        "Admin tools for inventory management",
        "Secure login with bcrypt and JWT",
      ],
      image:
        "https://res.cloudinary.com/dixsjrfo5/image/upload/v1737382830/Screenshot_2025-01-20_195000_ax5mzq.png",
      sourceLink:
        "https://github.com/mohit-thakre/FULL-STACK-MERN-BOOKSTORE-APP",
      liveLink: "https://pages-co-bookstore-mern.vercel.app/",
    },
  ];

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
