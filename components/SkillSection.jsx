import React from "react";
import SkillButton from "./SkillButton";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

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
      name: "Git",
      textColor: "text-gray-100",
      border: "via-gray-100",
      logo: RiGitBranchFill,
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

  const firstRow = skillsData.slice(0, Math.ceil(skillsData.length / 3));
  const secondRow = skillsData.slice(
    Math.ceil(skillsData.length / 3),
    Math.ceil((2 * skillsData.length) / 3)
  );
  const thirdRow = skillsData.slice(Math.ceil((2 * skillsData.length) / 3));

  return (
    <div className="w-full">
      <div className="pb-8 w-full max-w-xl max-h-[300px] overflow-hidden">
        <h1 className="font-semibold text-xl pt-4"> 我 • Tech Stack </h1>
        <div className="flex flex-wrap justify-center gap-4">
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((item, idx) => (
              <SkillButton
                key={idx}
                name={item.name}
                textcolor={item.textColor}
                logo={item.logo}
                border={item.border}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {secondRow.map((item, idx) => (
              <SkillButton
                key={idx}
                name={item.name}
                textcolor={item.textColor}
                logo={item.logo}
                border={item.border}
              />
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {thirdRow.map((item, idx) => (
              <SkillButton
                key={idx}
                name={item.name}
                textcolor={item.textColor}
                logo={item.logo}
                border={item.border}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
