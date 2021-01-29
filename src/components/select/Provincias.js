import React, {useState, useEffect} from 'react';
import axios from "axios";

const Provincias = ({setProvinciaId, setProvinciaNombre}) => {
    const [provincias, setProvincias] = useState([])
    //const [idProvinciaSeleccionada, setIdProvinciaSeleccionada] = useState("")
    /*const [idProvinciaSeleccionada, setIdProvinciaSeleccionada] = useState({
        id: "",
        nombre: "",
    })*/

    useEffect(() => {
        const apiProvincias = async () => {
            const urlProvincias = "https://apis.datos.gob.ar/georef/api/provincias"
            const respuesta = await axios.get(urlProvincias)

            setProvincias(respuesta.data.provincias)
        }
        apiProvincias()
    }, [])

    const nombreProvincia = (provinciaId) => {
        let resultado = ""

        provincias.map((provincia) => {
            if (provincia.id === provinciaId) {
                resultado = provincia.nombre
            }
        })

        return resultado
    }
    const handleChange = (e) => {
        setProvinciaId(e.target.value);
        setProvinciaNombre({
            nombre: nombreProvincia(e.target.value)
        });
    }

    return (
        <select onChange={handleChange}>
            {provincias.map((provincia) => (
                <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>
            ))}
        </select>
    )
}

export default Provincias