import React, {Fragment} from 'react'

const Ubicacion = ({ubicacion, setUbicacion}) => {
    const handleChange = (e) => {
        setUbicacion({
            ...ubicacion,
            [e.target.name]: e.target.value
        })
    }

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