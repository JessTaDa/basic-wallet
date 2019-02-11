// importing the ethers.js library
const ethers = require('ethers');
// importing hyperapp
import { h, app } from "hyperapp";

// constructor state of the wallet privateKey and address is set to null.
const state = {
  wallet: {
    privateKey: null,
    address: null
  }
}

const actions = {
  wallet: {
    // generateWallet action calls the ethers.js library createRandom() method and returns a newly created privateKey and address
    generateWallet: () => state => {
      const wallet = ethers.Wallet.createRandom();
      return {
        privateKey: wallet.privateKey,
        address: wallet.address
      };
    },
  },
};

// displays new wallet address and privateKey that have been generated
const view = (state, actions) => (
  <div>
    <h1>{state.wallet.address}</h1>
    <h1>{state.wallet.privateKey}</h1>
    <button onclick={() => actions.wallet.generateWallet()}>
      Generate Wallet
    </button>
  </div>
);

app(state, actions, view, document.body)
