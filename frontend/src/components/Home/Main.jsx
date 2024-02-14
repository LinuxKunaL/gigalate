import React, { useState } from "react";
import { BiSolidCopy } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";
import { PiWalletFill } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";
import { Link, Route, Routes } from "react-router-dom";
import { MdGeneratingTokens } from "react-icons/md";
import { RiNftFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import Eth_logo from "../../assets/images/eth_logo.png";
import { GoPlus } from "react-icons/go";
import { IoReload } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";
import { BsSendCheckFill } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import ethScan from "../../assets/images/ethScan.svg";
import { GrTransaction } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import Tooltip from "../ui/Tooltip";

import Token from "./HomeTab/Token";
import NFTs from "./HomeTab/NFTs";
import Activity from "./HomeTab/Activity";

function Main() {
  const [Tab, setTab] = useState("token");

  const TabComponents = {
    token: <Token />,
    NFTs: <NFTs />,
    activity: <Activity />,
  };

  return (
    <div className="flex items-center gap-7 h-[33.5pc] flex-col">
      <Tooltip
        id="AddressCopy"
        content="Copy to clipboard"
        place="bottom"
        AfterCLickContent="copied"
        className="flex mt-5 text-sm items-center cursor-pointer hover:bg-indigo-600 active:bg-indigo-700 shadow-inner active:shadow-black/50 select-none transition-all gap-1 bg-indigo-500 w-min px-5 py-1 rounded-full text-white"
      >
        <span className="font-semibold ">0x65a...De5</span>
        <BiSolidCopy />
      </Tooltip>
      <div className="flex items-center flex-col ">
        <h2 className="text-2xl bg-gradient-to-r from-onyx-100 font-semibold to-onyx-500 text-transparent bg-clip-text drop-shadow-lg">
          70.34 ETH
        </h2>
        <span className=" font-light text-lg text-onyx-300">$123,44</span>
      </div>
      <div className="flex items-center justify-evenly w-full">
        <Link
          to="send"
          className="inline-flex cursor-pointer items-center justify-center h-14 w-14  flex-col gap-1 text-sm text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900"
        >
          <BsSendFill />
          <span className="text-[0.7rem]">Send</span>
        </Link>
        <Link
          to="receive"
          className="inline-flex cursor-pointer items-center justify-center h-14 w-14 flex-col gap-1 text-sm  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900"
        >
          <PiWalletFill />
          <span className="text-[0.7rem]">Receive</span>
        </Link>
        <div className="inline-flex cursor-pointer items-center justify-center h-14 w-14  flex-col gap-1 text-sm  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900">
          <FaCirclePlus />
          <span className="text-[0.7rem]">Buy</span>
        </div>
      </div>
      <div class=" flex flex-col w-full h-full px-0 border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap justify-evenly items-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-onyx-800 border-b-[1px]">
          <li class=" flex-1 flex flex-row justify-center items-center">
            <MdGeneratingTokens />
            <div
              onClick={() => setTab("token")}
              class={`${
                Tab === "token" ? "!border-indigo-500" : ""
              } inline-flex cursor-pointer items-center justify-center p-3  border-transparent rounded-t-lg hover:text-gray-600 hover:border-indigo-500 transition-all border-b-2 dark:hover:text-gray-300 group`}
            >
              Token
            </div>
          </li>
          <li class=" flex-1 flex flex-row justify-center items-center">
            <RiNftFill />
            <div
              onClick={() => setTab("NFTs")}
              class={`${
                Tab === "NFTs" ? "!border-indigo-500" : ""
              } inline-flex cursor-pointer items-center justify-center p-3  border-transparent rounded-t-lg hover:text-gray-600 hover:border-indigo-500 transition-all border-b-2 dark:hover:text-gray-300 group`}
            >
              NFTs
            </div>
          </li>
          <li class=" flex-1 flex flex-row justify-center items-center">
            <FaHistory />
            <div
              onClick={() => setTab("activity")}
              class={`${
                Tab === "activity" ? "!border-indigo-500" : ""
              } inline-flex cursor-pointer items-center justify-center p-3  border-transparent rounded-t-lg hover:text-gray-600 hover:border-indigo-500 transition-all border-b-2 dark:hover:text-gray-300 group`}
            >
              Activity
            </div>
          </li>
        </ul>
        {TabComponents[Tab]}
      </div>
    </div>
  );
}

export default Main;
