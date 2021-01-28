import React, {Fragment, useState} from 'react'

const Ubicacion = (props) => {
    const [ubicacion, setUbicacion] = useState({
        ciudad: "",
        provincia: ""
    })

    const handleChange = (e) => {
        setUbicacion({
            ...ubicacion,
            [e.target.name]: e.target.value
        })
    }

    props.ubicacion(ubicacion)

    return (
        <Fragment>
            <label>Ciudad</label>
            <input type="text" name="ciudad" placeholder="Ciudad" value={ubicacion.ciudad} onChange={handleChange}/>
            <label>Provincia</label>
            <input type="text" name="provincia" placeholder="provincia" value={ubicacion.provincia} onChange={handleChange}/>
        </Fragment>
    )
}

export default Ubicacion