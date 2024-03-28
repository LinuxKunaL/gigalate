import { ethers } from "ethers";
import { decryption } from "../encryption";
import Cookies from "js-cookie";

const verifyUser = (Navigate) => {
  const key = Cookies.get("gigalate.key");

  if (!key) {
   return Navigate("/lock");
  }

  const seedEncrypted = localStorage.getItem("gigalate.seedEncrypted");

  if (key) {
    const seedDecrypted = decryption(seedEncrypted, key);

    if (!seedDecrypted.success) {
      Cookies.remove("gigalate.key", { path: "/" });
      return Navigate("/lock");
    }

    const result = ethers.HDNodeWallet.fromPhrase(
      seedDecrypted.data,
      null,
      "m/44'/60'/0'/0/0"
    );

    if (!result.address) {
      Cookies.remove("gigalate.key", { path: "/" });
      return Navigate("/lock");
    }
  }
};

export { verifyUser };
