// async function main() {
//     const medLockFactory = await ethers.getContractFactory("Medlock");

//     console.log("Deploying contract ...... ");

//     const medlock = await medLockFactory.deploy();

//     await medlock.waitForDeployment();

//     console.log(`Medlock deployed to ${medlock.target}`);
//     console.log("Medlock deployed successfully");
// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });

const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("Deploying Medlock contract...");

  const medlock = await deploy("Medlock", {
    from: deployer,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log(`Medlock deployed at address: ${medlock.address}`);

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    log("Verifying contract on Etherscan...");
    try {
      await run("verify:verify", {
        address: medlock.address,
        constructorArguments: [],
      });
    } catch (error) {
      log("Verification failed:", error);
    }
  }

  log("----------------------------------------------------");
};

module.exports.tags = ["all", "medlock"];
