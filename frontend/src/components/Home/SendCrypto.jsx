import React from "react";
import { IoIosClose } from "react-icons/io";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Tooltip from "../ui/Tooltip";

function SendCrypto() {
  return (
    <div className="flex items-center gap-4 h-[33.5pc] flex-col">
      <div className="flex justify-between w-full items-center  p-4">
        <h1 className="font-semibold text-lg text-onyx-100">Send</h1>
        <Link
          to="/home"
          className="inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900 active:scale-95"
        >
          <IoIosClose />
        </Link>
      </div>
      <div className="w-full flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between w-full">
          <span className="text-white/60">From</span>
          <div className="flex gap-1 flex-col">
            <span className="text-end text-white/80">0x65...e5</span>
            <b className="text-end text-white/70">Balance: 6.554 ETH</b>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-white/60">To</span>
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="w-[14pc] px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 animate-pulse focus:animate-none hover:animate-none transition-all shadow-massive-2as rounded-md"
              placeholder="Public address (0x)"
              defaultValue="0x65a3A19c506c40b6bf1dC8ce27DFD792DD8E2De5"
            />
            <Tooltip id="GrCode" content="Scan QR">
              <div className="h-8 p-1 flex justify-center items-center w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white cursor-pointer hover:opacity-90 transition-all hover:from-indigo-500 hover:to-indigo-400 active:scale-95 transition-all">
                <MdOutlineQrCodeScanner className="w-full h-full" />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="border-onyx-800 border-t-[1px] h-full w-full p-4 flex flex-col gap-3">
        <h1 className="font-semibold text-md text-onyx-100/90">Amount</h1>
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className=" flex gap-2 items-center p-2 w-[5pc]">
            <span className="bg-gradient-to-r from-onyx-100 font-semibold to-onyx-500 text-transparent bg-clip-text">
              ETH
            </span>
            <input
              type="text"
              className=" bg-transparent outline-none text-xl text-onyx-200"
              defaultValue="0"
            />
          </div>
          <div className="flex active:scale-95  transition-all items-center  justify-center border-[1px] text-white/70 text-sm border-onyx-800/90 w-min px-5 cursor-pointer rounded-full">
            <span>$0</span> <LuArrowUpDown />
          </div>
        </div>
      </div>
      <div className="flex border-onyx-800 border-t-[1px] justify-evenly items-center  h-full w-full">
        <Button type="secondary" text={<Link>Reject</Link>} />
        <Button type="primary" text={<Link>next</Link>} />
      </div>
      {/* <div
        id="popUpSendCrypto"
        className="h-full w-full absolute top-0 z-20 p-3"
      >
        <div className="h-full p-4 gap-4 flex flex-col  rounded-xl w-full bg-onyx-900 backdrop-blur-md shadow-massive-2">
          <div className="flex animate-pulse border-[1px] px-4 py-2  rounded-lg border-onyx-800/50 gap-2 flex-col">
            <div className="flex justify-between">
              <span className=" font-semibold text-white/90">From</span>
              <span className=" font-semibold text-white/90">To</span>
            </div>
            <div className="flex justify-between">
              <span className=" text-onyx-200/90 text-sm cursor-pointer">
                0x65...De5
              </span>
              <FaArrowRightLong className="text-indigo-500" />
              <span className=" text-onyx-200/90 text-sm cursor-pointer">
                0x65...De5
              </span>
            </div>
          </div>
          <div className="flex gap-3  justify-between items-center ">
            <div className="flex flex-col gap-2 items-start">
              <h2 className="text-white/90 font-semibold text-lg">
                SENDING ETH
              </h2>{" "}
              <span className=" text-sm px-2 py-0.5 bg-onyx-950 rounded-full text-white/50">
                ETH 22222
              </span>
            </div>
            <div className="inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900">
              <IoIosClose />
            </div>
          </div>
          <div className="overflow-auto flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className=" font-semibold text-white/90">Gas</h1>
              <table>
                <tr>
                  <td className="text-xs p-1 text-onyx-400">estimated</td>
                  <td className="text-xs p-1 text-end text-onyx-400">
                    0.00122333 ETH
                  </td>
                </tr>
                <tr>
                  <td className="text-xs p-1 text-onyx-400">Max fee</td>
                  <td className="text-sm p-1 text-end text-onyx-200 font-semibold">
                    0.0016276SepoliaETH
                  </td>
                </tr>
              </table>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className=" font-semibold text-white/90">Total</h1>
              <table>
                <tr>
                  <td className="text-xs p-1 text-onyx-400">Amount + gas</td>
                  <td className="text-xs p-1 text-end text-onyx-400">
                    2222.00120242 ETH
                  </td>
                </tr>
                <tr>
                  <td className="text-xs p-1 text-onyx-400">Total</td>
                  <td className="text-sm underline underline-offset-4 animate-pulse p-1 text-end text-onyx-200 font-semibold">
                    2222.00157229 SepoliaETH
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="flex justify-evenly items-center h-[5pc] w-full">
            <Button type="secondary" text={<Link>Reject</Link>} />
            <Button type="primary" text={<Link>send</Link>} />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SendCrypto;
