import SHA256 from 'crypto-js/sha256.js';

class Block {
  constructor(data) {
    this.hash = '';
    this.height = 0;
    this.body = data;
    this.time = 0;
    this.previousBlockHash = '';
  }

  generateHash() {
    let self = this;
    return new Promise((resolve, reject) => {
      self.hash = SHA256(JSON.stringify(self)).toString();
      resolve(self);
    });
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
    this.addBlock(new Block('Genesis Block'));
  }

  addBlock(newBlock) {
    newBlock.height = this.chain.length;
    newBlock.time = new Date().getTime().toString().slice(0, -3);
    if (this.chain.length > 0) {
      newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash;
    }
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
}

const blockchain = new Blockchain();
const block = new Block('test');
const block2 = new Block('new test');
blockchain.addBlock(block);
blockchain.addBlock(block2);

console.log(blockchain);
