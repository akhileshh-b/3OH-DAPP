# 3OH To-Do DApp

### Preview

![image](https://github.com/user-attachments/assets/ab277121-b206-4569-bcb6-054bcd22f6ca)

![image](https://github.com/user-attachments/assets/307e68f5-df96-4a4f-851a-2d7e7ba22923)

A decentralized To-Do List application built on the Ethereum blockchain using Solidity, deployed on the Sepolia Testnet. It utilizes Truffle, Web3.js, and HDWalletProvider for contract compilation, migration, and interaction.

## Features
- Add, complete, and delete tasks
- Fully decentralized and blockchain-based

## Technologies Used
- Solidity, Truffle, Web3.js, HDWalletProvider
- Ethereum (Sepolia Testnet), MetaMask
- Ganache (for local testing)

## Installation & Deployment
1. Clone the repository:
   ```sh
   git clone https://github.com/akhileshh-b/3OH-DAPP.git && cd todo-dapp
   ```
2. Add your 12-word MNEMONIC/secret key from MetaMask in the `.env` file.
3. Install dependencies:
   ```sh
   npm install
   ```
4. Compile & deploy the contract:
   ```sh
   truffle compile && truffle migrate --network sepolia
   ```
5. Build & start the application:
   ```sh
   npm run build
   npm start
   ```
6. Run tests:
   ```sh
   truffle test
   ```

## Usage
- Connect MetaMask to Sepolia Testnet.
- Interact using Web3.js or a UI.
  
