import React, { Fragment } from "react";

const InformacionBasica = ({ informacionBasica, setInformacionBasica }) => {
    const handleChangeIformacionBasica = (e) => {
    setInformacionBasica({
      ...informacionBasica,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <h1>Información Basica</h1>
      <label>Nombre</label>
      <input type="text" name="nombre" placeholder="Nombre" value={informacionBasica.nombre} onChange={(e) => handleChangeIformacionBasica(e)}/>
      <label>Apellido</label>
      <input type="text" name="apellido" placeholder="Apellido" value={informacionBasica.apellido} onChange={handleChangeIformacionBasica}/>
      <label>Fecha de Nacimiento</label>
        <input id="fechaNacimiento" type="date" name="fechaNacimiento" value={informacionBasica.fechaNacimiento} onChange={handleChangeIformacionBasica}/>
    </Fragment>
  );
};

export default InformacionBasica;
