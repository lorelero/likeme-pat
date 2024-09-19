# DESAFIO - APP LIKE ME PARTE II

En este desafío se crea un servidor con express que disponibilice las rutas GET, POST, PUT y DELETE, utilizando consultas
en una base de datos PostgreSQL con el paquete pg.

## Backend - like me - parte II

1. Requerimientos:

Ocupa las siguientes instrucciones SQL para crear una base de datos likeme y una tabla posts en PostgreSQL.

```bash
CREATE DATABASE likeme;
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),
descripcion VARCHAR(255), likes INT);
```

Comando para instalacion de dependencias.

```bash
npm i
```

2. Configuraciones:

Conexion con pg con la base de datos ./database/consultas.js

```js
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "likeme",
  port: 5432,
  allowExitOnIdle: true,
});
```

Puerto del servidor ./index.js

```js
const PORT = process.env.PORT || 3000;
```

3. Uso:

Se pueden utilizar los siguientes comandos.

```bash
npm run start
```

```bash
npm run dev
```

## Frontend - like me - parte II

1. Requerimientos:

Comando para instalacion de dependencias.

```bash
npm i
```

2. Configuraciones:

En este archivo `src\services\postService.js` tu puedes cambiar la API URL

```js
const URL_API = "http://localhost:3000/posts";
```

3. Uso:

Se pueden utilizar los siguientes comandos.

```bash
npm run dev
```
