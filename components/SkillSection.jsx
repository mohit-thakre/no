import React from "react";
import SkillButton from "./SkillButton";
import {
  RiJavascriptFill,
  RiReactjsFill,
  RiNodejsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiDatabase2Fill,
  RiGithubFill,
  RiCodeSSlashLine,
  RiTerminalBoxFill,
  RiGitBranchFill,
  RiCloudFill,
} from "react-icons/ri";
import {
  SiCplusplus,
  SiRedux,
  SiExpress,
  SiPostman,
  SiGooglegemini,
} from "react-icons/si";
import { MdAnimation } from "react-icons/md";

const SkillSection = () => {
  const skillsData = [
    {
      name: "JavaScript",
      textColor: "text-yellow-500",
      border: "via-yellow-700",
      logo: RiJavascriptFill,
    },
    {
      name: "React",
      textColor: "text-blue-500",
      border: "via-blue-700",
      logo: RiReactjsFill,
    },
    {
      name: "Node.js",
      textColor: "text-green-500",
      border: "via-green-700",
      logo: RiNodejsFill,
    },

    {
      name: "Express",
      textColor: "text-gray-300",
      border: "via-gray-600",
      logo: SiExpress,
    },
    {
      name: "Postman",
      textColor: "text-red-500",
      border: "via-red-800",
      logo: SiPostman,
    },
    {
      name: "HTML",
      textColor: "text-orange-500",
      border: "via-orange-700",
      logo: RiHtml5Fill,
    },
    {
      name: "CSS",
      textColor: "text-blue-500",
      border: "via-blue-700",
      logo: RiCss3Fill,
    },
    {
      name: "Git",
      textColor: "text-gray-100",
      border: "via-gray-100",
      logo: RiGitBranchFill,
    },
    {
      name: "GitHub",
      textColor: "text-gray-100",
      border: "via-gray-700",
      logo: RiGithubFill,
    },
    {
      name: "Redux",
      textColor: "text-purple-500",
      border: "text-purple-800",
      logo: SiRedux,
    },
    {
      name: "MongoDB",
      textColor: "text-green-500",
      border: "via-green-700",
      logo: RiDatabase2Fill,
    },

    {
      name: "C++",
      textColor: "text-blue-500",
      border: "via-blue-800",
      logo: SiCplusplus,
    },

    {
      name: "Terminal",
      textColor: "text-gray-500",
      border: "via-gray-700",
      logo: RiTerminalBoxFill,
    },
    {
      name: "Gsap",
      textColor: "text-green-500",
      border: "via-green-800",
      logo: MdAnimation,
    },
    {
      name: "Gemini",
      textColor: "text-gray-300",
      border: "via-gray-400",
      logo: SiGooglegemini,
    },
  ];

  return (
    <div className="w-full">
      <div className="py-8 w-full max-w-3xl">
        <h1 className="font-bold text-2xl mb-6"> 我 • Tech Stack </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((item, idx) => (
            <SkillButton
              key={idx}
              name={item.name}
              textcolor={item.textColor}
              logo={item.logo}
              border={item.border}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
