const developmentChains = ["hardhat", "localhost"];

const networkConfig = {
  // Sepolia Testnet example
  11155111: {
    name: "sepolia",
    ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306", // example Chainlink ETH/USD price feed address on Sepolia
  },
  31337: {
    name: "localhost",
    // no price feed needed for local
  },
};

const DECIMALS = 8; // for mock price feed
const INITIAL_ANSWER = 2000 * 1e8; // 2000 * 10^8, mock ETH price in USD

module.exports = {
  developmentChains,
  networkConfig,
  DECIMALS,
  INITIAL_ANSWER,
};
