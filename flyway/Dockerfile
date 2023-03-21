ARG UPSTREAM_VERSION

##############
# MIGRATIONS #
##############
FROM debian:bullseye-slim as postgres-migrations
ARG UPSTREAM_VERSION
WORKDIR /usr/src/app

RUN apt update && apt install -y wget
# Get migrations from consensys web3signer repo
# path is /usr/src/app/web3signer-21.10.0/slashing-protection/src/main/resources/migrations/postgresql
RUN wget -q https://github.com/ConsenSys/web3signer/archive/refs/tags/${UPSTREAM_VERSION}.tar.gz && \
    tar -xvf ${UPSTREAM_VERSION}.tar.gz

##########
# FLYWAY #
##########
FROM flyway/flyway:9.16.1-alpine
ARG UPSTREAM_VERSION
# Create the schema_version table if it doesn't exist
ENV FLYWAY_BASELINE_ON_MIGRATE=true

COPY --from=postgres-migrations /usr/src/app/web3signer-${UPSTREAM_VERSION}/slashing-protection/src/main/resources/migrations/postgresql/* /flyway/sql/
CMD ["-url=jdbc:postgresql://postgres.web3signer-prater.dappnode:5432/web3signer", "-user=postgres", "-password=password", "-connectRetries=60", "migrate"]