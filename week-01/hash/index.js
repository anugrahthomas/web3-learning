const crypto = require("crypto");

// Basic sha256 hashing
// const input = "Anugrah";
// const hash = crypto.createHash("sha256").update(input).digest("hex");

// console.log(hash);

// adding zeros to maintain difficulty
// for (let i = 0; i < 10000; i++) {
//   console.log(i);
//   const hash = crypto.createHash("sha256").update(i.toString()).digest("hex");
//   if (hash.startsWith("00000")) {
//     console.log(hash);
//     break;
//   }
// }

const blockChain = [];

function Miner(transaction) {
  let hash,
    nonce = 0;
  const data = JSON.stringify(transaction);
  while (true) {
    const input = data + nonce.toString();
    hash = crypto.createHash("sha256").update(input).digest("hex");

    if (hash.startsWith("000")) {
      break;
    }

    nonce++;
  }

  return { nonce, hash };
}

const transaction = {
  transactionId: "fghwieo12mc208",
  sender: "Rohan",
  receiver: "Anugrah",
  amount: 20,
};

const { nonce, hash } = Miner(transaction); // task of miner

function addBlock(block) {
  blockChain.push(block);
  console.log("Block Added to BlockChain");
}
const block = {
  blockId: 1,
  timestamp: Date.now(),
  previousHash: null,
  hash,
  transaction,
  nonce,
};

addBlock(block);