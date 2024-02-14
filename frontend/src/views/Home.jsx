import React from "react";
import Navbar from "../components/Home/Navbar";
import Main from "../components/Home/Main";

import { Route, Routes } from "react-router-dom";
import SendCrypto from "../components/Home/SendCrypto";
import ReceiveCrypto from "../components/Home/ReceiveCrypto";

function Home() {
  return (
    <div className="relative h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="NFTs" />
          <Route path="activity" />
        </Route>
        <Route path="send" element={<SendCrypto />} />
        <Route path="receive" element={<ReceiveCrypto />} />
      </Routes>
    </div>
  );
}

export default Home;
