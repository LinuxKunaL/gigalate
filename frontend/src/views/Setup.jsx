import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function Setup() {
  return (
    <div className="flex w-full flex-col h-full justify-around  px-5 py-3">
      <h1 className="text-2xl text-center bg-gradient-to-r from-onyx-100 font-semibold to-onyx-500 text-transparent bg-clip-text drop-shadow-lg ">
        Gigalate
      </h1>
      <div className="flex flex-col gap-4">
        <Button
          type="secondary"
          text={<Link to="/home">Import Using Seed Phrase</Link>}
        />
        <Button
          type="primary"
          text={<Link>Create a New Wallet</Link>}
        />
      </div>
    </div>
  );
}

export default Setup;
