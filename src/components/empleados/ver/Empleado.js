import React from "react";

const empleado = ({ empleado }) => {
  const [apellido, nombre, provincia, pais] = empleado;
  return (
    <tr>
      <td>{apellido}</td>
      <td>{nombre}</td>
      <td>{provincia}</td>
      <td>{pais}</td>
    </tr>
  );
};

export default empleado;
