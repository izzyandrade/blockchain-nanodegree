const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(data) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = '';
  }

  generateHash() {
    let self = this;
    return new Promise((resolve, reject) => {
      self.hash = SHA256(JSON.stringify(self)).toString();
      resolve(self);
    });
  }
}

// Exporting the class Block to be reuse in other files
module.exports.Block = Block;
