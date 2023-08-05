import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CenteredTabs from "./Navtabs";
import { Props } from "../Header";

const Navpage = (props: Props) => {
  return (
    <div className="relative animate-page_transition top-40">
      <div className="absolute top-6 left-5 z-10">
        <IoIosCloseCircleOutline
          onClick={props.onClick}
          size={33}
          style={{ cursor: "pointer" }}
        />
      </div>
      <CenteredTabs />
    </div>
  );
};

export default Navpage;
