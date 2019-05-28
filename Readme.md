# Testes com Queries GraphQL + e-Cattle

Nos passos abaixo, será demonstrado algumas consultas com GraphQL. O banco de dados configurado está no Mlab

## Pré-requisitos

* NodeJS 10.15.3
* Nodemon instalado no modo global

## Procedimentos

* Baixar o projeto do git e instalar os pacotes

```shell
$ git clone https://github.com/brunoacaceres/graphql-api.git
$ cd graphql-api
$ npm install
```

* Iniciando o projeto

```shell
$ npm start

> graphql-api@1.0.0 start /Users/brunocaceres/NodeJS/EMBRAPA/graphql-api
> nodemon ./index.js --exec babel-node -e js

[nodemon] 1.19.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `babel-node ./index.js`
App is running on PORT 5000
.
.
.
```

* Acessar a URL http://localhost:5000/api

### Exemplo de Queries

* Temperaturas do ar

```
{
  AirTemperatures{
    id
    value
    resource
  }
}

Resultado:

{
  "data": {
    "AirTemperatures": [
      {
        "id": "5c8eddf941c797051261f391",
        "value": 25,
        "resource": "Piquete da Pedra Santa"
      },
      {
        "id": "5ccf7fb7f956df003696a468",
        "value": 25,
        "resource": "Curral da Fazenda"
      },
      {
        "id": "5ccf8020f956df003696a46a",
        "value": 25,
        "resource": "Curral da Fazenda"
      },
      {
        "id": "5cd55dc9e4770901255b8bb9",
        "value": 30,
        "resource": "Curral da Fazenda Embrapa Campo Grande"
      },
      {
        "id": "5cd55de4e4770901255b8bba",
        "value": 28,
        "resource": "Curral da Fazenda Embrapa Campo Grande"
      }

```

* Humidades Relativa do ar

```
{
  RelativeHumidities{
    id
    value
    resource
  }
}

Resultado:

{
  "data": {
    "RelativeHumidities": [
      {
        "id": "5c8edeea0ff6a8054b6d7407",
        "value": 85,
        "resource": "Curral da Fazenda"
      }
    ]
  }
}

```

* Busca por recurso de Temperatura do ar

```

{
  ResourceAirTemperature(resource: "Curral da Fazenda Embrapa Campo Grande"){
    id
    value
    resource
  }
}

Resultado:

{
  "data": {
    "ResourceAirTemperature": [
      {
        "id": "5cd55dc9e4770901255b8bb9",
        "value": 30,
        "resource": "Curral da Fazenda Embrapa Campo Grande"
      },
      {
        "id": "5cd55de4e4770901255b8bba",
        "value": 28,
        "resource": "Curral da Fazenda Embrapa Campo Grande"
      }
    ]
  }
}

```