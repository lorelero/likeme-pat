import pkg from 'pg';

const { Pool } = pkg;

// Base de datos y tabla que debe ser creada en PostgreSQL
// CREATE DATABASE likeme;
// CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),descripcion VARCHAR(255), likes INT);

const pool = new Pool({
    host: 'localhost',
    user: 'lore',
    password: '123456',
    database: 'likeme',
    port: 5432,
    allowExitOnIdle: true,
   });


const verPosts = async () => {
  const { rows } = await pool.query('SELECT * FROM posts');

  return rows;
};

const agregarPost = async (post) => {
  const { titulo, img, descripcion } = post

  if (!titulo?.trim() || !img?.trim() || !descripcion?.trim()) {
    throw { code: '400' };
  }

  const consulta = 'INSERT INTO posts values (DEFAULT, $1, $2, $3, $4) RETURNING *';
  const values = [titulo, img, descripcion, 0];
  const result = await pool.query(consulta, values);

  return result.rows[0];
};

const modificarPost = async (likes, id) => {

  // Si lo hiciera solo con el id seria asi:
  // cont consulta = 'UPDATE post SET likes = likes + 1 WHERE id = $1';
  // const values =[id];

  const consulta = 'UPDATE posts SET likes = $1 WHERE id = $2';
  const values = [likes, id];
  const result = await pool.query(consulta, values);

  if (result.rowCount === 0) {
    throw { code: "404" };
  }
  
  return {id, likes};
};

const eliminarPost = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);

  if (result.rowCount === 0) {
    throw { code: "404" };
  }

  return id;
};

export { verPosts, agregarPost, modificarPost, eliminarPost };
