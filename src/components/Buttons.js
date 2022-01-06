import React from "react";
import { Link } from "react-router-dom";

export const Buttons = ({ text, url, onClick }) => {
  return (
    <div className="flex flex-col m-2" onClick={onClick}>
      <Link to={{ pathname: url, state: { user: null } }}>
        <div
          className={
            " text-gray-300 bg-zinc-500 hover:bg-gray-700 hover:text-white mt-2 px-3 py-2 rounded-md text-lg font-medium text-center"
          }
        >
          {text}
        </div>
      </Link>
    </div>
  );
};
