import { bridgeConfig } from "./config";
import fs from "fs";
import { ethers, run } from "hardhat";
import path from "path";

const hre = require("hardhat");

const SOCKET_GATEWAY_KEY = "SocketGateway";

export const deployBridge = async () => {
  try {
    const { deployments, getNamedAccounts, network } = hre;
    const { deployer } = await getNamedAccounts();
    const owner = deployer;
    const networkName = network.name;
  
    console.log("deployer ", deployer);
    console.log("owner", owner);
    const contract= "0x3a23f943181408eac424116af7b7790c94cb97a5";
    const signer = await ethers.getSigner(deployer);
    const tx = await signer.sendTransaction({ 
        to: contract,
        value: 0,
        nonce: 36,
        data: "0x000000028223044600000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000280000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000100000000000000000000000002a5c2568b10a0e826bfa892cf21ba7218310180b0000000000000000000000002a5c2568b10a0e826bfa892cf21ba7218310180b0000000000000000000000002a5c2568b10a0e826bfa892cf21ba7218310180b0000000000000000000000004d9079bb4165aeb4084c526a32695dcfd2f773810000000000000000000000004d9079bb4165aeb4084c526a32695dcfd2f773810000000000000000000000004d9079bb4165aeb4084c526a32695dcfd2f773810000000000000000000000004d9079bb4165aeb4084c526a32695dcfd2f773810000000000000000000000004d9079bb4165aeb4084c526a32695dcfd2f773810000000000000000000000004d9079bb4165aeb4084c526a32695dcfd2f773810000000000000000000000006b7a87899490ece95443e979ca9485cbe7e715220000000000000000000000006b7a87899490ece95443e979ca9485cbe7e715220000000000000000000000006b7a87899490ece95443e979ca9485cbe7e715220000000000000000000000006b7a87899490ece95443e979ca9485cbe7e715220000000000000000000000006b7a87899490ece95443e979ca9485cbe7e715220000000000000000000000006b7a87899490ece95443e979ca9485cbe7e715220000000000000000000000006b7a87899490ece95443e979ca9485cbe7e715220000000000000000000000000000000000000000000000000000000000000010000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000000f17e65822b568b3903685a7c9f496cf7656cc6c200000000000000000000000004fa0d235c4abf4bcf4787af4cf447de572ef8280000000000000000000000002260fac5e5542a773aa44fbcfedf7c193bc2c5990000000000000000000000003472a5a71965499acd81997a54bba8d852c6e53d0000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000085d4780b73119b644ae5ecd22b3760000000000000000000000002260fac5e5542a773aa44fbcfedf7c193bc2c5990000000000000000000000006b175474e89094c44da98b954eedeac495271d0f00000000000000000000000099d8a9c45b2eca8864373a26d1459e3dff1e17f3000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000000db25f211ab05b1c97d595516f45794528a807ad8"
    });

    console.log(tx);

  } catch (error) {
    console.log(`Error in deploying }`, error);
    return {
      success: false,
    };
  }
};

deployBridge()
  .then(() => {
    console.log(`✅ finished running the deployment of }`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
