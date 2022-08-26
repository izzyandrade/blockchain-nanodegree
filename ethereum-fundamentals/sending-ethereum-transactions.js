import Web3 from 'web3';
import EthereumJS from '@ethereumjs/tx';
const web3 = new Web3('HTTP://127.0.0.1:7545');

const sendingAddress = '0xE826a8accc7747790db787D5060CC5F0B6022AF8';
const receivingAddress = '0x2e943B9022787f249A7a918A9Ce36F7c2304Ffcd';

const rawTransaction = {
  nonce: 7,
  to: receivingAddress,
  gasPrice: 20000000,
  gasLimit: 30000,
  value: '0x' + Web3.utils.toBN(Web3.utils.toWei('1', 'ether')).toString(16),
  data: '',
};

const privateKeySender =
  'fdd7f5afbc702fa205446546a59afa1e25479c0931eba51e4032823ac35ddde8';
const transaction = EthereumJS.Transaction.fromTxData(rawTransaction);
const signedTx = transaction.sign(Buffer.from(privateKeySender, 'hex'));

var serializedTransaction = signedTx.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);
