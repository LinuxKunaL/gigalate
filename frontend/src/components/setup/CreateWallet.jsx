import React from "react";
import { Route, Routes } from "react-router-dom";

import Password from "./components/Password";
import SeedPhrase from "./components/SeedPhrase";
import ConfirmSeedPhrase from "./components/ConfirmSeedPhrase";
import Congratulation from "./components/Congratulation";

function CreateWallet() {
  return (
    <Routes>
      <Route index element={<Password />} />
      <Route path="seedPhrase" element={<SeedPhrase />} />
      <Route path="confirmSeedPhrase" element={<ConfirmSeedPhrase />} />
      <Route path="congratulation" element={<Congratulation />} />
    </Routes>
  );
}

export default CreateWallet;
