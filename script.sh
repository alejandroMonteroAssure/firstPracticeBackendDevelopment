#!/bin/bash

CONTAINER_NAME=postgres_server
VOLUME_NAME=postgres_mem
POSTGRES_USER=postgres
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_DB=sbolify
POSTGRES_PORT=5432

if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Removing existing container $CONTAINER_NAME..."
    docker rm -f $CONTAINER_NAME
fi

if ! docker volume ls | grep -q $VOLUME_NAME; then
    echo "Creating Docker volume $VOLUME_NAME..."
    docker volume create $VOLUME_NAME
fi

echo "Starting PostgreSQL container..."
docker run -d \
    --name $CONTAINER_NAME \
    -e POSTGRES_USER=$POSTGRES_USER \
    -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
    -e POSTGRES_DB=$POSTGRES_DB \
    -v $VOLUME_NAME:/var/lib/postgresql/data \
    -p $POSTGRES_PORT:5432 \
    postgres:latest

echo "Waiting for PostgreSQL to be ready..."
until docker exec $CONTAINER_NAME pg_isready -U $POSTGRES_USER > /dev/null 2>&1; do
    sleep 1
done

echo "PostgreSQL is up and running!"
echo "Connect using: psql -h localhost -p $POSTGRES_PORT -U $POSTGRES_USER -d $POSTGRES_DB"
