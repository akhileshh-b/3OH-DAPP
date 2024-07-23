require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    "polygon-zkevm-cardona": {
      provider: () => new HDWalletProvider(mnemonic, `https://etherscan.cardona.zkevm-rpc.com/`),
      network_id: 2442,
      chainId: 2442,
      gas: 3000000,
      gasPrice: 10000000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    }
  }
};