import React from "react";

const Card = ({ nombre, libro }) => {
  return (
    <div>
      <p>Hola {nombre}!</p>
      <p>Sabemos que tu libro favorito es:</p>
      <div>
        {libro}
      </div>
    </div>
  );
};

export default Card;
