import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { transfer } from "../../../../contract/controller/token";
import { formatAddress } from "../../../../functions/formatAddress";
import { toastSuccess } from "../../../../app/Toasts";

import Button from "../../../../components/ui/Button";

function CryptoTransaction({ data, visible, hideVisible }) {
  const { receiverAddress, amount, userAccountState, gasFee } = data;
  const Navigate = useNavigate();

  const handleSendCrypto = async () => {
    await transfer(receiverAddress, amount, userAccountState.address);
    toastSuccess("Transaction successful 🎉");
    setTimeout(() => {
      Navigate("/home");
    }, 1500);
  };

  return visible ? (
    <div id="popUpSendCrypto" className="h-full w-full absolute top-0 z-20 p-3">
      <div className="h-full p-4 gap-4 flex flex-col  rounded-xl w-full bg-onyx-900 backdrop-blur-md shadow-massive-2">
        <div className="flex animate-pulse border-[1px] px-4 py-2  rounded-lg border-onyx-800/50 gap-2 flex-col">
          <div className="flex justify-between">
            <span className=" font-semibold text-white/90">From</span>
            <span className=" font-semibold text-white/90">To</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-onyx-200/90 text-sm cursor-pointer">
              {formatAddress(userAccountState?.address)}
            </span>
            <FaArrowRightLong className="text-indigo-500" />
            <span className=" text-onyx-200/90 text-sm cursor-pointer">
              {formatAddress(receiverAddress)}
            </span>
          </div>
        </div>
        <div className="flex gap-3  justify-between items-center ">
          <div className="flex flex-col gap-2 items-start">
            <h2 className="text-white/90 font-semibold text-lg">SENDING ETH</h2>{" "}
            <span className=" text-sm px-2 py-0.5 bg-onyx-950 rounded-full text-white/50">
              {amount} ETH
            </span>
          </div>
          <div className="inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900">
            <IoIosClose onClick={() => hideVisible(false)} />
          </div>
        </div>
        <div className="overflow-auto flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className=" font-semibold text-white/90">
              Gas <span className=" text-xs text-white/50">( gwei )</span>{" "}
            </h1>
            <table>
              <tr>
                <td className="text-xs p-1 text-onyx-400">estimated</td>
                <td className="text-xs p-1 text-end text-onyx-400">
                  {gasFee} gwei
                </td>
              </tr>
              <tr>
                <td className="text-xs p-1 text-onyx-400">Max fee</td>
                <td className="text-sm p-1 text-end text-onyx-200 font-semibold">
                  {gasFee} gwei
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
                  {Number(gasFee) + Number(amount)} ETH
                </td>
              </tr>
              <tr>
                <td className="text-xs p-1 text-onyx-400">Total</td>
                <td className="text-sm underline underline-offset-4 animate-pulse p-1 text-end text-onyx-200 font-semibold">
                  {Number(gasFee) + Number(amount)} ETH
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="flex justify-evenly items-center h-[5pc] w-full">
          <Button
            type="secondary"
            onClick={() => hideVisible(false)}
            text={<Link>Reject</Link>}
          />
          <Button variant="primary" onClick={handleSendCrypto}>
            send
          </Button>
        </div>
      </div>
    </div>
  ) : null;
}

export default CryptoTransaction;
