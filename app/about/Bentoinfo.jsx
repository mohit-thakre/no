import React from "react";
import { icons } from "@/icons/icons";
import Marquee from "@/components/ui/marquee";
import { skillsData } from "@/data/skills";
import { persona, toolsData } from "@/data/about";

const Bentoinfo = () => {
  const firstRow = skillsData.slice(0, Math.ceil(skillsData.length / 3));
  const secondRow = skillsData.slice(
    Math.ceil(skillsData.length / 3),
    Math.ceil((2 * skillsData.length) / 3)
  );
  const thirdRow = skillsData.slice(Math.ceil((2 * skillsData.length) / 3));

  return (
    <div className="max-w-xl mx-auto py-4 ">
      <h1 className="flex items-center gap-2 font-semibold text-xl py-2 ">
        Tech, Tool & More
        <icons.MdExpandMore />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Tech section */}
        <div className="card col-span-1 md:col-span-2 lg:col-span-3 rounded-lg p-4 shadow-md relative">
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
        <div className="card col-span-1 md:col-span-2 lg:col-span-2 rounded-lg p-4 shadow-md">
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
        <div className="card col-span-1 rounded-lg p-4 shadow-md">
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
