require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stove dash rural soda install clip success shadow'; 
let testAccounts = [
"0xa5c2c26fa14a23003401a89ddfedb0f2405c1240eb73f544ec699373f0ede721",
"0xba908adc8607776599894ac6df761712e1ee89cac0d9a5e57f058025d5b45410",
"0x9949de817e94767d1ac26a4370cbea2e694c3777523af2a0a44049252b2591e2",
"0x6316baae59e41d3ba1fa3b2bb78645424f7bdda0d88a83cdd51f0506133b78f9",
"0xb4275bbc23a18f968e69f6fd93e456f2b159a58cdad7f47f1c3b243556b937cf",
"0x0bc0dae27f6b69098027dea6ab686e0528a7d456cb78aba3d30c1c19e319daff",
"0xd719f38d616df9766b57dcd23413a2ac106b7e5c85659bdf88d862d9203aa638",
"0x51c0d8deb055d63b479c767f61e363d836e4f3b6d32026fa6cbed1e04bfac26c",
"0x62ced616d181060213d0744cee4226c298f20b8349abe98abf03fca3b3dcb8c4",
"0xc73e97ce3a7f3176bde04f6e8d8dd3b39e1bbfb3634914cf207c045cfcb877be"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


