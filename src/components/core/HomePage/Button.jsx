import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[16px] px-6 py-3 rounded-full font-bold
        ${
          active
            ? "bg-yellow-100 text-black shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            : " bg-richblack-800 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
        }
        hover:scale-95 transition-all duration-200
        `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
