import React from "react";
import { Navigation } from "components/Navigation";
import { Products } from "components/Products";
import { Buttons } from "components/Buttons";
import { useParams } from "react-router-dom";

export const Home = ({ userObj, isLoggedIn }) => {
  let { id } = useParams();
  return (
    <div className={"base flex flex-col justify-start"}>
      <Navigation userObj={userObj} isLoggedIn={isLoggedIn} />
      <div className="h-full flex flex-col justify-between">
        <Products id={id} userObj={userObj} />
        <Buttons
          url={`/${id}/give_star`}
          text="별 달아주기"
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
};
