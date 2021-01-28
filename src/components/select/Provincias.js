import React, {useState, useEffect} from 'react';
import axios from "axios";

const Provincias = () => {
    const [provincias, setProvincias] = useState([])
    const [provinciaSeleccionada, setProvinciaSeleccionada] = useState({})

    useEffect(() => {
        const apiProvincias = async () => {
            const urlProvincias = "https://apis.datos.gob.ar/georef/api/provincias"
            const respuesta = (await axios.get(urlProvincias))

            setProvincias(respuesta.data.provincias)
        }
        apiProvincias()
    }, [])

    return (
        <select>
            {provincias.map((provincia) => (
                <option name={provincia.id} value={provincia.id}>{provincia.nombre}</option>
            ))}
        </select>
    )
}

export default Provincias