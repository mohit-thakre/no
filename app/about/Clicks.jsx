import React from "react";
import image1 from "@/assets/samv.jpeg";
import image2 from "@/assets/flipkart.png";
import image3 from "@/assets/rgpv.png";
import image4 from "@/assets/s.png";
import image5 from "@/assets/scr.png";
import image6 from "@/assets/smartphone_realistic_mockup.jpg";
import image7 from "@/assets/map.png";
import image8 from "@/assets/map.png";
import image9 from "@/assets/dark-saas-landing-page.png";
import image10 from "@/assets/ai-startup-landing-page.png";
import Image from "next/image";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";

const imageData = [
  {
    id: 1,
    name: "Golden Beach Sunset",
    imageUrl: image1,
    description: "A tranquil sunset with golden hues on the beach.",
  },
  {
    id: 2,
    name: "Mountain Reflection",
    imageUrl: image2,
    description: "A stunning reflection of mountains on a crystal-clear lake.",
  },
  {
    id: 3,
    name: "Starry Night Sky",
    imageUrl: image3,
    description: "A star-studded sky over a serene desert landscape.",
  },
  {
    id: 4,
    name: "Autumn Forest Path",
    imageUrl: image4,
    description: "A scenic forest path covered with vibrant autumn leaves.",
  },
  {
    id: 5,
    name: "Urban Cityscape",
    imageUrl: image5,
    description: "A bustling cityscape with modern skyscrapers.",
  },
  {
    id: 6,
    name: "Calm Lake at Sunrise",
    imageUrl: image6,
    description: "A serene sunrise view over a still lake.",
  },
  {
    id: 7,
    name: "Calm Lake at Sunrise",
    imageUrl: image7,
    description: "A serene sunrise view over a still lake.",
  },
  {
    id: 8,
    name: "Calm Lake at Sunrise",
    imageUrl: image8,
    description: "A serene sunrise view over a still lake.",
  },
  {
    id: 9,
    name: "Calm Lake at Sunrise",
    imageUrl: image9,
    description: "A serene sunrise view over a still lake.",
  },
  {
    id: 10,
    name: "Calm Lake at Sunrise",
    imageUrl: image10,
    description: "A serene sunrise view over a still lake.",
  },
];

const Clicks = () => {
  return (
    <div className="p-6">
      <h1 className="flex items-center gap-2 font-semibold text-xl py-2 ">
        My Clicks
        <FaCamera />
      </h1>
      <div className="c">
        {imageData.map((item, id) => (
          <Image
            key={id}
            src={item.imageUrl}
            alt={item.name}
            className="p rounded-lg m-2"
          />
        ))}
      </div>
    </div>
  );
  E;
};

export default Clicks;
