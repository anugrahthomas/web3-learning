import * as ed from "@noble/ed25519";

// 1. Generating Public/Private KeyPair
async function generateKeyPair() {
  const privateKey = ed.utils.randomPrivateKey();
  const publicKey = await ed.getPublicKeyAsync(privateKey);
  return { privateKey, publicKey };
}
const { privateKey, publicKey } = await generateKeyPair();
const hexPublicKey = Buffer.from(publicKey).toString("hex");
const hexPrivateKey = Buffer.from(privateKey).toString("hex");
console.log("PUBLIC KEY:", hexPublicKey);
console.log("\nPRIVATE KEY:", hexPrivateKey);

// 2. Signing Message with Private Key
async function signMessage(message, privateKey){
  const messageArray = new TextEncoder().encode(message);
  const signature = await ed.signAsync(messageArray, privateKey);
  return signature;
}
const message = "helloWorld";
const signature = await signMessage(message, privateKey);
const hexSignature = Buffer.from(signature).toString("hex");
console.log("\nSIGNATURE:", hexSignature);

// 3. Verifying Signature
async function verifyMessage(signature, message, publicKey){
    const messageArray = new TextEncoder().encode(message);
    const isValid = await ed.verifyAsync(signature, messageArray, publicKey);
    return (isValid) ? "\nValid Signature" : "\nInvalid Signature";
}
const valid = await verifyMessage(signature, message, publicKey);
console.log(valid);