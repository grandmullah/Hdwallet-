import * as Random from 'expo-random';


export default async function generateMnemonicf() {

    let bytes = await Random.getRandomBytesAsync(16)
    let Entropy  = bytesToHex(bytes)
    return Entropy


}

function bytesToHex(bytes) {
    for (var hex = [], i = 0; i < bytes.length; i++) {
      hex.push((bytes[i] >>> 4).toString(16));
      hex.push((bytes[i] & 0xF).toString(16));
    }
    return hex.join("");
}

