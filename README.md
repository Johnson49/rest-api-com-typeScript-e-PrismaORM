# REST API com Express, typeScript e Prisma

Esta API é construída com TypeScript usado [Express](https://expressjs.com/) e [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client). È baseado em um banco de dados SQLITE.

## Começando

### 1. Clone o projeto e instale as dependências

`git clone https://github.com/Johnson49/api-com-typeScript-e-Prisma`

<h4> Instale as dependências com o npm:</h4>

```
cd api-com-typeScript-e-Prisma
npm install
```

### 2. Criando o banco de dados

> Execute o seguinte comando para criar o arquivo de banco de dados SQLite. Isso também criará as tabelas Usuário e Publicação em `prisma/`:

`npx prisma migrate dev --name init`

### 3. Inicie o servidor 
`npm run dev`

## EndPoints

> As rotas são compostas pelo endereço base (http://localhost:8000) mais o recurso que você deseja acessa.

|Método|Rota| Funcionalidade| Acesso |
|:-------:|:-----:|:------:|:------:|
|GET | /usuarios | Consulta todos os usuários existentes no banco de dados.| Público |
|GET |  /usuario/{id} | Consulta um usuário pelo seu id| Público |
|POST | /usuario/add | Cadastra um novo usuário no banco de dados. | Público |
| PUT | /usuario/atualizar/{id} | Atualiza os dados de um usuário.| Público |
| DELETE | /usuario/delete/{id} |  Apagar um usuário do banco de dados| Público |




