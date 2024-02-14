import React from "react";
import HamMenu from "../../assets/images/HamMenu";
import { MdOutlineKeyboardArrowDown, MdAdd } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  MdOpenInNew,
  MdWifiTethering,
  MdOutlineMode,
  MdOutlineSettings,
  MdLockOutline,
} from "react-icons/md";
import Button from "../../components/ui/Button";

import Tooltip from "../ui/Tooltip";

function Navbar() {
  return (
    <nav className="relative z-10 h-14 top-0 flex items-center backdrop-blur-xl backdrop-filter w-full bg-onyx-900/60 shadow-massive-2">
      <HamMenu
        onClick={() => {
          document.getElementById("SideMenuPopUp").classList.toggle("!flex");
        }}
        className="absolute left-5"
      />
      <div
        id="SideMenuPopUp"
        className=" w-[15pc] flex-col bg-onyx-900 top-[3.4pc] hidden absolute shadow-massive-2 rounded-lg"
      >
        <div className="px-4 border-l-2 border-transparent hover:border-indigo-500 py-5 cursor-pointer active:bg-onyx-950/60 transition-all hover:bg-onyx-950 flex items-center gap-2">
          <MdOutlineMode className=" text-indigo-500 w-5 h-5" />
          <span className="text-white/60 text-sm">Account details</span>
        </div>
        <div className="px-4 border-l-2 border-transparent hover:border-indigo-500 py-5 cursor-pointer active:bg-onyx-950/60 transition-all hover:bg-onyx-950 flex items-center gap-2">
          <MdOpenInNew className=" text-indigo-500 w-5 h-5" />
          <span className="text-white/60  text-sm">
            View on explorer
            <br />
            <b className="text-xs"> sepolia.etherscan.io</b>
          </span>
        </div>
        <div className="px-4 border-l-2 border-transparent hover:border-indigo-500 py-5 cursor-pointer active:bg-onyx-950/60 transition-all hover:bg-onyx-950 flex items-center gap-2">
          <MdWifiTethering className=" text-indigo-500 w-5 h-5" />
          <span className="text-white/60  text-sm">Connected sites</span>
        </div>
        <Link
          to="/setting"
          className="px-4 border-l-2 border-transparent hover:border-indigo-500 py-5 cursor-pointer active:bg-onyx-950/60 transition-all hover:bg-onyx-950 flex items-center gap-2"
        >
          <MdOutlineSettings className=" text-indigo-500 w-5 h-5" />
          <span className="text-white/60 text-sm ">Settings</span>
        </Link>
        <div className="px-4 border-l-2 border-transparent hover:border-indigo-500 py-5 cursor-pointer active:bg-onyx-950/60 transition-all hover:bg-onyx-950 flex items-center gap-2">
          <MdLockOutline className=" text-indigo-500 w-5 h-5" />
          <span className="text-white/60  text-sm">Lock gigalate</span>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.currentTarget.classList.toggle("!bg-onyx-800/20");
          document
            .getElementById("selectAnAccountPopUp")
            .classList.toggle("!flex");
          document.getElementById("ArrowDown").classList.toggle("arrowUp");
        }}
        className="hover:bg-onyx-800/20 select-none active:bg-onyx-800/30 m-auto cursor-pointer transition-all  rounded-lg flex p-1 items-center gap-1"
      >
        <img
          className="w-8 h-8 bg-indigo-500 rounded-full p-1"
          src="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png"
          alt=""
        />
        <span className=" text-sm text-white/90 w-12 line-clamp-1 leading-snug">
          ahsd asdasda
        </span>
        <MdOutlineKeyboardArrowDown
          id="ArrowDown"
          className="text-white transition-all"
        />
      </div>
      <div
        id="selectAnAccountPopUp"
        className="h-[30pc] flex-col gap-4 w-full bg-onyx-900 p-3 top-[3.4pc] hidden items-center absolute shadow-massive-2 rounded-lg"
      >
        <h2 className="text-white/70 text-lg font-semibold">
          Select an account
        </h2>
        <div className="flex gap-2 items-center">
          {" "}
          <input
            type="text"
            className="w-[14pc] px-5 py-2 text-onyx-400/80 bg-onyx-950 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
            placeholder="search account"
          />
          <div className="h-8 p-1 flex justify-center items-center w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white cursor-pointer hover:opacity-90 hover:from-indigo-500 hover:to-indigo-400 active:scale-95 transition-all">
            <IoSearch className="w-full opacity-80 h-full" />
          </div>
        </div>
        <div className="w-full h-[19.8pc]  flex flex-col gap-3 overflow-auto">
          <div className="flex p-2 active:scale-95 hover:bg-onyx-950 cursor-pointer rounded-md border-transparent border-l-2 transition-all hover:border-indigo-500 items-center w-full justify-between gap-1">
            <img
              className="h-9 bg-indigo-500 rounded-full p-1 w-9"
              src="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png"
              alt=""
            />
            <div className="flex flex-col ">
              <b className="text-white/90 text-[0.9rem]">Main Account</b>
              <span className=" text-onyx-400 text-sm">0x0B113...b61e5</span>
            </div>
            <div className="flex flex-col ">
              <b className="text-white/90 text-[0.9rem]">0.23 ETH</b>
              <span className=" text-onyx-400 text-sm">$ 32</span>
            </div>
            <BsThreeDotsVertical className=" text-indigo-500 self-start" />
          </div>
          <div className="flex p-2 active:scale-95 hover:bg-onyx-950 cursor-pointer rounded-md border-transparent border-l-2 transition-all hover:border-indigo-500 items-center w-full justify-between gap-1">
            <img
              className="h-9 bg-indigo-500 rounded-full p-1 w-9"
              src="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png"
              alt=""
            />
            <div className="flex flex-col ">
              <b className="text-white/90 text-[0.9rem]">Main Account</b>
              <span className=" text-onyx-400 text-sm">0x0B113...b61e5</span>
            </div>
            <div className="flex flex-col ">
              <b className="text-white/90 text-[0.9rem]">0.23 ETH</b>
              <span className=" text-onyx-400 text-sm">$ 32</span>
            </div>
            <BsThreeDotsVertical className=" text-indigo-500 self-start" />
          </div>
        </div>
        <div className="bottom-0 rounded-t-mdg border-t-[1px] border-onyx-800 absolute w-full bg-onyx-950 h-14 p-2 flex justify-between items-center">
          <Tooltip content="Add a new account" id="addAccount">
            <Button type="primary" text={<MdAdd />} />
          </Tooltip>

          <Tooltip content="Import Account" id="ImportAccount">
            <Button type="secondary" text={<BiImport />} />
          </Tooltip>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
