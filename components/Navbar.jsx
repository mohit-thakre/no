import React from "react";
import Link from "next/link";

const navlink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/project",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <div>
      <div className=" relative max-w-fit px-6 py-3 rounded-full bg-transparent border-[0.5px] border-gray-500">
        <div className="flex space-x-6">
          {navlink.map((item, idx) => (
            <Link
              href={item.link}
              className="group cursor-pointer relative hover:text-gray-400 duration-100 font-medium "
              key={idx}
            >
              {item.name}
              <span className="absolute right-1 inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-800 to-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-white group-hover:to-transparent h-px" />
            </Link>
          ))}
          {/* <span className="absolute right-1 inset-x-0 w-2/3 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-800 to-transparent  h-px" /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
