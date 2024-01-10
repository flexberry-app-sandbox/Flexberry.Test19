docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test1/app ../..
