import React, { useState } from "react";
import { RiEyeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import Button from "../../../../components/ui/Button";
import pass from "../../../../assets/images/pass.png";

function Password({ props }) {
  const [isCheckBox, setIsCheckBox] = useState();

  const passwordEye = (input) => {
    
  };

  return (
    <div className="p-3 gap-3 flex flex-col w-full h-full justify-evenly items-center">
      <div className="flex items-center flex-col gap-1 p-3">
        <h2 className="text-white/90 font-semibold">Create Password</h2>
        <p className="text-white/60 text-sm text-center">
          This password will unlock your Gigalate wallet only on this service
        </p>
      </div>
      <img src={pass} className="w-[14pc]" alt="3d PNGs by Vecteezy" />
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-2 w-full px-5 py-2 text-onyx-400/80 bg-onyx-950 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md">
          <input
            type="text"
            className="w-full  bg-onyx-950 outline-none"
            placeholder="New Password"
            onChange={(e) =>
              props?.setPassword((prev) => ({
                ...prev,
                newPassword: e.target.value,
              }))
            }
          />
          <RiEyeLine className="h-5 cursor-pointer hover:opacity-80 rounded-full w-5" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 w-full px-5 py-2 text-onyx-400/80 bg-onyx-950 border-[1px] outline-none border-onyx-700/50 hover:border-indigo-500/50 transition-all shadow-massive-2as rounded-md">
            <input
              type="text"
              className="w-full  bg-onyx-950 outline-none"
              placeholder="Confirm Password"
              onChange={(e) =>
                props?.setPassword((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
            <RiEyeLine  className="h-5 cursor-pointer hover:opacity-80 rounded-full w-5" />
          </div>
          <p className="text-xs px-5 text-white/60">
            Must be at least 8 characters
          </p>
        </div>
        <div className="flex gap-1 items-start">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            onChange={(e) => setIsCheckBox(e.target.checked)}
            className="accent-indigo-500 rounded-full hover:accent-indigo-500 focus:accent-indigo-500 "
          />
          <label
            for="link-checkbox"
            className="ms-2 select-none text-sm font-light text-gray-300/80"
          >
            I understand that gigatrade cannot recover this password for me.
          </label>
        </div>
        {isCheckBox ? (
          <Link className="flex-1" to="seedPhrase">
            <Button variant="primary">Next</Button>
          </Link>
        ) : (
          <Button className="flex-1" variant="disable">
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default Password;
