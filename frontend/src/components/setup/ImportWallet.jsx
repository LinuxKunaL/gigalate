import React from "react";

import { RiEyeLine } from "react-icons/ri";
import Button from "../ui/Button";

import { Link } from "react-router-dom";

function ImportWallet() {
  return (
    <div className="p-3 gap-3 flex flex-col w-full h-full justify-between items-center">
      <div className="flex flex-col gap-3">
        <div className="flex items-center flex-col gap-1 p-3">
          <h2 className="text-white/90 font-semibold">Import From Seed</h2>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-2 w-full h-[6pc] px-5 py-2 text-onyx-400/80 bg-onyx-950 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all rounded-md">
            <textarea
              type="text"
              className="w-full h-full resize-none text-onyx-400/80 bg-onyx-950 outline-none"
              placeholder="Seed Phrase"
            />
            <RiEyeLine className="h-5 cursor-pointer hover:opacity-80 rounded-full w-5" />
          </div>
          <div className="flex items-center gap-2 w-full px-5 py-2 text-onyx-400/80 bg-onyx-950 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md">
            <input
              type="text"
              className="w-full bg-onyx-950 outline-none"
              placeholder="New Password"
            />
            <RiEyeLine className="h-5 cursor-pointer hover:opacity-80 rounded-full w-5" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 w-full px-5 py-2 text-onyx-400/80 bg-onyx-950 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md">
              <input
                type="text"
                className="w-full  bg-onyx-950 outline-none"
                placeholder="Confirm Password"
              />
              <RiEyeLine className="h-5 cursor-pointer hover:opacity-80 rounded-full w-5" />
            </div>
            <p className="text-xs px-5 text-white/60">
              Must be at least 8 characters
            </p>
          </div>
        </div>
      </div>
      <Link className="mb-5" to="/home">
        <Button type="primary" text="Import" />
      </Link>
    </div>
  );
}

export default ImportWallet;
