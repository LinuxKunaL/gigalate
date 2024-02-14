import React from "react";

function Loader() {
  return (
    <div className="h-[100dvh] z-20 top-0 bottom-0 flex justify-center items-center flex-col gap-3 w-full absolute bg-onyx-800/50 backdrop-blur-xl">
      <div>
        <div class="spinner" />
      </div>
      <h3 className=" font-semibold text-white">Please wait !</h3>
    </div>
  );
}

export default Loader;
