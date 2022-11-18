// const FORTMATIC_KEY = process.env.NEXT_PUBLIC_FORTMATIC_KEY
const FORTMATIC_KEY = "pk_live_87BA851CCE4271D1"

const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL

const config = {
  title: 'SHIB CLUB',
  description: 'A showcase dapp which is built for you to create your own',
  contractAddress: '0x5b80bC095eD992e68E10384F1e1AB68CFB37dC3A',
  maxMintAmount: 30,
  maxWalletFreeSupply: 10,
  thresoldSupply: 9000,
  price: 0.002
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 4, // Rinkeby
  darkMode: true,
  walletSelect: {
    wallets: [
      { walletName: 'metamask', preferred: true },
      { walletName: 'coinbase', preferred: true },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl: RPC_URL,
        appName: 'ShibClub Dapp'
      },
      {
        walletName: 'fortmatic',
        apiKey: FORTMATIC_KEY,
        preferred: true
      },
      { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },
      { walletName: 'gnosis', preferred: true },
      { walletName: 'authereum' },

      {
        walletName: 'ledger',
        rpcUrl: RPC_URL
      },
      {
        walletName: 'lattice',
        rpcUrl: RPC_URL,
        appName: 'ShibClub Dapp'
      },
      {
        walletName: 'keepkey',
        rpcUrl: RPC_URL
      }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }
