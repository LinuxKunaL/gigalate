import { toastError } from "../app/Toasts";
import { getBalance } from "../contract/controller/token";
import { setAccountState } from "../app/redux/Slice";

import store from "../app/redux/Store";

const getCurrentAccount = () => {
  const userAccountsString = localStorage.getItem("gigalate.userAccounts");
  const userAccounts = JSON.parse(userAccountsString);

  if (!userAccounts) return null;

  const currentUserAccount = userAccounts?.find(
    (account) => account.isMain === true
  );

  return currentUserAccount;
};

const setAccountStates = async () => {
  const currentUserAccount = getCurrentAccount();

  const response = await getBalance(currentUserAccount?.address);

  if (response?.success) {
    store.dispatch(
      setAccountState({
        address: currentUserAccount?.address,
        balance: response?.balance,
      })
    );

    return null;
  }

  if (!response?.success) {
    toastError(response?.message);
    return null;
  }
};

export { setAccountStates };
