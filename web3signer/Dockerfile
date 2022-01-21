FROM openjdk:11 as builder
# EXTRA INT TEST: Joakim branch
WORKDIR /usr/src/app
RUN apt update && apt install git -y && git clone https://github.com/joaquim-verges/web3signer.git 
WORKDIR /usr/src/app/web3signer 
RUN git fetch origin && git checkout -b km_6 origin/km_6 && ./gradlew clean assemble && tar -xzf ./build/distributions/web3signer-develop.tar.gz

ARG UPSTREAM_VERSION

##############
# WEB3SIGNER #
##############
FROM consensys/web3signer:$UPSTREAM_VERSION

COPY --from=builder /usr/src/app/web3signer/web3signer-develop/bin/web3signer /opt/web3signer/bin/web3signer

ARG KEYFILES_DIR
ARG KEYFILES_DIR_TMP

# Create keyfiles dirs
RUN mkdir -p $KEYFILES_DIR $KEYFILES_DIR_TMP

COPY entrypoint.sh /usr/bin/entrypoint.sh
ENTRYPOINT /bin/bash /usr/bin/entrypoint.sh