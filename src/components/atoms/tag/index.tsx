"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface TagProps {
  text: string;
  icon: ReactNode;
  onClick: () => void;
  selected: boolean;
}

const Tag = ({ text, icon, onClick, selected }: TagProps) => {
  return (
    <div
      onClick={onClick}
      className={`${
        selected ? "text-white bg-green-500" : "text-green-900 bg-white"
      }
       px-4 py-3 gap-2 flex items-center font-semibold text-md
      border-green-500 transition-colors duration-200
       rounded-2.5xl border-2 `}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Tag;
