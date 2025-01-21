import React from "react";

const SkillButton = ({ name, textcolor, logo: Logo, border }) => {
  return (
    <button className="center gap-2 border font-medium relative border-neutral-200/[0.4] bg-[#151515] px-6 py-2 rounded-lg">
      <span>
        <Logo className={`text-2xl ${textcolor}`} />
      </span>

      <span className={` font-sans text-sm `}>{name}</span>
      <span
        className={`absolute inset-x-4 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent  ${border} to-transparent  h-px`}
      />
    </button>
  );
};

export default SkillButton;
