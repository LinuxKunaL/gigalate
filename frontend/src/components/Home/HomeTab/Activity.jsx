import React from "react";

import { FaCoins } from "react-icons/fa";
import { BsSendCheckFill } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";

function Activity() {
  return (
    <div
      id="ActivityHistory"
      className="w-full relative h-[15pc] border-onyx-800 border-t-[1px] rounded-t-mds border-[1px]z p-2"
    >
      <div className="flex flex-col h-full gap-3 overflow-auto">
        <div className="flex bg-onyx-800/30 hover:bg-onyx-800/40 active:bg-onyx-800/50 select-none cursor-pointer rounded-xl px-3 py-3 gap-2 items-center">
          <div className="h-9 bg-onyx-900 w-10 flex justify-center items-center rounded-full text-indigo-500">
            <BsSendCheckFill />
          </div>

          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <b className=" text-white/90 font-semibold">Send</b>
              <span className="text-green-500 text-sm font-light">
                Confirmed
              </span>
            </div>
            <div className="flex flex-col items-end">
              <b className=" text-white/90 font-semibold">12.3 ETH</b>
              <span className=" text-onyx-300/90 text-sm font-light">
                $34.3
              </span>
            </div>
          </div>
        </div>
        <div className="flex bg-onyx-800/30 hover:bg-onyx-800/40 active:bg-onyx-800/50 select-none cursor-pointer rounded-xl px-3 py-3 gap-2 items-center">
          <div className="h-9 bg-onyx-900 w-10 flex justify-center items-center rounded-full text-indigo-500">
            <FaCoins />
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <b className=" text-white/90 font-semibold">Receive</b>
              <span className=" text-green-500 text-sm font-light">
                Confirmed
              </span>
            </div>
            <div className="flex flex-col items-end">
              <b className=" text-white/90 font-semibold">12.3 ETH</b>
              <span className=" text-onyx-300/90 text-sm font-light">
                $34.3
              </span>
            </div>
          </div>
        </div>
        <div className="flex bg-onyx-800/30 hover:bg-onyx-800/40 active:bg-onyx-800/50 select-none cursor-pointer rounded-xl px-3 py-3 gap-2 items-center">
          <div className="h-9 bg-onyx-900 w-10 flex justify-center items-center rounded-full text-indigo-500">
            <FaFileContract />
          </div>

          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <b className=" text-white/90 font-semibold w-20 line-clamp-1 ">
                Contract interaction
              </b>
              <span className="text-red-500 text-sm font-light">Failed</span>
            </div>
            <div className="flex flex-col items-end">
              <b className=" text-white/90 font-semibold">12.3 ETH</b>
              <span className=" text-onyx-300/90 text-sm font-light">
                $34.3
              </span>
            </div>
          </div>
        </div>
        <div className="flex bg-onyx-800/30 hover:bg-onyx-800/40 active:bg-onyx-800/50 select-none cursor-pointer rounded-xl px-3 py-3 gap-2 items-center">
          <div className="h-9 bg-onyx-900 w-10 flex justify-center items-center rounded-full text-indigo-500">
            <BsStars />
          </div>

          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <b className=" text-white/90 font-semibold">Buy NFT</b>
              <span className="text-green-500 text-sm font-light">
                Confirmed
              </span>
            </div>
            <div className="flex flex-col items-end">
              <b className=" text-white/90 font-semibold">12.3 ETH</b>
              <span className=" text-onyx-300/90 text-sm font-light">
                $34.3
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
