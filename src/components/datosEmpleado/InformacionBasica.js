import React, {Fragment} from 'react'

const InformacionBasica = ({informacionBasica, setInformacionBasica}) => {
    const handleChange = (e) => {
        setInformacionBasica({
            ...informacionBasica,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Fragment>
            <label>Nombre</label>
            <input type="text" name="nombre" placeholder="Nombre" value={informacionBasica.nombre} onChange={handleChange} />
            <label>Apellido</label>
            <input type="text" name="apellido" placeholder="Apellido" value={informacionBasica.apellido} onChange={handleChange}  />
        </Fragment>
    )
}

export default InformacionBasica