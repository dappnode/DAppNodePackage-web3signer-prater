ARG UPSTREAM_VERSION

##############
# WEB3SIGNER #
##############
FROM consensys/web3signer:$UPSTREAM_VERSION

ARG KEYFILES_DIR
ARG KEYFILES_DIR_TMP

# Create keyfiles dirs
RUN mkdir -p $KEYFILES_DIR $KEYFILES_DIR_TMP

# API Port
EXPOSE 9003

COPY entrypoint.sh /usr/bin/entrypoint.sh
ENTRYPOINT /bin/bash /usr/bin/entrypoint.sh