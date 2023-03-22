#!/bin/bash

# Get postgresql database version and trim whitespaces
DATABASE_VERSION=$(PGPASSWORD=password psql --tuples-only -U postgres -h postgres.web3signer-prater.dappnode -p 5432 -d web3signer -c "SELECT version FROM database_version WHERE id=1;" | awk '{print $1}' | tr -d '[:space:]')

# Get the latest migration file version
LATEST_MIGRATION_VERSION=$(ls -1 /flyway/sql/ | tail -n 1 | cut -d'_' -f1 | cut -d'V' -f2 | sed 's/^0*//')

if [ "$DATABASE_VERSION" -ge "$LATEST_MIGRATION_VERSION" ]; then
  echo "Database version is greater or equal to the latest migration file version. Exiting..."
  exit 0
else
  echo "Database version is less than the latest migration file version. Migrating..."
  echo "Database version: $DATABASE_VERSION"
  echo "Latest migration file version: $LATEST_MIGRATION_VERSION"
  flyway -baselineOnMigrate="true" -baselineVersion="${DATABASE_VERSION}" -url=jdbc:postgresql://postgres.web3signer-prater.dappnode:5432/web3signer -user=postgres -password=password -connectRetries=60 migrate
  echo "Migration completed"
  exit 0
fi

