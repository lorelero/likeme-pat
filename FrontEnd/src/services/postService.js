// Reemplazar por la URL de la API
const URL_API = 'http://localhost:3000/posts';

export const getPosts = async () => {
  const response = await fetch(URL_API);
  const { result } = await response.json();
  return result;
};

export const addPost = async (post) => {
  const response = await fetch(URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  const { result } = await response.json();
  return result;
};

export const deletePost = async (id) => {
  await fetch(`${URL_API}/${id}`, {
    method: 'DELETE',
  });
};

export const likePost = async (id, updateLikes) => {
  await fetch(`${URL_API}/${id}?likes=${updateLikes}`, {
    method: 'PUT',
  });
  
};
