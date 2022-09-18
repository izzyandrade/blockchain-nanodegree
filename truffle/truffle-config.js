const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonicRinkeby =
  'pudding concert ignore hold travel property rifle salon announce pioneer predict dynamic';
const mnemonicLocal =
  'above verb heavy fetch where loop magic thunder tone off warm oak';

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
        providerOrUrl:
          'https://rinkeby.infura.io/v3/d463e5ba89224a45ab3af3f32eaf0cb4',
        mnemonic: {
          phrase: mnemonicPhrase,
        },
      }),
    network_id: '4',
  },
};

module.exports.compilers = {
  solc: {
    version: '0.8.16', // Fetch exact version from solc-bin (default: truffle's version)
  },
};
