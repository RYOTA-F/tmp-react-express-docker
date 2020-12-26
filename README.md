## Install

```
git clone https://github.com/RyotaFujishima/vue-express-docker.git
```

## Env Environment Variable

- /.env
- /express/models/.env

## Build

```
cd vue-express-docker
docker-compose build
```

## NodeModules Setup

```
docker-compose run --rm vue sh -c 'yarn install'
docker-compose run --rm server sh -c 'yarn install'
```

## Start

```
docker-compose up -d
```

## Stop

```
docker-compose stop
```
