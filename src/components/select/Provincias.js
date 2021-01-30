import React, {useState, useEffect} from 'react';
import axios from "axios";

const Provincias = ({setProvinciaId, setProvinciaNombre}) => {
    const [provincias, setProvincias] = useState([])

    useEffect(() => {
        const apiProvincias = async () => {
            try {
                const urlProvincias = "https://apis.datos.gob.ar/georef/api/provincias"
                let response = await axios.get(urlProvincias)

                setProvincias(response.data.provincias);
            } catch (error) {
                if (error.response) {
                    console.log("response error: ", error.response.data);
                    console.log("response error: ", error.response.status);
                    console.log("response error: ", error.response.headers);
                } else if (error.request) {
                    console.log("request error: ", error.request);
                }

            }
        }
        apiProvincias()
    }, [])

    const nombreProvincia = (provinciaId) => {
        // let resultado = ""

        let provincia = provincias.filter(provincia => provincia.id === provinciaId)

        /*provincias.map((provincia) => {
            if (provincia.id === provinciaId) {
                resultado = provincia.nombre
            }
        })*/
        console.log("provincia:", provincia)
        //return resultado
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