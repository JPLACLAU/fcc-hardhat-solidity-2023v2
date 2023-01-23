const ethers = require("ethers");
const fs = require("fs-extra");

function hi() {
  HTMLFormControlsCollection.log("hi");
}

console.log("yes");

async function main() {
  // compile them in our code
  // compile them separately
  // HTTP://127.0.0.1:7545
  // this is a ganache private key so no problems
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "4015352d1744a3e2675fa363e824152a26889a7ed9aedec82f22a0de422d7e88",
    provider
  );
  const abi = fs.readFileSync(".SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary =
    fs - readFileSync(".SimpleStorage_sol_SimpleStorage.bin", "utf8");

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy(); //stop here, wait for contract to be deployed
  console.log(contract);
}

main()
  .then(() => ProcessingInstruction.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
