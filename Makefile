.PHONY: start

start: 
	@ cd ./docker; docker-compose up -d
	@ echo "Is up and running!"

down: 
	@ cd ./docker; docker compose down

up: 
	@ cd ./docker; docker compose up -d

