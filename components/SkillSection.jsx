import React from "react";
import SkillButton from "./SkillButton";
import Marquee from "@/components/ui/marquee";
import { icons } from "@/icons/icons";

const SkillSection = () => {
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
      name: "Node.js",
      textColor: "text-green-500",
      border: "via-green-700",
      logo: icons.RiNodejsFill,
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
      name: "Postman",
      textColor: "text-orange-500",
      border: "via-red-800",
      logo: icons.SiPostman,
    },
    {
      name: "HTML",
      textColor: "text-orange-500",
      border: "via-orange-700",
      logo: icons.RiHtml5Fill,
    },
    {
      name: "CSS",
      textColor: "text-blue-500",
      border: "via-blue-700",
      logo: icons.RiCss3Fill,
    },

    {
      name: "GitHub",
      textColor: "text-gray-100",
      border: "via-gray-700",
      logo: icons.RiGithubFill,
    },
    {
      name: "Redux",
      textColor: "text-purple-500",
      border: "text-purple-800",
      logo: icons.SiRedux,
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
      name: "Terminal",
      textColor: "text-gray-500",
      border: "via-gray-700",
      logo: icons.RiTerminalBoxFill,
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

  const firstRow = skillsData.slice(0, Math.ceil(skillsData.length / 3));
  const secondRow = skillsData.slice(
    Math.ceil(skillsData.length / 3),
    Math.ceil((2 * skillsData.length) / 3)
  );
  const thirdRow = skillsData.slice(Math.ceil((2 * skillsData.length) / 3));

  return (
    <div className="w-full">
      <div className="pb-8 w-full max-w-xl max-h-[300px] overflow-hidden">
        <h1 className="font-semibold text-xl py-4"> 我 • Tech Stack </h1>
        <div className="flex flex-wrap justify-center items-center mx-auto gap-4 max-w-xs lg:max-w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s] w-full">
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
          <Marquee reverse pauseOnHover className="[--duration:20s] w-full">
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
          <Marquee pauseOnHover className="[--duration:20s] w-full">
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
