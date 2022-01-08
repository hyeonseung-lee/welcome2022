import React, { useState } from "react";
import { Back } from "components/Back";
import { authService, dbService, firebaseAuth } from "../fbase";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Ads } from "components/Ads";

export const Auth = ({ userObj }) => {
  // const onSocialClick = async (event) => {
  //   try {
  //     const provider = new firebaseAuth.GoogleAuthProvider();

  //     const result = await signInWithPopup(authService, provider);

  //     const user = result.user;
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     console.log(userObj);
  //   } catch (e) {
  //     // catch error (no case yet.)
  //     // console.log("Error start with google: ", e);
  //     alert("Error start with google: ", e);
  //   }
  // };

  // useEffect(() => {
  //   navigate(`/home/${userObj.uid}`);
  // }, userObj);

  // make email-password log-in
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  // get user data
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setName(value);
    }
  };

  // sign in
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;

      if (newAccount) {
        // create account
        data = await firebaseAuth.createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
        const id = authService.currentUser.uid;
        let idObject;
        idObject = {
          name: name,
        };
        await setDoc(doc(dbService, "user", id), idObject);
      } else {
        // sign in (=== log in. same mean. don't be confused.)
        data = await firebaseAuth.signInWithEmailAndPassword(
          authService,
          email,
          password
        );
      }
    } catch (error) {
      console.log(error);
      let er = error.code.slice(5);
      if (er === "weak-password") {
        alert("비밀번호가 약해요!!\n6자 이상으로 설정해주세요!");
      } else if (er === "invalid-email") {
        alert(
          "유효하지않은 메일이에요!!\n메일의 형식을 유지해주세요.\nexamples@example.com"
        );
      } else if (er === "email-already-in-use") {
        alert(
          "이미 가입한 메일이에요!\n하단의 로그인 하기를 눌러 로그인을 진행해주세요!"
        );
      }
    }
  };

  // change state of form. to log in or create account.
  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div className="base flex flex-col justify-between">
      <div>
        <Back url="/" />
        <div className="mt-48">
          <form
            onSubmit={onSubmit}
            className="flex m-3 rounded-lg border-2 border-gray-200"
          >
            <div className="w-4/5">
              <input
                name="email"
                type="text"
                placeholder="이메일"
                required
                value={email}
                onChange={onChange}
                className="block w-full h-10 text-center border-t-2 border-b-2 border-x-2  rounded-tl-lg border-zinc-500"
              />
              {newAccount && (
                <input
                  name="name"
                  type="text"
                  placeholder="이름"
                  required
                  value={name}
                  onChange={onChange}
                  className="block w-full h-10 text-center border-b-2 border-x-2 border-zinc-500"
                />
              )}

              <input
                name="password"
                type="password"
                placeholder="비밀번호"
                required
                value={password}
                onChange={onChange}
                className="block w-full h-10 text-center border-b-2 border-x-2 rounded-bl-lg border-zinc-500"
              />
            </div>
            <input
              type="submit"
              value={newAccount ? "가입하기" : "로그인"}
              className="block w-1/5 text-white bg-zinc-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-r-lg text-xl font-bold text-center"
            />
          </form>

          <div className="mx-3 text-left ">
            <span className="text-white">
              {newAccount ? "이미 계정이 있으신가요?" : "처음 오셨나요?"}
            </span>
            <input
              type="submit"
              className="ml-3 underline text-white bg-transparent"
              onClick={toggleAccount}
              value={newAccount ? "로그인 하기" : "가입하기"}
            />
          </div>
        </div>
        {/* can't use social login on web pack */}
        {/* <button
        className={
          " m-2 text-white bg-zinc-500 hover:bg-gray-700 hover:text-white mt-2 px-3 py-2 rounded-md text-xl font-bold text-center"
        }
        name="google"
        onClick={() => {
          onSocialClick();
        }}
      >
        Google로 로그인
      </button> */}
      </div>
      <Ads />
    </div>
  );
};
