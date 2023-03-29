## Welcome to the Web3signer for Göerli/Prater:

- This package is the entrypoint for handling your validator keystores
- The Web3signer takes care of signing requests for your validator, so that your Consensus Layer (CL) client can be changed with just a few clicks.
- The Web3signer supports client diversity in this way; working with different clients such as: 
   - [Prysm-Prater](http://my.dappnode/#/installer/prysm-prater.dnp.dappnode.eth)
   - [Lighthouse-Prater](http://my.dappnode/#/installer/lighthouse-prater.dnp.dappnode.eth)
   - [Teku-Prater](http://my.dappnode/#/installer/teku-prater.dnp.dappnode.eth) 
   - [Nimbus-Prater](http://my.dappnode/#/installer/nimbus-prater.dnp.dappnode.eth)
- All Staking Management is now in the Comprehensive [StakersUI](http://my.dappnode/#/stakers/prater)
- The Flyway container takes care of importing the previous version's slashing protection database when an update is installed, so it's meant to run only once.
