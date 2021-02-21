import React, { Fragment } from "react";
import { TextField } from "@material-ui/core";

const InformacionBasica = ({ informacionBasica, setInformacionBasica }) => {
  const handleChange = (e) => {
    setInformacionBasica({
      ...informacionBasica,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <h1>Información Basica</h1>
      {/* <label>Nombre</label> */}
      {/* <input type="text" name="nombre" placeholder="Nombre" value={informacionBasica.nombre} onChange={handleChange} /> */}
      <TextField
        id="nombre"
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={informacionBasica.nombre}
        onChange={handleChange}
      />
      {/* <label>Apellido</label> */}
      <TextField
        id="apellido"
        type="text"
        name="apellido"
        placeholder="apellido"
        value={informacionBasica.apellido}
        onChange={handleChange}
      />
      {/*       <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        value={informacionBasica.apellido}
        onChange={handleChange}
      /> */}
    </Fragment>
  );
};

export default InformacionBasica;
