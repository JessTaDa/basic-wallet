const ethers = require('ethers');
import { h, app } from "hyperapp";

const state = {
  wallet: {
    privateKey: null,
    address: null
  }
}

const actions = {
  wallet: {
    generateWallet: () => state => {
      const wallet = ethers.Wallet.createRandom();
      return {
        privateKey: wallet.privateKey,
        address: wallet.address
      };
    },
  },
};

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
