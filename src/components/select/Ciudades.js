import React, { useState, useEffect } from "react";
import axios from "axios";
import ordenAlfabeticoAscendente from "../../utils/ordenAlfabeticoAscendente";

const Ciudades = ({ provinciaId, setCiudadNombre }) => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    if (provinciaId !== "" && provinciaId !== null) {
      const apiCiudades = async () => {
        try {
          const maximoCiudades = 1000;
          //  template string `${}`
          // const urlCiudades = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinciaId}&campos=id,nombre&max=100`;
          const urlCiudades = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinciaId}&campos=id,nombre&max=${maximoCiudades}`;
          const respuesta = await axios.get(urlCiudades);

          setCiudades(respuesta.data.municipios.sort(ordenAlfabeticoAscendente("nombre")));
        } catch (error) {
          if (error.response) {
            console.log("apiCiudades response error: ", error.response.data);
            console.log("apiCiudades response error: ", error.response.status);
            console.log("apiCiudades response error: ", error.response.headers);
          } else if (error.request) {
            console.log("apiCiudades request error: ", error.request);
          }
        }
      };
      apiCiudades();
    }
  }, [provinciaId]);

  const handleChange = (e) => {
    let ciudad = ciudades.filter((ciudad) => ciudad.id === e.target.value);
    setCiudadNombre({
      ciudad: ciudad[0].nombre,
    });
  };

  //TODO: Buscar sobre variables globales, o alguna manera mas eficiente para controlar los cambios en el id de provincia
  if (provinciaId === "02") {
    return (
        <select disabled onChange={handleChange}>
          <option selected disabled>Ciudades</option>
          {ciudades.map((ciudad) => (
              <option key={ciudad.id} value={ciudad.id}>
                {ciudad.nombre}
              </option>
          ))}
        </select>
    )
  } else {
    return (
        <select  onChange={handleChange}>
          <option selected disabled>Ciudades</option>
          {ciudades.map((ciudad) => (
            <option key={ciudad.id} value={ciudad.id}>
              {ciudad.nombre}
            </option>
          ))}
      </select>
    )
  }
};

export default Ciudades;
