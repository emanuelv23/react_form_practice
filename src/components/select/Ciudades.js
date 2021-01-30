import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Ciudades = ({provinciaId, setCiudadNombre}) => {
    const [ciudades, setCiudades] = useState([])

    useEffect( () => {
        //TODO: Manejar errores en apiCiudades
        const apiCiudades = async () => {
            //TODO: Validar parametros de envío a api.
            const urlCiudades = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinciaId}&campos=id,nombre&max=100`
            const respuesta = await axios.get(urlCiudades)

            setCiudades(respuesta.data.municipios)
        }
        apiCiudades()
    }, [provinciaId])

    const handleChange = (e) => {
        ciudades.map((ciudad) => {
            if (ciudad.id === e.target.value) {
                setCiudadNombre({
                    ciudad: ciudad.nombre,
                })
            }
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