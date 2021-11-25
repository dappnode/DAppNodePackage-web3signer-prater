ARG UPSTREAM_VERSION=21.10.0
ARG KEYFILES_DIR=/opt/web3signer/keyfiles
ARG KEYFILES_DIR_TMP=opt/web3signer/keyfiles_tmp

##############
# WEB3SIGNER #
##############
FROM consensys/web3signer:$UPSTREAM_VERSION

# Create keyfiles dirs
RUN mkdir -p $KEYFILES_DIR $KEYFILES_DIR_TMP

COPY entrypoint.sh /usr/bin/entrypoint.sh
ENTRYPOINT /bin/bash /usr/bin/entrypoint.sh
