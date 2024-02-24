import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-purple-500"
    : "text-[#adb7be] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyle} rounded-full border-2  px-4 py-2 text-xl cursor-pointer  `}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
