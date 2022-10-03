<!-- :female_detective: Looking for a new champion -->

# DAppNode Package _Web3signer-Prater_

<!--DAppNode package logo (could be added with an hyperlink to a youtube video): -->

![](node-avatar.png)

<!--Brief introduction about the source project (official project definition is an option): -->

A validator client contributes to the consensus of the Ethereum Blockchain by signing proposals and attestations of blocks, using a BLS private key which must be available to this client at all times.

The BLS remote signer API is designed to be consumed by validator clients, looking for a more secure avenue to store their BLS12-381 private key(s); enabling them to run in more permissive and scalable environments.

More information about the EIP can be found at [the official website](https://eips.ethereum.org/EIPS/eip-3030)

### Why _Web3signer_ ?

<!--What can you do with this package?: -->

Client diversity is a key benefit of DAppNode, with our implementation of ConsenSys's remote Web3Signer you will be able to use different clients and don't need to put all your trust in just one validator client. The remote signer can work as a load balancer, keeping your validators always validating.

### Requirements

Rquirements to run The DAppNode Web3Signer-Prater

<!--Requirements to run the Dappnode package in a list: -->

- **Validator**: Set up your validator at https://prater.launchpad.ethereum.org/
- **Execution Layer Client**: You need to have installed and synced an EL client such as Göerli Geth, Göerli Nethermind, Göerli Erigon, or Göerli Besu
- **Consensus Layer Client**: You need to have installed and synced a CL client such as Prysm Prater, Lighthouse Prater, Lodestar Prater, Nimbus Prater, or Teku Prater

### Manteinance

<!--Table with champion/s mantainers, versions and update status -->
<!--UPDATED: :x: OR :heavy_check_mark: -->

|      Updated       |   Champion/s   |
| :----------------: | :------------: |
| :heavy_check_mark: | @pablomendez95 |

### Development

Build the development binary of the web3signer. Also uses the latest postgresql scripts defined at https://github.com/ConsenSys/web3signer/tree/master/slashing-protection/src/main/resources/migrations/postgresql

```
npx @dappnode/dappnodesdk build --compose_file_name=docker-compose.dev.yml
```
