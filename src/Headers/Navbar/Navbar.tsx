import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Props } from "../Header";

const NavBar = (props: Props) => {
  return (
    <div className="flex justify-center transition-all" onClick={props.onClick}>
      <div className="w-4/5 rounded-full relative shadow-md border mt-5 p-2 cursor-pointer">
        <div className="absolute left-4 top-4">
          <AiOutlineSearch size={20} />
        </div>

        <div className="flex flex-col items-start pl-12">
          <p className="text-sm">Anywhere</p>
          <div className="flex">
            <p className="text-xs text-slate-500">Any week |</p>
            <p className="text-xs text-slate-500">| Add guests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
