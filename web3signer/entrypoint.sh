#!/bin/bash

export KEYFILES_DIR="/data/keyfiles"
export NETWORK="prater"
export WEB3SIGNER_API="http://web3signer.web3signer-${NETWORK}.dappnode:9000"

# Assign proper value to _DAPPNODE_GLOBAL_CONSENSUS_CLIENT_PRATER. The UI uses the web3signer domain in the Header "Host"
case "$_DAPPNODE_GLOBAL_CONSENSUS_CLIENT_PRATER" in
"prysm-prater.dnp.dappnode.eth")
  ETH2_CLIENT_DNS="validator.prysm-prater.dappnode"
  export BEACON_NODE_API="http://beacon-chain.prysm-prater.dappnode:3500"
  export CLIENT_API="http://validator.prysm-prater.dappnode:3500"
  export TOKEN_FILE="/security/prysm/auth-token"
  export CLIENTS_TO_REMOVE=(teku lighthouse lodestar nimbus)
  ;;
"teku-prater.dnp.dappnode.eth")
  ETH2_CLIENT_DNS="validator.teku-prater.dappnode"
  export BEACON_NODE_API="http://beacon-chain.teku-prater.dappnode:3500"
  export CLIENT_API="https://validator.teku-prater.dappnode:3500"
  export TOKEN_FILE="/security/teku/validator-api-bearer"
  export CLIENTS_TO_REMOVE=(prysm lighthouse lodestar nimbus)
  ;;
"lighthouse-prater.dnp.dappnode.eth")
  ETH2_CLIENT_DNS="validator.lighthouse-prater.dappnode"
  export BEACON_NODE_API="http://beacon-chain.lighthouse-prater.dappnode:3500"
  export CLIENT_API="http://validator.lighthouse-prater.dappnode:3500"
  export TOKEN_FILE="/security/lighthouse/api-token.txt"
  export CLIENTS_TO_REMOVE=(teku prysm lodestar nimbus)
  ;;
"nimbus-prater.dnp.dappnode.eth")
  ETH2_CLIENT_DNS="beacon-validator.nimbus-prater.dappnode"
  export BEACON_NODE_API="http://beacon-validator.nimbus-prater.dappnode:4500"
  export CLIENT_API="http://beacon-validator.nimbus-prater.dappnode:3500"
  export TOKEN_FILE="/security/nimbus/auth-token"
  export CLIENTS_TO_REMOVE=(teku lighthouse lodestar prysm)
  ;;
"lodestar-prater.dnp.dappnode.eth")
  ETH2_CLIENT_DNS="validator.lodestar-prater.dappnode"
  export BEACON_NODE_API="http://beacon-chain.lodestar-prater.dappnode:3500"
  export CLIENT_API="http://validator.lodestar-prater.dappnode:3500"
  export TOKEN_FILE="/security/lodestar/api-token.txt"
  export CLIENTS_TO_REMOVE=(teku lighthouse prsym nimbus)
  ;;
*)
  echo "_DAPPNODE_GLOBAL_CONSENSUS_CLIENT_PRATER env is not set properly"
  exit 1
  ;;
esac

# IMPORTANT! The dir defined for --key-store-path must exist and have specific permissions. Should not be created with a docker volume
mkdir -p "$KEYFILES_DIR"

if grep -Fq "/opt/web3signer/keyfiles" ${KEYFILES_DIR}/*.yaml ;then
  sed -i "s|/opt/web3signer/keyfiles|$KEYFILES_DIR|g" ${KEYFILES_DIR}/*.yaml
fi

# Run web3signer binary
# - Run key manager (it may change in the future): --key-manager-api-enabled=true
exec /opt/web3signer/bin/web3signer \
  --key-store-path="$KEYFILES_DIR" \
  --http-listen-port=9000 \
  --http-listen-host=0.0.0.0 \
  --http-host-allowlist="web3signer.web3signer-prater.dappnode,brain.web3signer-prater.dappnode,$ETH2_CLIENT_DNS" \
  --http-cors-origins=* \
  --metrics-enabled=true \
  --metrics-host 0.0.0.0 \
  --metrics-port 9091 \
  --metrics-host-allowlist="*" \
  --idle-connection-timeout-seconds=900 \
  eth2 \
  --network=prater \
  --slashing-protection-db-url=jdbc:postgresql://postgres.web3signer-prater.dappnode:5432/web3signer \
  --slashing-protection-db-username=postgres \
  --slashing-protection-db-password=password \
  --slashing-protection-pruning-enabled=true \
  --slashing-protection-pruning-epochs-to-keep=500 \
  --key-manager-api-enabled=true \
  ${EXTRA_OPTS}
