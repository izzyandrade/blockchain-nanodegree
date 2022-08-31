import Web3 from 'web3';
import EthereumJS from '@ethereumjs/tx';
const web3 = new Web3('HTTP://127.0.0.1:7545');

const sendingAddress = '0xE524046da6351cA495Dbfabe84a74Ed88795cF64';
const receivingAddress = '0xF64d838f78c6d7671194f58eB1DE7AeF0B25E6c2';
const privateKeySender =
  '606438de17a8d7250c9bc34cb7324c4cf8f9af83dcee3adc52d446412f6488b3';

const createRawTransaction = async (
  sendingAddress,
  receivingAddress,
  etherValue,
  data = ''
) => {
  const transactionCount = await web3.eth.getTransactionCount(sendingAddress);
  return {
    nonce: transactionCount,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value:
      '0x' +
      web3.utils.toBN(Web3.utils.toWei(etherValue, 'ether')).toString(16),
    data,
  };
};

const rawTransaction = await createRawTransaction(
  sendingAddress,
  receivingAddress,
  '1'
);
const transaction = EthereumJS.Transaction.fromTxData(rawTransaction);
const signedTx = transaction.sign(Buffer.from(privateKeySender, 'hex'));

var serializedTransaction = signedTx.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);
