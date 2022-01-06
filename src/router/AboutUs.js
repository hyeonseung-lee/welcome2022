import React from "react";
import { Navigation } from "components/Navigation";

export const AboutUs = ({ userObj, isLoggedIn }) => {
  return (
    <div className="base flex flex-col justify-start text-white font-bold">
      <Navigation userObj={userObj} isLoggedIn={isLoggedIn} />
      <div className="h-full">
        <a>About us</a>
        <div className="flex">
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <a>winney__@naver.com</a>
        </div>
      </div>
    </div>
  );
};
