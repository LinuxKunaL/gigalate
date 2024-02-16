import React from "react";
import Eth_logo from "../../../assets/images/eth_logo.png";
import { GoPlus } from "react-icons/go";
import { IoReload } from "react-icons/io5";

import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaCircleExclamation } from "react-icons/fa6";
import Button from "../../ui/Button";
import Tooltip from "../../ui/Tooltip";
import { IoMdPersonAdd } from "react-icons/io";
import { BiImport } from "react-icons/bi";

import { IoIosClose } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";

function Token() {
  return (
    <>
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
        <div
          onClick={() =>
            document
              .getElementById("popUpAddToken")
              .classList.toggle("!block")
          }
          className=" absolute right-0 bottom-0 mx-3 my-3 inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900"
        >
          <GoPlus />
        </div>
        <div className=" absolute right-12 bottom-0 mx-3 my-3 inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900">
          <IoReload />
        </div>
      </div>
      <div
        id="popUpAddToken"
        className="hidden w-full absolute top-0 z-30 p-3"
      >
        <div className="h-full p-4 gap-6 flex flex-col  rounded-xl w-full bg-onyx-900 backdrop-blur-md shadow-massive-2">
          <div className="flex gap-3 justify-between items-center ">
            <h2 className="text-white/90 font-semibold text-lg">
              Import tokens
            </h2>
            <div
              onClick={() =>
                document
                  .getElementById("popUpAddToken")
                  .classList.toggle("!block")
              }
              className="inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900"
            >
              <IoIosClose />
            </div>
          </div>
          <div>
            <h2 className=" text-white/70 font-semibold">Custom token</h2>
            <p className="text-xs text-onyx-300s text-yellow-400/80 animate-pulse">
              Make sure you trust a token before you import it.
            </p>
          </div>
          <div className="overflow-auto flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <span className="text-white/80 text-sm flex items-center gap-2">
                Token contract address
              </span>
              <input
                type="text"
                className="w-full px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
                placeholder="Enter Token contract address"
              />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white/80 text-sm flex items-center gap-2">
                Token symbol
              </span>
              <input
                type="text"
                className="w-full px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
                placeholder="Enter Token symbol"
              />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white/80 text-sm flex items-center gap-2">
                Token decimal
              </span>
              <input
                type="number"
                className="w-full px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
                placeholder="Enter Token decimal"
                defaultValue="0"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              type="secondary"
              onClick={() =>
                document
                  .getElementById("popUpAddToken")
                  .classList.toggle("!block")
              }
              className="flex-1"
              text="Cancel"
            />
            <Button type="primary" className="flex-1" text="Save" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Token;
