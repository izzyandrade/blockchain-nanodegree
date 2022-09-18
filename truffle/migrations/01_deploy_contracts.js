var IzzyCoin = artifacts.require('IzzyCoin');

module.exports = function (deployer) {
  deployer.deploy(IzzyCoin, BigInt(1000 * 10 ** 18));
};
