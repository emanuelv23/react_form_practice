import React, {useState, useEffect} from 'react';
import axios from 'axios'

//const Ciudades = ({provinciaId, setCiudadNombre}) => {
const Ciudades = ({provinciaId}) => {
    const [ciudades, setCiudades] = useState([])

    useEffect( () => {
        const apiCiudades = async () => {
            const urlCiudades = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinciaId}&campos=id,nombre&max=100`
            const respuesta = await axios.get(urlCiudades)

            setCiudades(respuesta.data.municipios)
        }
        apiCiudades()
    }, [provinciaId])

    const nombreCiudad = (ciudadId) => {
        let resultado = "";

        ciudades.map((ciudad) => {
            if (ciudad.id === ciudadId) {
                resultado = ciudad.nombre
            }

            return resultado
        })
    }

    const handleChange = (e) => {
        /*setCiudadNombre({
            nombre: nombreCiudad(e.target.value)
        })*/
        console.log(e.target.value)
    }

    return (
        <select>
            {ciudades.map((ciudad) => (
                <option key={ciudad.id} value={ciudad.id} onChange={handleChange}>{ciudad.nombre}</option>
            ))}
        </select>
    )
}

export default Ciudades