# Node Load Balancer

Example ![demo](https://www.youtube.com/watch?v=6CGq5VxmIqY) implementation load balancer using `nginx` with `round robin` strategy.

## Commands

```makefile
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
```

## Without Dockerfile

```yaml
  service-b:
    container_name: service-a
    image: node:22-alpine
    restart: always
    command: node .
    healthcheck:
      test: env | grep $HOME
      timeout: 15s
      interval: 5s
    environment:
      - PORT=4001
    expose:
      - 4001
    networks:
      - node-lb-networks
    volumes:
      - ./service-a:/usr/src/app
      - /usr/src/app/node_modules
```