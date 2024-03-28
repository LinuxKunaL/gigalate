import React, { useEffect, useState } from "react";
import { GrTransaction } from "react-icons/gr";
import { FaCoins } from "react-icons/fa";
import { BsSendCheckFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { formatAddress } from "../../../../functions/formatAddress";
import { BsStars } from "react-icons/bs";
import { getActivityByAddress } from "../../../../contract/controller/activity";
import { useSelector } from "react-redux";
import { web3 } from "../../../../contract/util/Contract";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

import ethScan from "../../../../assets/images/ethScan.svg";
import useAccounts from "../../../../hooks/useAccounts";

function Activity() {
  const { address } = useSelector((state) => state.userStates);
  const { getCurrentAccount } = useAccounts();
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const [activityData, setActivityData] = useState([]);
  const [transactionData, setTransactionData] = useState();

  useEffect(() => {
    getActivityByAddress(getCurrentAccount()).then(async (res) =>
      setActivityData(res)
    );
  }, []);

  const handleShowTransactionData = async (
    transactionHash,
    receiver,
    symbol,
    value,
    time,
    tx
  ) => {
    try {
      const { gasUsed } = await web3.eth.getTransactionReceipt(transactionHash);

      const { from, nonce, gas, maxPriorityFeePerGas, maxFeePerGas } =
        await web3.eth.getTransaction(transactionHash);

      const transaction =
        from.toUpperCase() !== address.toUpperCase() ? "Send" : "Receive";

      setTransactionData({
        tx,
        gas,
        from,
        nonce,
        value,
        time,
        symbol,
        receiver,
        gasUsed,
        transaction,
        maxFeePerGas,
        maxPriorityFeePerGas,
      });

      setVisiblePopUp(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="ActivityHistory"
      className="w-full relativex h-[15pc] border-onyx-800 border-t-[1px] rounded-t-mds border-[1px]z p-2"
    >
      <div className="flex flex-col h-full gap-3 overflow-auto">
        {activityData?.length > 0 ? (
          activityData?.map((data, index) => (
            <div
              key={index}
              onClick={() => {
                handleShowTransactionData(
                  data?.transactionHash,
                  data?.receiver,
                  data?.symbol,
                  data?.amount,
                  data?.time,
                  data?.tx
                );
              }}
              className="flex bg-onyx-800/30 hover:bg-onyx-800/40 active:bg-onyx-800/50 select-none cursor-pointer rounded-xl px-3 py-3 gap-2 items-center"
            >
              <div className="h-9 relative bg-onyx-900 w-10 flex justify-center items-center rounded-full text-indigo-500">
                {data.tx === "token" ? (
                  <FaCoins />
                ) : data.tx === "crypto" ? (
                  <BsSendCheckFill />
                ) : data.tx === "nft" ? (
                  <BsStars />
                ) : null}
                {data.tx === "token" ? (
                  <div className=" absolute rounded-full text-sm flex justify-center items-center -bottom-2 -left-0 h-5 w-5 bg-black/50 text-white/70">
                    {data.symbol.slice(0, 1)}
                  </div>
                ) : null}
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <b className=" text-white/90 font-semibold">
                    <span className="text-xs text-white/70">{data.tx}</span>{" "}
                    {data.sender === address ? "Send" : "Receive"}
                  </b>
                  <span className="text-green-500 text-sm font-light">
                    Confirmed
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <b className=" text-white/90 font-semibold">
                    {data.amount} {data.symbol}
                  </b>
                  <span className=" text-onyx-300/90 text-sm font-light">
                    $34.3
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-full w-full justify-center items-center">
            <h1 className="flex text-sm text-white/70 flex-col justify-center items-center">
              <GrTransaction className=" text-base text-indigo-500" />
              You have no transactions
            </h1>
          </div>
        )}
      </div>
      {visiblePopUp ? (
        <div className="h-full w-full absolute left-0 top-0 z-30 p-3">
          <div className="h-full p-4 gap-4 flex flex-col  rounded-xl w-full bg-onyx-900 backdrop-blur-md shadow-massive-2">
            <div className="flex gap-3 justify-between items-center ">
              <div>
                <h2 className="text-white/90 font-semibold text-lg">
                  {transactionData?.receiver !== address ? "Send" : "Receive"}
                </h2>
                <span className=" text-xs px-2 py-0.5 bg-green-600 rounded-full text-white">
                  Confirmed
                </span>
              </div>
              <div
                onClick={() => {
                  setVisiblePopUp(false);
                }}
                className="inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900"
              >
                <IoIosClose />
              </div>
            </div>
            <div className="overflow-auto flex flex-col gap-4">
              <div className="flex justify-end gap-4">
                <Link className="cursor-pointer hover:opacity-90 transition-all">
                  <img
                    className="h-8 w-8 p-1 rounded-lg bg-white/90"
                    src={ethScan}
                    alt=""
                  />
                </Link>
                <Link className="h-8 flex justify-center items-center w-8 p-1 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white cursor-pointer hover:opacity-90 transition-all">
                  <GrTransaction />
                </Link>
              </div>
              <div className="flex gap-2 flex-col">
                <div className="flex justify-between">
                  <span className=" font-semibold text-white/90">From</span>
                  <span className=" font-semibold text-white/90">To</span>
                </div>
                <div className="flex justify-between">
                  <span className=" text-onyx-200/90 text-sm cursor-pointer">
                    {formatAddress(transactionData?.from)}
                  </span>
                  <FaArrowRightLong className=" text-indigo-500" />
                  <span className=" text-onyx-200/90 text-sm cursor-pointer">
                    {formatAddress(transactionData?.receiver)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className=" font-semibold text-white/90">Transaction</h1>
                <table>
                  <tr>
                    <td className="text-xs p-1 text-onyx-400">Nonce</td>
                    <td className="text-xs p-1 text-end text-onyx-400">
                      {Number(transactionData?.nonce)}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xs p-1 text-onyx-400">
                      {transactionData.tx !== "nft" ? "Amount" : "NFT id"}
                    </td>
                    <td className="text-xs p-1 text-end text-onyx-200 font-semibold">
                      {transactionData?.transaction !== "Send" ? "-" : null}
                      {transactionData?.value} {transactionData.symbol}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xs p-1 text-onyx-400">
                      Gas Limit (Units)
                    </td>
                    <td className="text-xs p-1 text-end text-onyx-400">
                      {Number(transactionData?.gas)}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xs p-1 text-onyx-400">
                      Gas Used (Units)
                    </td>
                    <td className="text-xs p-1 text-end text-onyx-400">
                      {Number(transactionData?.gas)}
                    </td>
                  </tr>
                  {/* {transactionData?.transaction !== "Send" ? (
                    <> */}
                  <tr>
                    <td className="text-xs p-1 text-onyx-400">
                      Base fee (GWEI)
                    </td>
                    <td className="text-xs p-1 text-end text-onyx-400">
                      {Number(transactionData?.maxPriorityFeePerGas)}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xs p-1 text-onyx-400">Total gas fee</td>
                    <td className="text-xs p-1 text-end text-onyx-400">
                      {web3.utils.fromWei(
                        Number(transactionData?.gasUsed),
                        "gwei"
                      )}{" "}
                      ETH
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xs p-1 text-onyx-400">
                      Max fee per gas
                    </td>
                    <td className="text-xs p-1 text-end text-onyx-400">
                      {Number(
                        web3.utils.fromWei(
                          transactionData?.maxFeePerGas,
                          "ether"
                        )
                      ).toFixed(9)}{" "}
                      ETH
                    </td>
                  </tr>
                  {/* </>
                  ) : null} */}
                  <tr>
                    <td className="text-xs p-1 text-onyx-400">Total</td>
                    <td className="text-xs p-1 text-end text-onyx-200 font-semibold">
                      {transactionData?.value} {transactionData.symbol}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Activity;
