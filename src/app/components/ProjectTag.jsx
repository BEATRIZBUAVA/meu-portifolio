import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`px-4 py-2 border-2 rounded text-sm font-medium transition-all ${isSelected
          ? "border-gray-600 bg-gray-300 shadow-inner"
          : "border-gray-400 bg-gradient-to-b from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 shadow-md"
        }`}
      style={{
        borderStyle: isSelected ? "inset" : "outset",
        boxShadow: isSelected
          ? "inset 1px 1px 2px rgba(0,0,0,0.3)"
          : "1px 1px 2px rgba(0,0,0,0.3)",
      }}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
