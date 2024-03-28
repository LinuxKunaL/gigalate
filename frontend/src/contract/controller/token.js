import { contractInstance, web3 } from "../util/Contract";

const getBalance = async (_address) => {
  try {
    if (_address) {
      const balance = await contractInstance.methods
        .getBalance(_address)
        .call();

      const eth = web3.utils.fromWei(balance, "ether");

      return {
        balance: eth,
        success: true,
      };
    } else {
      throw new Error("Address is required to fetch balance.");
    }
  } catch (error) {
    if (error.message === "Address is required to fetch balance.") {
      return {
        success: true,
      };
    }
    return {
      success: false,
      message: "Failed to fetch balance: " + error.message,
    };
  }
};

const getGas = async (_receiver, _amount, _sender) => {
  const amountInWei = web3.utils.toWei(_amount, "ether");

  const txParams = {
    from: _sender,
    to: _receiver,
    value: amountInWei,
    gasLimit: 30000,
  };

  const gasEstimate = await web3.eth.estimateGas(txParams);

  return web3.utils.fromWei(Number(gasEstimate),"gwei");
};

const transfer = async (_receiver, _amount, _sender) => {
  const amountInWei = web3.utils.toWei(_amount, "ether");
  try {
    const response = await contractInstance.methods
      .sendETH(_receiver, amountInWei)
      .send({
        from: _sender,
        value: amountInWei,
        gas: 48000,
      });

    console.log(response);
  } catch (error) {
    console.error("Error transferring ETH:", error);
  }
};

export { getBalance, transfer, getGas };
