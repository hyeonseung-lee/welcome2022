import React from "react";
import { Back } from "components/Back";
import { authService, firebaseAuth } from "../fbase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const Auth = ({ userObj }) => {
  const onSocialClick = async (event) => {
    try {
      const provider = new firebaseAuth.GoogleAuthProvider();

      const result = await signInWithPopup(authService, provider);

      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(userObj);
    } catch (e) {
      // catch error (no case yet.)
      // console.log("Error start with google: ", e);
      alert("Error start with google: ", e);
    }
  };

  // useEffect(() => {
  //   navigate(`/home/${userObj.uid}`);
  // }, userObj);

  return (
    <div className="base flex flex-col justify-start">
      <Back url="/" />
      <button
        className={
          " m-2 text-white bg-zinc-500 hover:bg-gray-700 hover:text-white mt-2 px-3 py-2 rounded-md text-xl font-bold text-center"
        }
        name="google"
        onClick={onSocialClick}
      >
        Google로 로그인
      </button>
    </div>
  );
};
