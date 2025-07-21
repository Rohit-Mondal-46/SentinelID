const SentinelSBT = artifacts.require("SentinelSBT");

module.exports = function (deployer) {
  deployer.deploy(SentinelSBT);
};