import Image from "next/image";
import React from "react";
import rgp from "@/assets/grain.jpg";
import flipkartLogo from "@/assets/flipkart.png";
import sih from "@/assets/sih.png";
import { MdOutlineEmojiEvents } from "react-icons/md";
import Table from "./Table";

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
        <Table item={hack} key={index} />
      ))}
    </div>
  );
};

export default Hack;
