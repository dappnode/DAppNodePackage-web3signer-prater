#!/bin/bash

########
# VARS #
########
#KEYFILES_DIR_TMP="/opt/web3signer/keyfiles_tmp"    => Declare in compose
#KEYFILES_DIR="/opt/web3signer/keyfiles"            => Declare in compose


# Run web3signer binary
exec /opt/web3signer/bin/web3signer --key-store-path="$KEYFILES_DIR" --http-listen-port=9003 --http-listen-host=0.0.0.0 --http-host-allowlist=* eth2 --network=prater --slashing-protection-db-url=jdbc:postgresql://postgres:5432/web3signer --slashing-protection-db-username=postgres --slashing-protection-db-password=password