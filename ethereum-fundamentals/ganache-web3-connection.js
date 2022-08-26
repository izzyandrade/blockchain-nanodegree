import Web3 from 'web3';

const ganacheUrl = 'HTTP://127.0.0.1:7545';
const web3 = new Web3(ganacheUrl);

web3.eth.getAccounts().then((accounts) => console.log(accounts));
