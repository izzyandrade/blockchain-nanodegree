const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonicMetamask =
  'pudding concert ignore hold travel property rifle salon announce pioneer predict dynamic';
const mnemonicLocal =
  'above verb heavy fetch where loop magic thunder tone off warm oak';

const rinkebyURL =
  'https://rinkeby.infura.io/v3/d463e5ba89224a45ab3af3f32eaf0cb4';
const goerliURL =
  'https://goerli.infura.io/v3/d463e5ba89224a45ab3af3f32eaf0cb4';

module.exports.networks = {
  development: {
    host: '127.0.0.1',
    port: 7545,
    network_id: '*', // Any network (default: none)
    mnemonic: mnemonicLocal,
  },
  rinkeby: {
    // must be a thunk, otherwise truffle commands may hang in CI
    provider: () =>
      new HDWalletProvider({
        providerOrUrl: rinkebyURL,
        mnemonic: {
          phrase: mnemonicMetamask,
        },
      }),
    network_id: '4',
  },
  goerli: {
    // must be a thunk, otherwise truffle commands may hang in CI
    provider: () =>
      new HDWalletProvider({
        providerOrUrl: goerliURL,
        mnemonic: {
          phrase: mnemonicMetamask,
        },
        addressIndex: 0,
      }),
    network_id: '5',
  },
};

module.exports.compilers = {
  solc: {
    version: '0.8.17', // Fetch exact version from solc-bin (default: truffle's version)
  },
};
