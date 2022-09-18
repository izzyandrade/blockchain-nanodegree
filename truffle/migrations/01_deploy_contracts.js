var IzzyCoin = artifacts.require('IzzyCoin');

module.exports = function (deployer) {
  deployer.deploy(IzzyCoin, 1000);
};
