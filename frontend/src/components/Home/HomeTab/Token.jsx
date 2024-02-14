import React from "react";
import Eth_logo from "../../../assets/images/eth_logo.png";
import { GoPlus } from "react-icons/go";
import { IoReload } from "react-icons/io5";

function Token() {
  return (
    <div
      id="Token"
      className="w-full relative h-[15pc] rounded-t-mds border-[1px]z p-2"
    >
      <div className="flex bg-onyx-800/30 hover:bg-onyx-800/40 active:bg-onyx-800/50 select-none cursor-pointer rounded-xl px-3 py-3 gap-2 items-center">
        <img className="w-8 h-8 rounded-full" src={Eth_logo} alt="" />
        <div className="flex flex-col">
          <b className=" text-white/90 font-semibold">ETH</b>
          <span className=" text-onyx-300/90 font-light">70.34ETH</span>
        </div>
      </div>
      <div className=" absolute right-0 bottom-0 mx-3 my-3 inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900">
        <GoPlus />
      </div>
      <div className=" absolute right-12 bottom-0 mx-3 my-3 inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900">
        <IoReload />
      </div>
    </div>
  );
}

export default Token;
