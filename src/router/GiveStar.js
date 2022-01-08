import React, { useEffect, useState } from "react";
import { Back } from "components/Back";
import { Buttons } from "components/Buttons";
import { useNavigate, useParams } from "react-router-dom";
import { dbService } from "fbase";
import { addDoc, collection } from "firebase/firestore";
import Progress from "@material-tailwind/react/Progress";
import { Ads } from "components/Ads";

const stars = [
  {
    id: 1,
    path: "star (1).png",
    writer: "Freepik",
    writer_url: "https://www.freepik.com",
    homepage: "www.flaticon.com",
    homepage_url: "https://www.flaticon.com/",
  },
  {
    id: 2,
    path: "star (2).png",
    writer: "Pixel perfect",
    writer_url: "https://www.flaticon.com/authors/pixel-perfect",
    homepage: "www.flaticon.com",
    homepage_url: "https://www.flaticon.com/",
  },
  {
    id: 3,
    path: "star (3).png",
    writer: "Freepik",
    writer_url: "https://www.freepik.com",
    homepage: "www.flaticon.com",
    homepage_url: "https://www.flaticon.com/",
  },
  {
    id: 4,
    path: "star (4).png",
    writer: "Flat Icons",
    writer_url: "https://www.flaticon.com/authors/flat-icons",
    homepage: "www.flaticon.com",
    homepage_url: "https://www.flaticon.com/",
  },
  {
    id: 5,
    path: "star (5).png",
    writer: "Freepik",
    writer_url: "https://www.freepik.com",
    homepage: "www.flaticon.com",
    homepage_url: "https://www.flaticon.com/",
  },
  {
    id: 6,
    path: "star (6).png",
    writer: "Freepik",
    writer_url: "https://www.freepik.com",
    homepage: "www.flaticon.com",
    homepage_url: "https://www.flaticon.com/",
  },
  {
    id: 7,
    path: "star (7).png",
    writer: "Freepik",
    writer_url: "https://www.freepik.com",
    homepage: "www.flaticon.com",
    homepage_url: "https://www.flaticon.com/",
  },
  {
    id: 8,
    path: "star (8).png",
    writer: "Freepik",
    writer_url: "https://www.freepik.com",
    homepage: "www.flaticon.com",
    homepage_url: "https://www.flaticon.com/",
  },
  {
    id: 9,
    path: "star (9).png",
    writer: "Smashicons",
    writer_url: "https://www.flaticon.com/authors/smashicons",
    homepage: "www.flaticon.com",
    homepage_url: "https://www.flaticon.com/",
  },
];

export const GiveStar = () => {
  const [step, setStep] = useState(1);
  const [pickedStar, setPickedStar] = useState(0);
  const [text, setText] = useState("");
  const [nickName, setNickname] = useState(null);
  const navigate = useNavigate();
  let { id } = useParams();
  const pickStar = (id) => {
    // console.log(`you click ${id}`);
    setPickedStar(id);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "nickName") {
      setNickname(value);
    }
    if (name === "text") {
      setText(value);
    }
  };

  const onClick = async (e) => {
    // method submit to database
    // e.preventDefault();
    // console.log(nickName, text);
    let starObject;

    starObject = {
      nickName: nickName,
      text,
      star_number: pickedStar,
      timeStamp: Date.now(),
      // createdId: userObj.uid,
      targetId: id,
    };

    try {
      if (nickName.length > 0 && text.length > 0 && 10 > pickedStar > 0) {
        const docRef = await addDoc(collection(dbService, "stars"), starObject);
        // console.log("Document written with ID: ", docRef.id);
        alert("별을 달아주셔서 감사합니다.");

        // set each id
        navigate(`/home/${id}`);
      } else if (text.length === 0) {
        // console.log("None text");`
        alert("덕담을 적어주세요.");
      } else if (nickName.length === 0) {
        alert("닉네임을 적어주세요.");
      } else {
        // console.log("Unexpected error");
        alert("Unexpected error");
      }
    } catch (e) {
      // catch error (no case yet.)
      // console.log("Error adding document: ", e);
      alert("빈 칸 없이 적어주세요!!", e);
    }
  };
  // initializing
  useEffect(() => {
    setText("");
    setPickedStar(0);
  }, []);

  return (
    <div className="base">
      {step === 1 ? (
        // step 1
        <div className="h-full flex flex-col justify-between">
          {/* header */}
          <div>
            <Progress
              color="blueGray"
              value={`${step * 50}`}
              percentage={true}
            />
            <div className="flex items-center ">
              <Back url={`/home/${id}`} />
              <a className="text-2xl text-gray-200 ml-10">별을 선택하세요.</a>
            </div>
          </div>
          {/* body */}
          <div className="flex flex-col justify-between ">
            <div className="w-full mt-4 flex flex-col justify-between">
              <div className="mx-auto pb-2 px-3 h-5/6">
                <div className="grid gap-y-5 gap-x-5 grid-cols-3">
                  {stars.map((s) =>
                    s.id === pickedStar ? (
                      <a
                        onClick={() => pickStar(s.id)}
                        key={s.id}
                        className="group flex justify-center items-center"
                      >
                        <div className="w-5/6  border-4 border-yellow-500  bg-slate-200 p-3 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                          <img
                            src={require("assets/" + s.path)}
                            alt={"stars"}
                            className=" object-center object-cover group-hover:opacity-70"
                          />
                        </div>
                      </a>
                    ) : (
                      <a
                        onClick={() => pickStar(s.id)}
                        key={s.id}
                        className="group flex justify-center items-center"
                      >
                        <div className="w-5/6 bg-slate-200 p-3 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                          <img
                            src={require("assets/" + s.path)}
                            alt={"stars"}
                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                          />
                        </div>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
            <Ads />
          </div>
          <button
            className={
              " m-2 text-white bg-zinc-500 hover:bg-gray-700 hover:text-white mt-2 px-3 py-2 rounded-md text-xl font-bold text-center"
            }
            onClick={() => {
              if (pickedStar) {
                setStep(2);
              } else {
                alert("별을 선택하세요!");
              }
            }}
          >
            다음단계
          </button>
        </div>
      ) : (
        // step 2
        <div className="h-full flex flex-col justify-between">
          {/* header */}
          <div>
            <Progress
              color="blueGray"
              value={`${step * 50}`}
              percentage={true}
            />
            <div className="flex items-center m-2">
              <button
                className={
                  "flex justify-start items-center text-gray-300 bg-zinc-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium text-center"
                }
                onClick={() => {
                  setStep(1);
                }}
              >
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
              </button>
            </div>
          </div>
          {/* body */}
          <div className="h-full flex flex-col">
            {/* text input */}
            <div className="flex flex-col h-2/5 mt-3">
              <label className="text-2xl text-gray-200 ml-10" for="text">
                별에 담을 말을 적어주세요.
              </label>
              <textarea
                className="w-auto h-full m-4 p-3 border-5  border-radi rounded-2xl"
                id="text"
                name="text"
                placeholder="따뜻한 마음을 담아 적어주세요."
                onChange={onChange}
              ></textarea>
            </div>
            {/* NickName input */}
            <input
              className="w-auto mx-4 p-3 border-5  border-radi rounded-2xl"
              type="text"
              id="nickName"
              name="nickName"
              placeholder="닉네임을 적어주세요. (최대 10자)"
              maxlength="10"
              onChange={onChange}
            ></input>
          </div>
          {/* bottom */}
          <Ads />
          <Buttons
            url={`/home/${id}`}
            text="별 보내기"
            onClick={() => {
              onClick();
            }}
          />
        </div>
      )}
    </div>
  );
};
