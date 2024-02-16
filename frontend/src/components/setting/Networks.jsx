import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaCircleExclamation } from "react-icons/fa6";
import Button from "../ui/Button";
import Tooltip from "../ui/Tooltip";
import { IoMdPersonAdd } from "react-icons/io";
import { BiImport } from "react-icons/bi";

import { IoIosClose } from "react-icons/io";
import ethScan from "../../assets/images/ethScan.svg";
import { GrTransaction } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";

function Networks() {
  return (
    <div className="h-full flex flex-col gap-3 w-full ">
      <div className="flex p-3 justify-between items-center px-4">
        <h1 className="text-white/70">Networks</h1>
        <Link
          to="/setting"
          className="inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900 active:scale-95"
        >
          <RiArrowGoBackFill />
        </Link>
      </div>
      <div className="border-onyx-800 h-[75%] overflow-auto flex flex-col gap-6 border-t-[1px]">
        <div className="flex px-4 pt-4 flex-col gap-2">
          {/* <span className="text-white/80">Mainnet</span> */}
          <ul className="flex flex-col gap-3">
            <div className="flex active:scale-95 select-none cursor-pointer hover:bg-onyx-950/50 transition-all rounded-lg p-1 gap-2 items-center">
              <img
                className="h-10"
                src="https://gigatrade.vercel.app/static/media/logo.9477772eb67fbd945f99.png"
                alt=""
              />
              <span className=" text-onyx-200 text-sm">Ethereum Mainnet</span>
            </div>
            <div className="flex active:scale-95 select-none cursor-pointer hover:bg-onyx-950/50 transition-all rounded-lg p-1 gap-2 items-center">
              <img
                className="h-10"
                src="https://gigatrade.vercel.app/static/media/logo.9477772eb67fbd945f99.png"
                alt=""
              />
              <span className=" text-onyx-200 text-sm">Linea Mainnet</span>
            </div>
            <div className="flex active:scale-95 select-none cursor-pointer hover:bg-onyx-950/50 transition-all rounded-lg p-1 gap-2 items-center">
              <img
                className="h-10"
                src="https://gigatrade.vercel.app/static/media/logo.9477772eb67fbd945f99.png"
                alt=""
              />
              <span className=" text-onyx-200 text-sm">hardhat</span>
            </div>
            <div className="flex active:scale-95 select-none cursor-pointer hover:bg-onyx-950/50 transition-all rounded-lg p-1 gap-2 items-center">
              <img
                className="h-10"
                src="https://gigatrade.vercel.app/static/media/logo.9477772eb67fbd945f99.png"
                alt=""
              />
              <span className=" text-onyx-200 text-sm">Polygon</span>
            </div>
          </ul>
        </div>
        <div className="flex px-4 flex-col gap-2">
          <span className="text-white/80">Testnet</span>
          <ul></ul>
        </div>

        <div className="bottom-0 rounded-t-mdg border-t-[1px] border-onyx-800 absolute w-full bg-onyx-950 p-5 flex justify-between items-center">
          <Button
            className="w-full"
            type="secondary"
            onClick={() =>
              document
                .getElementById("popUpAddNetwork")
                .classList.toggle("!block")
            }
            text={
              <div className="flex gap-4 h-8 items-center">
                <IoMdPersonAdd /> Add a network
              </div>
            }
          />
        </div>
      </div>
      <div
        id="popUpAddNetwork"
        className="h-full hidden w-full absolute top-0 z-30 p-3"
      >
        <div className="h-full p-4 gap-6 flex flex-col  rounded-xl w-full bg-onyx-900 backdrop-blur-md shadow-massive-2">
          <div className="flex gap-3 justify-between items-center ">
            <h2 className="text-white/90 font-semibold text-lg">Add Network</h2>{" "}
            <div
              onClick={() =>
                document
                  .getElementById("popUpAddNetwork")
                  .classList.toggle("!block")
              }
              className="inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900"
            >
              <IoIosClose />
            </div>
          </div>
          <div className="overflow-auto flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <span className="text-white/80 text-sm flex items-center gap-2">
                Network name
              </span>
              <input
                type="text"
                className="w-full px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
                placeholder="Enter Network name"
              />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white/80 text-sm flex items-center gap-2">
                New RPC URL
              </span>
              <input
                type="text"
                className="w-full px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
                placeholder="Enter RPC URL"
              />
            </div>
            <div className="flex flex-row gap-3">
              <div className="flex flex-1 flex-col gap-4">
                <span className="text-white/80 text-sm flex items-center gap-2">
                  Chain ID
                  <Tooltip
                    id="ExclamationForChain"
                    content="The chain ID, essential for <br> transaction signing, needs to<br>  correspond with the network's <br> chain ID. You can input a decimal<br>  or hexadecimal number prefixed<br>  with '0x', though it will  be displayed<br> in decimal format."
                  >
                    <FaCircleExclamation className="cursor-pointer" />
                  </Tooltip>
                </span>
                <input
                  type="text"
                  className="w-full px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
                  placeholder="Enter Chain id"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <span className="text-white/80 text-sm flex items-center gap-2">
                  Currency symbol
                </span>
                <input
                  type="text"
                  className="w-full px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
                  placeholder="Enter Symbol"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white/80 text-sm flex items-center gap-2">
                Block explorer URL{" "}
                <b className=" font-normal text-white/40">(Optional)</b>
              </span>
              <input
                type="text"
                className="w-full px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
                placeholder="Enter Block explorer URL"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Button type="reddest" className="flex-1" text="Delete" />
            <Button
              type="secondary"
              onClick={() =>
                document
                  .getElementById("popUpAddNetwork")
                  .classList.toggle("!block")
              }
              className="flex-1"
              text="Cancel"
            />
            <Button type="primary" className="flex-1" text="Save" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Networks;
