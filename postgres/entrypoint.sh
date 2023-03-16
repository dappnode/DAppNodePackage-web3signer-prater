for file in /docker-entrypoint-initdb.d/*.sql
do
  echo "Executing $file"
  psql --host=localhost --port=5432 --dbname=${POSTGRES_DB} --username=${POSTGRES_USER} -f "$file"
done

exec "postgres"
