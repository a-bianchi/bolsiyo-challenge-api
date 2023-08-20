.PHONY: start

start: 
	@ chmod 644 init.sql
	@ docker-compose up -d
	@ echo "Is up and running!"

down: 
	@ docker compose down

up: 
	@ docker compose up -d

