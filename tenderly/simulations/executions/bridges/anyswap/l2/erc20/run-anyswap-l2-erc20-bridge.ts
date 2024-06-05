import { ChainCodeToChainId, ChainCodes } from "../../../../../../../static-data/ll-static-data";
import { createFork } from "../../../../../../helper/create-fork";
import { deleteForkById } from "../../../../../../helper/delete-fork-id";
import { simulateBridgeERC20OnAnySwapL2 } from "../../../../../bridges/anyswap/l2/erc20/simulate-bridge-erc20-anyswap-l2";

export const executeAnyswapL2ERC20Bridge = async (sourceChain: ChainCodes, destinationChain: ChainCodes, forkBlockNumber: number, sender: string) => {
   const owner = '0x2FA81527389929Ae9FD0f9ACa9e16Cba37D3EeA1';
   const fork = await createFork(ChainCodeToChainId.get(sourceChain) as number, forkBlockNumber);
   const forkProvider = fork.forkProvider;
   const forkId = fork.forkId;
   
   const simulationResponse = await simulateBridgeERC20OnAnySwapL2(forkProvider, fork.forkAtBlockNumber, sourceChain, destinationChain, sender, owner);
   deleteForkById(forkId);

   return simulationResponse;
};