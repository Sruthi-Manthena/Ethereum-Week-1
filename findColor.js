const { sha256 } = require("ethereum-cryptography/sha256");            // input a sha256 hash
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils"); 

// the possible colors that the hash could represent
// hashes will be generated from the colors provided in the array 

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    return COLORS.find(x => toHex(sha256(utf8ToBytes(x))) === toHex(hash));   
}

//to take the hash of a color 
// 1. use utf8TobBytes to translate the string to bytes.
// 2. use sha256 to hash it 

// to compare two hashes 
// 1. use toHex to convert each hash from a unit*Array to a string of hexadecimal character 
//const a = "apple";
//const b = "banana";

//const aBytes = utf8ToBytes(a);
//const bBytes = utf8ToBytes(b);

//const aHash = sha256(aBytes);
//const bHash = sha256(bBytes);

//console.log(toHex(aHash) === toHex(aHash)); // true
//console.log(toHex(aHash) === toHex(bHash)); // false
module.exports = findColor;
