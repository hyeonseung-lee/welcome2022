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

        <div className="mt-10">
          <div className="text-white flex justify-center">
            <a>모든 별은 설날이 되면 열어볼 수 있어요.</a>
          </div>
          <div className="text-white flex justify-center">
            <a>설을 기다리며 덕담을 주고받아요!</a>
          </div>
          <div className="text-white flex justify-center">
            <a>모든 덕담은 익명이에요!</a>
          </div>
          <div className="text-white flex justify-center">
            <a>하지만 재치있는 닉네임을 설정할 수 있어요!</a>
          </div>
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
