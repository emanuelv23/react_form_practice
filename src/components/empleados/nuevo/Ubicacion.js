import React, {Fragment, useState} from 'react'
import Domicilio from "../../domicilio/Domicilio";
import Provincias from "../../select/Provincias"
import Ciudades from "../../select/Ciudades"

const Ubicacion = ({setProvinciaNombre, setCiudadNombre, domicilio, setDomicilio}) => {
    const [provinciaId, setProvinciaId] = useState("")

    const handleChange = (e) => {
        setUbicacion({
            ...ubicacion,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <Fragment>
            <h1>Ubiacion</h1>
{/*            <label>Calle</label>
            <input id="calle" type="text" name="calle" value={ubicacion.calle} onChange={handleChange}/>
            <label>Número</label>
            <input id="numero" type="text" name="numero" value={ubicacion.numero} onChange={handleChange}/>*/}
            <Domicilio domicilio={domicilio} setDomicilio={setDomicilio}/>
            <label>Provincia</label>
            <Provincias setProvinciaId={setProvinciaId} setProvinciaNombre={setProvinciaNombre}/>
            <label>Ciudad</label>
            <Ciudades provinciaId={provinciaId} setCiudadNombre={setCiudadNombre}/>
        </Fragment>
    )
}

export default Ubicacion