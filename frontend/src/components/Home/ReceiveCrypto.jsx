import React from "react";
import { IoIosClose } from "react-icons/io";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import demoQR from "../../assets/images/demoQR.png";
import { LuArrowUpDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Tooltip from "../ui/Tooltip";

function ReceiveCrypto() {
  return (
    <div className="flex items-center gap-1 h-[33.5pc] flex-col">
      <div className="flex justify-between w-full items-center  p-4">
        <h1 className="font-semibold text-lg text-onyx-100">Receive</h1>
        <Link
          to="/home"
          className="inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900 active:scale-95"
        >
          <IoIosClose />
        </Link>
      </div>
      <div className="w-full flex flex-col gap-3 p-4">
        <div className="flex gap-1 flex-col justify-center items-center">
          <img
            src={demoQR}
            className="p-2 h-[13pc] bg-onyx-950 rounded-lg"
            alt=""
          />
          <Button text="Download" type="secondary" />
        </div>
      </div>
      <div className="border-onyx-800 border-t-[1px] h-full w-full p-4 flex flex-col">
        <div className="flex flex-col h-full justify-evenly items-center">
          <span className="p-2 block max-w-full break-words text-center bg-onyx-800/30 text-balance rounded-full text-white/60">
            0x0B113FB87c3d94CD27e026946b552845136b61e5
          </span>
          <Button type="primary" text={<Link>Copy address</Link>} />
        </div>
      </div>
    </div>
  );
}

export default ReceiveCrypto;
