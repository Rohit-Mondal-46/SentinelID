module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default)
      port: 8545,            // Match Ganache default port
      network_id: "*",       // Match any network id
    },
  },

  // Compiler version matches your Solidity code
  compilers: {
    solc: {
      version: "0.8.20",
    },
  },

  // Enable Mocha for testing (optional)
  mocha: {
    timeout: 100000
  },
};
