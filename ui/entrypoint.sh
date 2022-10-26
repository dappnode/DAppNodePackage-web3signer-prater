#!/bin/sh

export REACT_APP_CONSENSUS_CLIENT=$_DAPPNODE_GLOBAL_CONSENSUS_CLIENT_PRATER
export REACT_APP_EXECUTION_CLIENT=$_DAPPNODE_GLOBAL_EXECUTION_CLIENT_PRATER

npx react-inject-env set

npm install http-server@14.1.1

npx http-server /app/build/ -p 80

exec ./docker-entrypoint.sh
