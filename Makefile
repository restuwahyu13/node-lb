install:
	@cd service-a; npm install; cd ..
	@cd service-b; npm install; cd ..
	@cd service-c; npm install; cd ..

build:
	docker-compose up -d --remove-orphans --no-deps --force-recreate --build

up:
	docker-compose up -d --remove-orphans --no-deps

down:
	docker-compose down