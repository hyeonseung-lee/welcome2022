import React, { useEffect } from "react";
import { Navigation } from "components/Navigation";
import { Products } from "components/Products";
import { Buttons } from "components/Buttons";
import { useParams } from "react-router-dom";

export const Home = ({ userObj, isLoggedIn }) => {
  let { id } = useParams();
  // console.log(id);
  return (
    <div className={"base flex flex-col justify-start"}>
      <Navigation userObj={userObj} isLoggedIn={isLoggedIn} />
      <div className="h-full flex flex-col justify-between">
        <Products id={id} />

        <div className="flex justify-end mr-2">
          {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
          <div class="addthis_inline_share_toolbox_jp1c"></div>
        </div>
        <Buttons
          url={`/${id}/give_star`}
          text="별 달아주기"
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
};
