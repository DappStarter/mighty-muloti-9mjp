require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name repeat stick mistake inner end army giggle'; 
let testAccounts = [
"0x8b1a9774230b6b5746e2d7806f118304591832a27a806d18b912c38cedbc7232",
"0x7daa140b06fcfea5a97cf246714233c5f496ad9eb561aa171543e0ab3346aac2",
"0x18398eb7a850e457b1270471306ee1357cf4cf42996222b2801a8b90ca3f4ac3",
"0xbe67cdcd5231386c0e33f2846b5fe836e64f9040da17ecbf8cb1a80cfb2ce15c",
"0xc5ec19d90b18eedaa7398aed86a7dce57134ee2e2442e0aa6c267e93f2837155",
"0xf7c615addab0975f67b0e47ec354bcf39e7ef33e8ca00f062fe53d3c47775984",
"0xafbf9d3d81ade682a3d9e516329d5a8b011304e541b25d5814c6898a10d719bb",
"0xa3fec2de95f4e7566673aee2eaa3440188102cca84f9401c6d4d46ca69ede805",
"0xbb64b3fef2469ab388a5bf215621c1dabfc14985d297476596363afdf22e2943",
"0xfd9ef910cd9d515e67577aad74fb410bd80c91aa724212a1a010dcce2cbf4a90"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

