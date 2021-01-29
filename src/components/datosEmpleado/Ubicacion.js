import React, {Fragment, useState} from 'react'
import Provincias from "../select/Provincias"
import Ciudades from "../select/Ciudades"

const Ubicacion = ({ubicacion, setUbicacion, setProvinciaNombre}) => {
    const [provinciaId, setProvinciaId] = useState("")

    const handleChange = (e) => {
        setUbicacion({
            ...ubicacion,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Fragment>
            <h1>Ubiacion</h1>
            <label>Provincia</label>
            <Provincias setProvinciaId={setProvinciaId} setProvinciaNombre={setProvinciaNombre}/>
            <label>Ciudad</label>
            <Ciudades provinciaId={provinciaId} />
        </Fragment>
    )
}

export default Ubicacion