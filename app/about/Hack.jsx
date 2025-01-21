import Image from "next/image";
import React from "react";
import rgp from "@/assets/grain.jpg";
import flipkartLogo from "@/assets/flipkart.png";
import sih from "@/assets/sih.png";
import { MdOutlineEmojiEvents } from "react-icons/md";

const hackathonData = [
  {
    title: "Flipkart Grid 6.0",
    year: "2024",
    position: " Cleared round 2",
    conductedBy: "Flipkart",
    image: flipkartLogo,
  },
  {
    title: "Smart India Hackathon",
    year: "2024",
    position: "Participant",
    conductedBy: "Ministry of Education",
    image: sih,
  },
];

const Hack = () => {
  return (
    <div>
      <h1 className="flex items-center gap-2 font-semibold text-xl py-2 ">
        Hackathon Highlights
        <MdOutlineEmojiEvents />
      </h1>
      {hackathonData.map((hack, index) => (
        <div key={index} className="flex justify-between gap-4 py-2">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={hack.image}
              alt="rgp"
              className="rounded-full w-12 h-12"
            />
            <div>
              <h1 className="text-sm font-semibold tracking-wide">
                {hack.title}
              </h1>
              <p className="text-xs font-medium tracking-wider text-white/70">
                {hack.position}
              </p>
              <h1 className="tracking-wide text-sm">{hack.conductedBy}</h1>
            </div>
          </div>
          <p className="font-sans text-sm">{hack.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Hack;
