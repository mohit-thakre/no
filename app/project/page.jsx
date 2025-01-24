import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const page = () => {
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
      sourceLink: "https://github.com/mohit-thakre/MODER-CHAIR-LANDINGPAGE",
      liveLink: "https://modern-chair-nine.vercel.app/",
    },
    {
      id: 5,
      title: "Portfolio Website 2024 ",
      description: "Showcasing my skills, projects, and achievements.",
      features: [
        "Responsive design",
        "Interactive animations",
        "Project showcase section",
      ],
      image:
        "https://res.cloudinary.com/dixsjrfo5/image/upload/v1737632371/Screenshot_2025-01-23_165537_gfkksd.png",
      sourceLink: "https://github.com/mohit-thakre/PORTFOLIO-V2",
      liveLink: "https://mohit-thakre.github.io/PORTFOLIO-V2/",
    },

    {
      id: 3,
      title: "Modern Chair 2024",
      description: "A clean, responsive landing page for modern chairs.",
      features: [
        "Responsive modern design",
        "Fast loading speed",
        "Interactive UI components",
      ],
      image:
        "https://res.cloudinary.com/dixsjrfo5/image/upload/v1737632371/Screenshot_2025-01-23_163729_xxgq6k.png",
      sourceLink: "https://github.com/BOOKSTORE-APP",
      liveLink: "https://pages-co-bookstcel.app/",
    },
    {
      id: 4,
      title: "Quote Generator",
      description: "Generate and share inspiring quotes.",
      features: [
        "Dynamic quote generation",
        "Social media sharing",
        "API integration for quotes",
      ],
      image:
        "https://res.cloudinary.com/dixsjrfo5/image/upload/v1737632408/Screenshot_2025-01-23_170949_ya33xb.png",
      sourceLink:
        "https://github.com/mohit-thakre/RANDOM-QUOTE-GENERATOR-REACTJS",
      liveLink: "https://random-quote-generator-reactjs-virid.vercel.app/",
    },
  ];

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
            {project.map((project) => (
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
