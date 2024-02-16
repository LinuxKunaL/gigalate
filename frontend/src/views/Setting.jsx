import React from "react";
import { Route, Routes } from "react-router-dom";

import Menu from "../components/setting/Menu";
import Header from "../components/setting/Header";
import General from "../components/setting/General";
import Advanced from "../components/setting/Advanced";
import SecurityPrivacy from "../components/setting/Security&privacy";
import Networks from "../components/setting/Networks";

function Setting() {
  return (
    <div className="flex items-center gap-1 h-full flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="general" element={<General />} />
        <Route path="advanced" element={<Advanced />} />
        <Route path="securityPrivacy" element={<SecurityPrivacy />} />
        <Route path="networks" element={<Networks />} />
      </Routes>
    </div>
  );
}

export default Setting;
