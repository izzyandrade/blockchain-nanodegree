import Web3 from 'web3';

//CONNECTING TO ETHEREUM MAIN NET WITH INFURA AND WEB3 LIBRARY
const mainnetUrl =
  'https://mainnet.infura.io/v3/d463e5ba89224a45ab3af3f32eaf0cb4';
const web3 = new Web3(mainnetUrl);

//GETTING BALANCE FOR AN ACCOUNT
const accountAddress = '0x0716a17FBAeE714f1E6aB0f9d59edbC5f09815C0';
var accountBalance;

const getAccountBalance = async () => {
  const balance = await web3.eth.getBalance(accountAddress);
  return balance;
};

accountBalance = await getAccountBalance();
console.log('Balance is: ', accountBalance);

//CONVERTING BALANCE FROM WEI TO ETHER
const convertedAccountBalance = web3.utils.fromWei(accountBalance, 'ether');
console.log('Balance converted to ether is: ', convertedAccountBalance);

web3.eth.getGasPrice().then((price) => console.log('Gas Price: ', price));

console.log('USING BLOCK 500: ');
const uncle = await web3.eth.getUncle(500, 0);
console.log('Block Uncle: ', uncle);
web3.eth
  .getBlockTransactionCount(uncle.parentHash)
  .then((count) => console.log('Block Transaction Count: ', count));
