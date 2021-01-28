import React, {Fragment, useState} from 'react'

const InformacionBasica = (props) => {
    const [informacionBasica, setInformacionBasica] = useState({
        nombre: "",
        apellido: ""
    });

    const handleChange = (e) => {
        setInformacionBasica({
            ...informacionBasica,
            [e.target.name]: e.target.value,
        });
    }

    props.informacionBasica(informacionBasica)

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