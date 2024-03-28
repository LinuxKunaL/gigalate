import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaCircleExclamation } from "react-icons/fa6";
import Button from "../../../components/ui/Button";
import Tooltip from "../../../components/ui/Tooltip";

function SecurityPrivacy() {
  return (
    <div className="h-full flex flex-col gap-3 w-full ">
      <div className="flex p-3 justify-between items-center px-4">
        <h1 className="text-white/70">Security & privacy</h1>
        <Link
          to="/setting"
          className="inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900 active:scale-95"
        >
          <RiArrowGoBackFill />
        </Link>
      </div>
      <div className="border-onyx-800 h-[75%] overflow-auto flex flex-col gap-6 border-t-[1px] p-4">
        <div className="flex flex-col gap-4">
          <span className="text-white/80 flex items-center gap-2">
            Security
            <Tooltip
              id="ExclamationForSecurity"
              content="Secret Recovery Phrase"
            >
              <FaCircleExclamation className="cursor-pointer" />
            </Tooltip>
          </span>
          <Button variant="secondary">Reveal Secret Recovery Phrase</Button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <span className="text-white/80 flex items-center gap-2">
              IPFS gateway
              <Tooltip
                id="ExclamationForIPFS"
                content="Gigalate uses third-party services <br> to show images of your <br> NFTs stored on IPFS"
              >
                <FaCircleExclamation className="cursor-pointer" />
              </Tooltip>
            </span>
            <input
              type="text"
              className="w-full px-5 py-2 text-onyx-400/80 bg-onyx-950/50 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md"
              placeholder="IPFS gateway URL"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityPrivacy;
