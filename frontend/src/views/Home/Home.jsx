import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../../functions/mnemonics/verifyUser";
import { seedData } from "../../functions/mnemonics/getDataBySeed";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import SendCrypto from "./components/SendCrypto";
import ReceiveCrypto from "./components/ReceiveCrypto";
import useGenerateAvatar from "../../hooks/useGenerateAvatar";
import { encryption } from "../../functions/encryption";
import Cookies from "js-cookie";

function Home() {
  const { generateAvatar } = useGenerateAvatar();
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  useEffect(() => {
    const fetching = async () => {
      await verifyUser(Navigate);

      const data = await seedData(Navigate);

      const userAccountsData = localStorage.getItem("gigalate.userAccounts");

      const key = Cookies.get("gigalate.key");

      if (!userAccountsData) {
        localStorage.setItem(
          "gigalate.userAccounts",
          JSON.stringify([
            {
              index: data.index,
              address: data.address,
              accountName: "Main account",
              avatar: generateAvatar(),
              crypto: { symbol: "", icon: "" },
              isMain: true,
              encryptedPrivateKey: encryption(data.privateKey, key),
              NFTs:[],
              tokens:[],


            },
          ])
        );
      }
      
    };
    fetching();
  }, [Dispatch, Navigate, generateAvatar]);

  return (
    <div className="relative h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="send" element={<SendCrypto />} />
        <Route path="receive" element={<ReceiveCrypto />} />
      </Routes>
    </div>
  );
}

export default Home;
