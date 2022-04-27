# Desafio Full Cycle Nginx / Node / MySQL

Criada aplicação em node e express a qual sorteia um nome de uma lista (array) e insere em uma tabela de banco de dados.

Depois lista os nomes de pessoas já inseridos anteriormente a cada refresh de página.

Para executar a aplicação, basta somente executar o "docker-compose up -d".

## Construção das imagens utilizadas

### Build da imagem do node:

```
cd node
docker build -t vernerb/node-fullcycle .
docker push vernerb/node-fullcycle
cd ..
```

### Build da imagem do nginx:

```
cd nginx
docker build -t vernerb/nginx-fullcycle .
docker push vernerb/nginx-fullcycle
cd ..
```

## Execução da aplicação:

```
docker-compose up -d
```

### Para acompanhar a subida da aplicação:

```
docker logs nginx
```

### Para validar o resultado:

```
wget http://localhost:8080 
```
