// ASCII encoding & decoding functions
function bytesToAscii(byteCode) {
  return new TextDecoder().decode(byteCode);
}
const bytes = new Uint8Array([65, 110, 117, 103, 114, 97, 104]);
const string = bytesToAscii(bytes);
// console.log(string);

function asciiToBytes(asciiString) {
  return new Uint8Array(new TextEncoder().encode(asciiString));
}
const asciiString = "Anugrah";
const asciiBytes = asciiToBytes(asciiString);
// console.log(asciiBytes);

// HEX encoding & decoding functions
function bytesToHex(byteCode){
    return [...byteCode].map(e => e.toString(16).padStart(2, '0')).join('');
}
const hexBytes = new Uint8Array([65, 110, 117, 103, 114, 97, 104]);
// console.log(bytesToHex(hexBytes));

function hexToBytes(hexString){
    const byte = [];
    for(let i=0; i<hexString.length; i+=2){
        byte.push(parseInt(hexString.slice(i, i+2), 16));
    }
    return new Uint8Array(byte);
}
const hexString = "416e7567726168";
// console.log(hexToBytes(hexString));

// Binary encoding & decoding functions
function bytesToBinary(byteCode) {
    return [...byteCode].map(e => e.toString(2).padStart(8, '0')).join("")
}
const binaryBytes = new Uint8Array([65, 110, 117, 103, 114, 97, 104]);
// console.log(bytesToBinary(binaryBytes));

function binaryToBytes(binaryString) {
    const byte = [];
    for(let i=0; i<binaryString.length; i+=8){
        byte.push(parseInt(binaryString.slice(i, i+8), 2));
    }
    return new Uint8Array(byte);
}
const byteString = "01000001011011100111010101100111011100100110000101101000";
// console.log(binaryToBytes(byteString));

// base64 encoding & decoding functions
const base64 = Buffer.from("Anugrah").toString("base64");
// console.log(base64);

const base64Bytes = Buffer.from(bytes).toString("base64");
// console.log(base64Bytes);

const base64Decoded = Buffer.from(base64, "base64").toString("utf-8");
// console.log(base64Decoded);