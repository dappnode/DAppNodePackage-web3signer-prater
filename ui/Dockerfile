FROM ghcr.io/dappnode/keymanager-ui:0.1.0 as build

ENV REACT_APP_NETWORK=prater
ENV REACT_APP_WEB3SIGNER_API_URL=http://web3signer.web3signer-prater.dappnode:9000/

COPY entrypoint.sh /usr/bin/entrypoint.sh
ENTRYPOINT /usr/bin/entrypoint.sh
EXPOSE 80
