import React from 'react';

const PostScheduler = () => {
  return (
    <div>
      <h2>Programar Publicaciones</h2>
      <form>
        <input type="text" placeholder="Contenido de la publicación" />
        <input type="datetime-local" />
        <button type="submit">Programar</button>
      </form>
    </div>
  );
};

export default PostScheduler;
