import React from "react";
import { Link } from "react-router-dom";

export const Back = ({ url }) => {
  return (
    <div className="block w-24 m-2">
      <Link to={{ pathname: url }}>
        <div className="small_button text-xl text-white">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <a>뒤로</a>
        </div>
      </Link>
    </div>
  );
};
