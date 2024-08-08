const ADDRESSES = require('../helper/coreAssets.json')
const { nullAddress, } = require('../helper/unwrapLPs')
const { sumTokensExport, } = require('../helper/sumTokens')

module.exports = {
  methodology: 'The TVL of each deployment is the reserve belonging to the deployment. The TVL within a given blockchain is the sum of the TVLs of all known deployments within that blockchain. The total TVL is the sum of the TVLs on all blockchains.',
  ethereumclassic: {
    tvl: sumTokensExport({
      owner: '',
      tokens: [ADDRESSES.ethereumclassic.WETC],
    })
  },
}

