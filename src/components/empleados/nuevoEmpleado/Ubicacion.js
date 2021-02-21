import React, {Fragment, useState} from 'react'
import Provincias from "../../select/Provincias"
import Ciudades from "../../select/Ciudades"

const Ubicacion = ({setProvinciaNombre, setCiudadNombre}) => {
    const [provinciaId, setProvinciaId] = useState("")

    return (
        <Fragment>
            <h1>Ubiacion</h1>
            <label>Provincia</label>
            <Provincias setProvinciaId={setProvinciaId} setProvinciaNombre={setProvinciaNombre}/>
            <label>Ciudad</label>
            <Ciudades provinciaId={provinciaId} setCiudadNombre={setCiudadNombre}/>
        </Fragment>
    )
}

export default Ubicacion