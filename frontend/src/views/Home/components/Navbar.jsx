import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import HamMenu from "../../../assets/images/HamMenu";
import SideMenu from "./popup/SideMenu";
import SelectAccount from "../../../components/Popups/SelectAccount";
import ConnectedSite from "./popup/ConnectedSite";
import useAccounts from "../../../hooks/useAccounts";

function Navbar() {
  const { getCurrentAccount } = useAccounts();
  const [userAccount, setUserAccount] = useState({});
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
  const [isOpenSelectAccount, setIsOpenSelectAccount] = useState(false);

  const reloadEffect = useSelector((state) => state.reloadUseEffect);

  const toggleSelectAccountPopUp = () => {
    document.getElementById("selectedUser").classList.toggle("!bg-onyx-800/20");

    document.getElementById("ArrowDown").classList.toggle("arrowUp");

    if (isOpenSelectAccount) {
      setIsOpenSelectAccount(false);
    } else {
      setIsOpenSelectAccount(true);
    }
  };

  useEffect(() => {
    const account = getCurrentAccount();
    setUserAccount(account);
  }, [reloadEffect]);

  return (
    <nav className="relative z-10 h-14 top-0 flex items-center backdrop-blur-xl backdrop-filter w-full bg-onyx-900/60 shadow-massive-2">
      <HamMenu
        onClick={() =>
          isOpenSideMenu ? setIsOpenSideMenu(false) : setIsOpenSideMenu(true)
        }
        className="absolute left-5"
      />
      <SideMenu isOpen={isOpenSideMenu} />
      <div
        onClick={toggleSelectAccountPopUp}
        id="selectedUser"
        className="hover:bg-onyx-800/20 select-none active:bg-onyx-800/30 m-auto cursor-pointer transition-all  rounded-lg flex p-1 items-center gap-1"
      >
        <img
          className="size-8 bg-indigo-500 rounded-full p-0.5"
          src={userAccount?.avatar}
          alt=""
        />
        <span className="text-sm text-white/90 w-12 line-clamp-1 leading-snug">
          {userAccount?.accountName}
        </span>
        <MdOutlineKeyboardArrowDown
          id="ArrowDown"
          className="text-white transition-all"
        />
      </div>
      <SelectAccount
        isOpen={isOpenSelectAccount}
        togglePopup={toggleSelectAccountPopUp}
      />
      <ConnectedSite id="ConnectedSitePopUp" />
    </nav>
  );
}

export default Navbar;
