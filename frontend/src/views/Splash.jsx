import React from "react";
import grid from "../assets/images/grid.svg";
import AnimatedLogo from "../assets/images/AnimatedLogo";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <div className="h-full flex justify-center">
      <img className="w-full absolute" src={grid} alt="" />
      <div className="flex flex-1 flex-col gap-7 justify-center items-center h-">
        <AnimatedLogo className=" h-[6pc] z-20" />
        <h1 className="text-2xl bg-gradient-to-r from-onyx-100 font-semibold to-onyx-500 text-transparent bg-clip-text drop-shadow-lg ">
          Gigalate
        </h1>
        <Button
          type="primary"
          text={<Link to="setup">Start Wallet</Link>}
        ></Button>
      </div>
    </div>
  );
}

export default Splash;
