import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Ciudades = ({provinciaId, setCiudadNombre}) => {
    const [ciudades, setCiudades] = useState([])

    useEffect( () => {
        if (provinciaId !== "" && provinciaId !== null) {
            const apiCiudades = async () => {
                try {
                    //TODO: Validar parametros de envío a api.
                    const urlCiudades = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinciaId}&campos=id,nombre&max=100`
                    const respuesta = await axios.get(urlCiudades)

                    setCiudades(respuesta.data.municipios)
                } catch (error) {
                    if (error.response) {
                        console.log("apiCiudades response error: ", error.response.data);
                        console.log("apiCiudades response error: ", error.response.status);
                        console.log("apiCiudades response error: ", error.response.headers);
                    } else if (error.request) {
                        console.log("apiCiudades request error: ", error.request);
                    }
                }
            }
            apiCiudades()
        }


    }, [provinciaId])

    const handleChange = (e) => {
        let ciudad = ciudades.filter(ciudad => ciudad.id === e.target.value)
        setCiudadNombre({
            ciudad: ciudad[0].nombre,
        })
    }
    //TODO: Deshabilitar select cuando provincia seleccionada sea Ciudad Autónoma de Buenos Aires (buscar ProvinciaId)
    return (
        <select onChange={handleChange}>
            {ciudades.map((ciudad) => (
                <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>
            ))}
        </select>
    )
}

export default Ciudades