import React from "react";

export const Sharing = () => {
  return (
    <div className="ml-2 flex text-white text-xl font-bold">
      <div className="mr-3 flex">
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
        </svg>
        <a className="ml-2">공유</a>
      </div>
      {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
      <div class="addthis_inline_share_toolbox_jp1c"></div>
    </div>
  );
};
