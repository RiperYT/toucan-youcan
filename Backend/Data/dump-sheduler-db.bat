.\bin\pg_dump.exe -U postgres --dbname="Scheduler" -p 5602 --file="sheduler-dump.sql" --clean --if-exists --create --schema-only