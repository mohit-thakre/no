import React from "react";
import SkillButton from "./SkillButton";
import Marquee from "@/components/ui/marquee";
import { skillsData } from "@/data/skills";

const SkillSection = () => {
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
