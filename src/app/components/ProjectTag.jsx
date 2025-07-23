import React from "react";



const ProjectTag = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = isSelected
    ? "text-white bg-gray-700 border-primary-500"
    : "text-gray-700 border-slate-600 hover:border-gray-900";

  return (
    <button
      className={`${buttonStyles} rounded-xl border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
