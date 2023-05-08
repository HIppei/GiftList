const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // Target
  const name = 'Traci McDermott';

  // Target position
  const index = niceList.findIndex((el) => el === name);

  const tree = new MerkleTree(niceList);
  const proof = tree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: name,
    proof: proof,
  });

  console.log({ gift });
}

main();
