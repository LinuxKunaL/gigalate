import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function General() {
  return (
    <div className="h-full flex flex-col gap-3 w-full ">
      <div className="flex p-3 justify-between items-center px-4">
        <h1 className="text-white/70">General</h1>
        <Link
          to="/setting"
          className="inline-flex cursor-pointer items-center justify-center h-9 w-9  flex-col gap-1 text-base  text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive-2 focus:outline-none focus:ring-2 hover:text-indigo-500 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900 active:scale-95"
        >
          <RiArrowGoBackFill />
        </Link>
      </div>
      <div className="border-onyx-800 flex flex-col gap-3 border-t-[1px] p-4">
        <div className="flex flex-col gap-2">
          <span className="text-white/80">Currency conversion</span>
          <select
            className="w-full px-3 py-2 text-onyx-300/80 bg-onyx-950 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all text-sm rounded-md"
            id="currencySelect"
          >
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-white/80">Primary currency</span>
          <div className="flex gap-7 items-center">
            <div className="flex gap-2 items-center">
              <input type="radio" id="option1" name="options" value="option1" />
              <span className=" font-semibold text-white/60">ETH</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                className=" bg-indigo-500"
                type="radio"
                id="option2"
                name="options"
                value="option2"
              />
              <span className=" font-semibold text-white/60">Fiat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default General;
