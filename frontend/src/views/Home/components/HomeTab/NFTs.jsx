import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useEffect } from "react";
import { IoReload } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { web3 } from "../../../../contract/util/Contract";
import { toastError, toastSuccess } from "../../../../app/Toasts";
import { MdDeleteForever } from "react-icons/md";
import { RiNftFill } from "react-icons/ri";
import { FaFileContract } from "react-icons/fa6";
import { formatAddress } from "../../../../functions/formatAddress";

import axios from "axios";
import NFTAbi from "../../../../contract/util/NFT.json";
import openSeaWhite from "../../../../assets/images/openSeaWhite.svg";
import Button from "../../../../components/ui/Button";
import useAccounts from "../../../../hooks/useAccounts";
import Tooltip from "../../../../components/ui/Tooltip";

function NFTs() {
  const [importNftData, setImportNftData] = useState({
    address: "",
    tokenId: null,
  });
  const [listNFTs, setListNFTs] = useState([]);
  const [NFTData, setNFTData] = useState({});
  const [transferNFTData, setTransferNFTData] = useState();
  const [NFTDataLoad, setNFTDataLoad] = useState(0);
  const [transactionFee, setTransactionFee] = useState(0);
  const {
    getCurrentAccount,
    getUserAccountsDataByAddress,
    modifiedAccountByAddress,
    deleteAccountById,
  } = useAccounts();
  const currentAccount = getCurrentAccount();

  useEffect(() => {
    const fetchNFTs = async () => {
      const result = getUserAccountsDataByAddress(currentAccount.address);
      setListNFTs(result?.NFTs);
    };
    fetchNFTs();
  }, [currentAccount.address, NFTDataLoad]);

  const importNFT = async () => {
    if (!(importNftData.address.length === 42))
      return toastError("invalid ethereum address");
    for (const nft of currentAccount.NFTs)
      if (nft.tokenId === importNftData.tokenId)
        return toastError("NFT already imported!");
    if (!(importNftData.tokenId !== null)) return toastError("enter token ID");

    try {
      const nft = new web3.eth.Contract(NFTAbi, importNftData.address);

      try {
        let URImetaData;
        const NFTOwnerAddress = await nft.methods
          .ownerOf(importNftData.tokenId)
          .call();

        if (NFTOwnerAddress !== currentAccount.address)
          return toastError("You did not own this NFT");

        const NFTName = await nft.methods.name().call();
        const NFTSymbol = await nft.methods.symbol().call();
        const NFTUri = await nft.methods.tokenURI(importNftData.tokenId).call();

        if (NFTUri) {
          URImetaData = await axios.get(
            `https://cloudflare-ipfs.com/ipfs/${NFTUri?.slice(7)}`
          );
        }
        if (NFTOwnerAddress === currentAccount.address) {
          const account = getUserAccountsDataByAddress(currentAccount.address);

          modifiedAccountByAddress(
            {
              name: NFTName,
              symbol: NFTSymbol,
              contractAddress: importNftData.address,
              tokenId: importNftData.tokenId,
              metaData: URImetaData.data,
            },
            account.index,
            "NFTs"
          );

          setNFTDataLoad(NFTDataLoad + 1);
          document.getElementById("popUpAddNFT").classList.toggle("!block");
          return toastSuccess("NFT added !");
        }
      } catch (error) {
        console.log(error);
        return toastError("NFT can't be added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const calculateGas = async (_to) => {
    if (_to.length !== 42) return null;

    try {
      const encodedTokenId = web3.eth.abi
        .encodeParameter("uint256", 3)
        .slice(2);
      const encodedFrom = web3.eth.abi
        .encodeParameter("address", currentAccount.address)
        .slice(2);
      const encodedTo = web3.eth.abi.encodeParameter("address", _to).slice(2);

      const encodedData =
        "0x23b872dd" + encodedTokenId + encodedFrom + encodedTo;

      const gasLimit = await web3.eth.estimateGas({
        from: currentAccount.address,
        to: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
        data: encodedData,
      });

      setTransactionFee(Number(gasLimit));
    } catch (error) {
      console.log(error);
    }
  };

  const removeNFT = (tokenId) => {
    const currentAccount = getCurrentAccount();
    deleteAccountById(currentAccount.index);

    var userAccountsStrings = localStorage.getItem("gigalate.userAccounts");
    var userAccount = JSON.parse(userAccountsStrings);

    const modifiedNFTs = currentAccount?.NFTs.filter(
      (nft) => nft.tokenId !== tokenId
    );

    currentAccount.NFTs = modifiedNFTs;

    userAccount.push(currentAccount);
    localStorage.setItem("gigalate.userAccounts", JSON.stringify(userAccount));

    setNFTDataLoad(NFTDataLoad + 1);
    document.getElementById("popUpViewNFT").classList.remove("!flex");
  };

  const transferNFT = async (tokenId, contractAddress) => {
    if (!transferNFTData) return toastError("Please enter address!");

    try {
      const nft = new web3.eth.Contract(NFTAbi, contractAddress);

      await nft.methods
        .transferFrom(currentAccount.address, transferNFTData, tokenId)
        .send({
          from: currentAccount.address,
        });
      removeNFT(tokenId.toString());
      return toastSuccess("NFT transferred!");
    } catch (error) {
      console.log(error);
      return toastError(error.message);
    }
  };

  return (
    <>
      <div id="NFTsSection" className="w-full relative h-[15pc] rounded-t-md">
        <div className="flex flex-wrap h-[14.7pc] p-2 overflow-auto justify-between">
          {listNFTs.length > 0 ? (
            listNFTs.map((i, index) => (
              <div
                key={index}
                onClick={() => {
                  setNFTData({
                    tokenId: i?.tokenId,
                    image: i?.metaData.image,
                    name: i?.metaData.name,
                    tokenName: i?.name,
                    contractAddress: i?.contractAddress,
                  });
                  document
                    .getElementById("popUpViewNFT")
                    .classList.toggle("!flex");
                }}
                className="flex flex-col w-[9.6pc] bg-onyx-800/30 hover:bg-onyx-800/40 active:bg-onyx-800/50 select-none m-[5px] cursor-pointer rounded-xl px-2 py-2  gap-2 items-center"
              >
                <div className="overflow-hidden rounded-md border-indigo-500 border-[1px] h-[9pc] w-[9pc]">
                  <img
                    className="h-auto w-full"
                    src={`https://cloudflare-ipfs.com/ipfs/${i?.metaData?.image.slice(
                      7
                    )}`}
                    alt=""
                  />
                </div>

                <div className="flex flex-col">
                  <span className=" text-onyx-300/90 text-sm font-light">
                    {i?.metaData?.name}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-full w-full justify-center items-center">
              <h1 className="flex text-sm text-white/70 flex-col justify-center items-center">
                <RiNftFill className=" text-base text-indigo-500" />
                You have no NFTs
              </h1>
            </div>
          )}
        </div>
        <div
          className=" absolute right-0 bottom-0 mx-3 my-3 inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900"
          onClick={() =>
            document.getElementById("popUpAddNFT").classList.toggle("!block")
          }
        >
          <GoPlus />
        </div>
        <div className="absolute right-12 bottom-0 mx-3 my-3 inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900">
          <IoReload />
        </div>
      </div>
      <div id="popUpAddNFT" className="hidden w-full absolute top-0 z-30 p-3">
        <div className="h-full p-4 gap-6 flex flex-col  rounded-xl w-full bg-onyx-900 backdrop-blur-md shadow-massive-2">
          <div className="flex gap-3 justify-between items-center ">
            <h2 className="text-white/90 font-semibold text-lg">Import NFT</h2>
            <div
              onClick={() =>
                document
                  .getElementById("popUpAddNFT")
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
                Address
              </span>
              <input
                type="text"
                className="w-full px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
                placeholder="0x..."
                onChange={(e) =>
                  setImportNftData({
                    ...importNftData,
                    address: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white/80 text-sm flex items-center gap-2">
                Token ID
              </span>
              <input
                type="number"
                className="w-full px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
                placeholder="Enter Token id"
                onChange={(e) =>
                  setImportNftData({
                    ...importNftData,
                    tokenId: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("popUpAddNFT")
                  .classList.toggle("!block")
              }
              className="flex-1"
              text=""
            >
              Cancel
            </Button>
            <Button variant="primary" onClick={importNFT} className="flex-1">
              Save
            </Button>
          </div>
        </div>
      </div>
      <div
        id="popUpViewNFT"
        className="w-full hidden justify-center items-start absolute top-0 z-30 p-3"
      >
        <div className="shadow-massive-2 p-3 flex rounded-md flex-col gap-4 bg-onyx-900">
          <div className="flex gap-3 w-full justify-between items-center ">
            <h2 className="text-white/90 font-semibold text-lg">
              View NFT :{" "}
              <b className="text-sm text-white/60 font-semibold">
                {NFTData?.tokenName}
              </b>
            </h2>
            <div
              onClick={() =>
                document
                  .getElementById("popUpViewNFT")
                  .classList.toggle("!flex")
              }
              className="inline-flex cursor-pointer items-center justify-center h-9 w-9 flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900"
            >
              <IoIosClose />
            </div>
          </div>
          <div className="flex relative flex-col gap-2 items-center">
            <img
              className="rounded-md h-[20pc]"
              src={`https://cloudflare-ipfs.com/ipfs/${NFTData?.image?.slice(
                7
              )}`}
              alt=""
            />
            <span className="bg-gradient-to-r from-onyx-100 font-semibold to-onyx-500 text-transparent bg-clip-text">
              #{NFTData?.tokenId} - {NFTData?.name}
            </span>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                onClick={() => {
                  document
                    .getElementById("popUpSendNFT")
                    .classList.toggle("!flex");
                  document
                    .getElementById("popUpViewNFT")
                    .classList.toggle("!flex");
                }}
                variant="primary"
              >
                send
              </Button>
            </div>
            <div className="flex gap-2">
              <Tooltip content="Copy contract address" id="copyContractAddress">
                <div className="inline-flex cursor-pointer items-center justify-center h-9 w-9 flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900">
                  <FaFileContract />
                </div>
              </Tooltip>

              <Tooltip content="Delete NFT" id="deleteNft">
                <div
                  onClick={() => removeNFT(NFTData?.tokenId)}
                  className="inline-flex cursor-pointer items-center justify-center h-9 w-9 flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900"
                >
                  <MdDeleteForever />
                </div>
              </Tooltip>

              <Tooltip content="View on opensea" id="viewOnOpensea">
                <div className="inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900 ">
                  <img className="p-2" src={openSeaWhite} alt="" />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div
        id="popUpSendNFT"
        className="w-full hidden left-0 items-center absolute top-0 z-30 p-3"
      >
        <div className="shadow-massive-2 p-3 py-4 w-full flex items-center rounded-md flex-col gap-4 bg-onyx-900">
          <div className="flex gap-3 w-full justify-between items-center ">
            <h2 className="text-white/90 font-semibold text-lg">send NFT : </h2>
            <div
              onClick={() => {
                document
                  .getElementById("popUpSendNFT")
                  .classList.toggle("!flex");
              }}
              className="inline-flex cursor-pointer items-center justify-center h-9 w-9 flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900"
            >
              <IoIosClose />
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 p-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-white/60">From</span>
              <div className="flex gap-1 flex-col">
                <span className="text-end text-white/80">
                  {formatAddress(currentAccount.address)}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-white/60">To</span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="w-[14pc] px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 animate-pulse focus:animate-none hover:animate-none transition-all shadow-massive-2as rounded-md"
                  placeholder="Public address (0x)"
                  onChange={(e) => {
                    setTransferNFTData(e.target.value);
                    calculateGas(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <h1 className=" font-semibold text-white/90">Total</h1>
            <table>
              <tr>
                <td className="text-xs p-1 text-onyx-400">gas (gwei)</td>
                <td className="text-xs p-1 text-end text-onyx-400 ">
                  {transactionFee} gwei
                </td>
              </tr>
              <tr>
                <td className="text-xs p-1 text-onyx-400">Total</td>
                <td className="text-sm underline underline-offset-4 animate-pulse p-1 text-end text-onyx-200 font-semibold">
                  {transactionFee} gwei
                </td>
              </tr>
            </table>
          </div>
          <Button
            onClick={() =>
              transferNFT(Number(NFTData?.tokenId), NFTData?.contractAddress)
            }
            variant="primary"
          >
            send
          </Button>
        </div>
      </div>
    </>
  );
}

export default NFTs;
