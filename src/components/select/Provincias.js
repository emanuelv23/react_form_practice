import React, {useState, useEffect} from 'react';
import axios from "axios";
import ordenAlfabeticoAscendente from "../../utils/ordenAlfabeticoAscendente";

const Provincias = ({setProvinciaId, setProvinciaNombre}) => {
    const [provincias, setProvincias] = useState([])

    useEffect(() => {
        const apiProvincias = async () => {
            try {
                const urlProvincias = "https://apis.datos.gob.ar/georef/api/provincias"
                const respuesta = await axios.get(urlProvincias);

                setProvincias(respuesta.data.provincias.sort(ordenAlfabeticoAscendente("nombre")));
            } catch (error) {
                if (error.response) {
                    console.log("apiProvincias response error: ", error.response.data);
                    console.log("apiProvincias response error: ", error.response.status);
                    console.log("apiProvincias response error: ", error.response.headers);
                } else if (error.request) {
                    console.log("apiProvincias request error: ", error.request);
                }
            }
        }
        apiProvincias()
    }, [])

    const nombreProvincia = (provinciaId) => {
        let provincia = provincias.filter(provincia => provincia.id === provinciaId)
        return provincia[0].nombre
    }
    const handleChange = (e) => {
        setProvinciaId(e.target.value);
        setProvinciaNombre({
            provincia: nombreProvincia(e.target.value)
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