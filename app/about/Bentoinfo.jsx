import React from "react";
import { icons } from "@/icons/icons";

import Marquee from "@/components/ui/marquee";
import { HiOutlineAcademicCap } from "react-icons/hi";

const Bentoinfo = () => {
  const skillsData = [
    {
      name: "JavaScript",
      textColor: "text-yellow-500",
      border: "via-yellow-700",
      logo: icons.RiJavascriptFill,
    },
    {
      name: "React",
      textColor: "text-blue-500",
      border: "via-blue-700",
      logo: icons.RiReactjsFill,
    },
    {
      name: "HTML",
      textColor: "text-orange-500",
      border: "via-orange-700",
      logo: icons.RiHtml5Fill,
    },
    {
      name: "MongoDB",
      textColor: "text-green-500",
      border: "via-green-700",
      logo: icons.RiDatabase2Fill,
    },
    {
      name: "C++",
      textColor: "text-blue-500",
      border: "via-blue-800",
      logo: icons.SiCplusplus,
    },
    {
      name: "Node.js",
      textColor: "text-green-500",
      border: "via-green-700",
      logo: icons.RiNodejsFill,
    },
    {
      name: "CSS",
      textColor: "text-blue-500",
      border: "via-blue-700",
      logo: icons.RiCss3Fill,
    },
    {
      name: "Redux",
      textColor: "text-purple-500",
      border: "text-purple-800",
      logo: icons.SiRedux,
    },
    {
      name: "Git",
      textColor: "text-gray-100",
      border: "via-gray-100",
      logo: icons.RiGitBranchFill,
    },
    {
      name: "Express",
      textColor: "text-gray-300",
      border: "via-gray-600",
      logo: icons.SiExpress,
    },

    {
      name: "GitHub",
      textColor: "text-gray-100",
      border: "via-gray-700",
      logo: icons.RiGithubFill,
    },

    {
      name: "Gsap",
      textColor: "text-green-500",
      border: "via-green-800",
      logo: icons.MdAnimation,
    },
    {
      name: "Gemini",
      textColor: "text-gray-300",
      border: "via-gray-400",
      logo: icons.SiGooglegemini,
    },
  ];

  const toolsData = [
    {
      name: "VS Code",
      logo: icons.VscVscode,
      textColor: "text-blue-500",
    },
    {
      name: "Postman",
      logo: icons.SiPostman,
      textColor: "text-orange-500",
    },
    {
      name: "ShadCD",
      logo: icons.SiShadcnui,
      textColor: "text-white",
    },
    {
      name: "Magic UI",
      logo: icons.FaWandMagic,
      textColor:
        "bg-gradient-to-tr from-[#a84ed1] via-[#c58b04] to-[#f4d79d] text-white rounded-xl",
    },
    {
      name: "NPM",
      logo: icons.SiNpm,
      textColor: "text-red-500",
    },
    {
      name: "Git",
      logo: icons.SiGit,
      textColor: "text-orange-600",
    },
    {
      name: "GitHub",
      logo: icons.SiGithub,
      textColor: "text-gray-100",
    },
    {
      name: "Terminal",
      textColor: "text-gray-200",
      border: "via-gray-700",
      logo: icons.RiTerminalBoxFill,
    },
  ];

  const persona = [
    { label: "Night-owl 🌍", rotation: "-20deg", margin: "-mx-4" },
    { label: "Coder 💻", rotation: "3deg", margin: "mx-2" },
    { label: "Sportster ��", rotation: "-3deg", margin: "mx-2" },
    { label: "Innovator 💡", rotation: "6deg", margin: "mx-2" },
  ];

  const firstRow = skillsData.slice(0, Math.ceil(skillsData.length / 3));
  const secondRow = skillsData.slice(
    Math.ceil(skillsData.length / 3),
    Math.ceil((2 * skillsData.length) / 3)
  );
  const thirdRow = skillsData.slice(Math.ceil((2 * skillsData.length) / 3));

  return (
    <div className="max-w-xl mx-auto p-4 ">
      <h1 className="flex items-center gap-2 font-semibold text-xl py-2 ">
        Tech, Tool & More
        <HiOutlineAcademicCap />
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
        {/* Tech section */}
        <div className="card col-span-3   rounded-lg p-4 shadow-md relative">
          <h2 className="font-bold text-xl text-white mb-2 z-50 flex items-center gap-2">
            <icons.FaCodeBranch /> My Tech Stack
          </h2>
          <p className="text-white/60 text-sm mb-4 z-50">
            The Backbone of My Projects
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 px-4">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((item, idx) => (
                <div
                  key={idx}
                  className="p-1 rounded-xl shadow-lg border-[0.1px] border-white/20 transition-all duration-300 transform hover:scale-105"
                  title={item.name}
                >
                  <item.logo
                    className={`text-5xl ${item.textColor} drop-shadow-md`}
                  />
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((item, idx) => (
                <div
                  key={idx}
                  className="p-1 rounded-xl shadow-lg border-[0.1px] border-white/20 transition-all duration-300 transform hover:scale-105"
                  title={item.name}
                >
                  <item.logo
                    className={`text-5xl ${item.textColor} drop-shadow-md`}
                  />
                </div>
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]">
              {thirdRow.map((item, idx) => (
                <div
                  key={idx}
                  className="p-1 rounded-xl shadow-lg border-[0.1px] border-white/20 transition-all duration-300 transform hover:scale-105"
                  title={item.name}
                >
                  <item.logo
                    className={`text-5xl ${item.textColor} drop-shadow-md`}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Tools Section */}
        <div className="card col-span-2  rounded-lg p-4 shadow-md">
          <h2 className="font-bold text-xl text-white mb-2 flex items-center gap-2">
            <icons.TbToolsOff /> My Tools
          </h2>
          <p className="text-white/60 text-sm mb-4">
            Software I use and recommend
          </p>
          <div className="flex flex-wrap gap-4">
            {toolsData.map((item, idx) => (
              <div
                key={idx}
                className="p-1 rounded-xl shadow-lg border-[0.1px] border-white/20 transition-all duration-300 transform hover:scale-105"
                title={item.name}
              >
                <item.logo
                  className={`text-5xl ${item.textColor} drop-shadow-md`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* persona Section */}
        <div className="card col-span-1   rounded-lg p-4 shadow-md">
          <h2 className="font-bold text-xl text-white mb-2 flex items-center gap-2">
            <icons.BsPersonArmsUp /> Persona
          </h2>
          <p className="text-white/60 text-sm mb-4 z-30">Know me as a person</p>
          <div className=" flex flex-wrap gap-2 overflow-hidden ">
            {persona.map((item, idx) => (
              <button
                key={idx}
                style={{
                  transform: `rotate(${item.rotation})`,
                }}
                className="neomorphism px-1  text-black -z-10 text-sm font-bold"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bentoinfo;
