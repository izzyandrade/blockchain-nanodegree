var SHA256 = require('crypto-js/sha256');

const generateHash = (data) => {
  return SHA256(JSON.stringify(data)).toString();
};

const data1 = 'Blockchain Rock!';
const dataObject = {
  id: 1,
  body: 'With Object Works too',
  time: new Date().getTime().toString().slice(0, -3),
};

console.log(`SHA256 Hash 1: ${generateHash(data1)}`);
console.log('************************************');
console.log(`SHA256 Hash 2: ${generateHash(dataObject)}`);
