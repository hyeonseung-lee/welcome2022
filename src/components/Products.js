import { dbService } from "fbase";
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { DetailStar } from "./DetailStar";
import Icon from "@material-tailwind/react/Icon";
import PaginationItem from "@material-tailwind/react/PaginationItem";

export const Products = ({ id }) => {
  const [stars, setStars] = useState([]);
  const [open, setOpen] = useState(false);
  const [clickedStar, setClickedStar] = useState(null);
  const [step, setStep] = useState(1);

  const getMyStars = async () => {
    const q = query(
      collection(dbService, "stars"),
      where("targetId", "==", id),
      orderBy("timeStamp")
    );
    const myStarsSnapshot = await getDocs(q);
    // print for debugging.
    // myStarsSnapshot.forEach((doc) => {
    //   console.log(doc);
    // });
    const starArray = myStarsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStars(starArray);
  };
  useEffect(() => {
    getMyStars();
  }, [id]);

  // const target = new Date("February 1, 2022 00:00:00");
  // const target_date = target.getTime()
  const target = 1643641200000;
  const onClick = (star) => {
    let now = Date.now();
    if (now >= target) {
      setClickedStar(star);
      setOpen(!open);
    } else {
      alert("설날이 아니에요!!\n모든 덕담카드는 설날부터 볼 수 있어요!");
      // console.log(now);
    }
  };

  return (
    <div className="h-full m-2 relative flex justify-center ">
      <div className="h-full w-full flex flex-col">
        {/* left arrow */}
        {step > 1 && (
          <PaginationItem
            className="cursor-pointer border-1 border-gray-500 absolute left-0 bottom-1/2"
            ripple="dark"
            onClick={() => {
              setStep(step - 1);
            }}
          >
            <Icon name="keyboard_arrow_left" />
          </PaginationItem>
        )}
        <div className="h-10/12 w-full mx-auto px-1 flex items-start justify-center">
          {/* stars grid */}
          <div className=" h-11/12 w-11/12 grid gap-y-1 gap-x-2 grid-cols-6 grid-rows-6">
            {/* show 36 (6x6)  stars */}
            {stars.slice(36 * (step - 1), 36 * step).map((star) => (
              <a key={star.id} className="group flex flex-col items-center">
                <button
                  onClick={() => {
                    onClick(star);
                  }}
                  className="w-11 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
                >
                  <img
                    src={require(`assets/star (${star.star_number}).png`)}
                    alt={"stars"}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </button>
                <p className="mt-1 text-sm font-thin text-gray-50">
                  {star.nickName}
                </p>
              </a>
            ))}
          </div>
        </div>
        {/* right arrow */}
        {stars.length > 36 * step && (
          <PaginationItem
            className="cursor-pointer border-1 border-gray-500 absolute right-0 bottom-1/2"
            ripple="dark"
            onClick={() => {
              setStep(step + 1);
            }}
          >
            <Icon name="keyboard_arrow_right" />
          </PaginationItem>
        )}
        <div className="absolute right-0 bottom-0 flex items-center justify-center mr-px text-5xl border-2 pr-3 rounded-lg">
          <svg
            className=" text-yellow-400 w-20 h-20 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <a className="text-white font-bold">{stars.length}</a>
        </div>
      </div>
      {open && (
        <div className="flex flex-col items-end absolute w-11/12">
          <div
            className="block w-12 m-2 small_button bg-white text-black"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <DetailStar star={clickedStar} />
        </div>
      )}
    </div>
  );
};
