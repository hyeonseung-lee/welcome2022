import React from "react";
import { Link } from "react-router-dom";
import { Buttons } from "components/Buttons";

export const Main = ({ isLoggedIn }) => {
  return (
    <div className={"base flex flex-col justify-between"}>
      <div>
        <div className="w-full flex justify-center pt-4">
          <Link to="/">
            <img
              src={require("assets/star_logo.gif")}
              alt={"stars"}
              className="w-auto h-20"
            />
          </Link>
        </div>
        <div className="text-white flex justify-center">
          <a>별을 달아 덕담을 주고받아요.</a>
        </div>
      </div>

      <div className="pb-4">
        <Buttons url="/auth" text="시작하기" />
        <div className="text-white flex justify-center">
          <a>made by winney.</a>
        </div>
      </div>
    </div>
  );
};
