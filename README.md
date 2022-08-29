# prisma-exercise

comandos para iniciar o Prisma

`npm install prisma --save-dev` instala dependecias

`npx prisma init --datasource-provider mysql` inicia o schema

`npx prisma migrate dev` inicia as migrations

`docker container run -d --name=LocalMySQLDB -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password mysql`
comando para rodar o mysql localmente caso necessário, porta 3306

`npm run dev` comando para rodar localmente a aplicação na porta 3001