import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";


function ConfirmSeedPhrase() {
  return (
    <div className="p-3 gap-3 flex flex-col w-full h-full justify-between items-center">
      <div className="flex flex-col gap-3 items-center">
        <div className="flex items-center flex-col gap-1 p-3">
          <h2 className="text-white/90 font-semibold">Confirm Seed Phrase</h2>
        </div>
        <div className="flex bg-onyx-950 p-2 rounded-md items-center flex-wrap w-full gap-4 relative justify-center">
          <p className="text-white/80 text-sm text-center">
            Select each word in the order it was presented to you
          </p>
          <div className="flex flex-wrap p-3 justify-center gap-4">
            {[
              { index: 2, seed: "keyboard" },
              { index: 7, seed: "orange" },
              { index: 4, seed: "target" },
            ].map((i) => (
              <div
                data-index={i.index}
                className="select-none rounded-md text-sm h-[2.4pc] w-[7pc] bg-onyx-800/50 flex justify-center items-center text-white/90 outline-none relative"
                onDrop={(e) => {
                  e.target.innerText = e.dataTransfer.getData("text/plain");
                }}
                id="seedPlace"
                onDragOver={(e) => e.preventDefault()}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { index: 2, seed: "keyboard" },
            { index: 7, seed: "orange" },
            { index: 4, seed: "target" },
          ].map((i) => (
            <div
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", e.target.innerText)
              }
              onDragOver={(e) => e.preventDefault()}
              className="select-none text-sm h-[2.4pc] w-[7pc] bg-onyx-800/50 flex justify-center items-center text-white/70 rounded-lg"
            >
              {i.seed}
            </div>
          ))}
        </div>
      </div>
      <Link className="mb-5" to="/setup/createWallet/congratulation">
        <Button type="primary" text="Continue" />
      </Link>
    </div>
  );
}

export default ConfirmSeedPhrase;
