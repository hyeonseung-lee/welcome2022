import React from "react";
import { Navigation } from "components/Navigation";

export const AboutUs = ({ userObj, isLoggedIn }) => {
  return (
    <div className={"base flex flex-col justify-start"}>
      <Navigation userObj={userObj} isLoggedIn={isLoggedIn} />
      <div className="h-full flex flex-col justify-between">About us</div>
    </div>
  );
};
