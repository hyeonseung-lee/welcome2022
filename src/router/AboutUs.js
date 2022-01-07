import React from "react";
import { Navigation } from "components/Navigation";

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

export const AboutUs = ({ userObj, isLoggedIn }) => {
  return (
    <div className="base flex flex-col justify-start text-white">
      <Navigation userObj={userObj} isLoggedIn={isLoggedIn} />
      <div className="h-full flex">
        <div className="h-full">
          <a className="font-bold text-2xl m-2">Source</a>
          {stars.map((s) => (
            <div className="flex items-center ml-2 mb-2">
              <div className="flex flex-col items-center justify-center mr-2">
                <img
                  src={require(`assets/${s.path}`)}
                  alt={"stars"}
                  className="w-12 h-12 object-center object-cover"
                />
                <a>{s.path}</a>
              </div>
              <div className=" text-left ">
                <div>
                  <a>Icons made by </a>
                  <a
                    href={s.writer_url}
                    title={s.writer}
                    className=" text-lg text-yellow-300 "
                  >
                    {s.writer}
                  </a>{" "}
                </div>
                from{" "}
                <a
                  href={s.homepage_url}
                  title={s.homepage}
                  className=" text-lg text-yellow-300 "
                >
                  {s.homepage}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div>
          <a className="font-bold text-2xl m-2">About us</a>
          <div className="flex m-2">
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
      <div className="text-right m-4">
        <div>
          background.png from{" "}
          <a href="https://kor.pngtree.com" className="text-lg text-yellow-300">
            588ku
          </a>
        </div>
        <div className="text-lg">
          <a>In </a>
          <a href="https://kor.pngtree.com" className="text-yellow-300">
            Pngtree.com
          </a>
        </div>
      </div>
    </div>
  );
};
