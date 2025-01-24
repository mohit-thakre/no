import { icons } from "@/icons/icons";
import rgp from "@/assets/grain.jpg";
import flipkartLogo from "@/assets/flipkart.png";
import sih from "@/assets/sih.png";
import rgpv from "@/assets/rgpv.png";
import samv from "@/assets/samv.jpeg";
export const toolsData = [
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

export const persona = [
  { label: "Night-owl 🌍", rotation: "-20deg", margin: "-mx-4" },
  { label: "Coder 💻", rotation: "3deg", margin: "mx-2" },
  { label: "Sportster ��", rotation: "-3deg", margin: "mx-2" },
  { label: "Innovator 💡", rotation: "6deg", margin: "mx-2" },
];

export const hackathonData = [
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

export const educationData = [
  {
    title: "Computer Science & Engineering",
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
