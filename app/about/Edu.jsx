import Image from "next/image";
import React from "react";
import rgp from "@/assets/grain.jpg";
import rgpv from "@/assets/rgpv.png";
import samv from "@/assets/samv.jpeg";
import { HiOutlineAcademicCap } from "react-icons/hi";

const educationData = [
  {
    title: "Computer Science and Engineering",
    university: "RGPV University",
    degree: "Bachelor of Technology",
    year: "2022 - 2026",
    image: rgpv,
  },
  {
    title: "High School",
    university: "SAMV School",
    degree: "Diploma (12th)",
    year: "2021 - 2022",
    image: samv,
  },
  {
    title: "Middle School",
    university: "DES School",
    degree: "10th",
    year: "2019 - 2020",
    image: rgp,
  },
];

const Edu = () => {
  return (
    <div>
      <h1 className="flex items-center gap-2 font-semibold text-xl py-2 ">
        Academics
        <HiOutlineAcademicCap />
      </h1>
      {educationData.map((edu, index) => (
        <div key={index} className="flex justify-between gap-4 py-2">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={edu.image}
              alt="rgp"
              className="rounded-full w-12 h-12"
            />
            <div>
              <h1 className="text-sm font-semibold tracking-wide">
                {edu.title}
              </h1>
              <p className="text-xs font-medium tracking-wider text-white/70">
                {edu.university}
              </p>
              <h1 className="tracking-wide text-sm">{edu.degree}</h1>
            </div>
          </div>
          <p className="font-sans text-sm">{edu.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Edu;
