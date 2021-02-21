import React from "react";

const Contacto = ({contacto, setContacto}) => {
    const handleChange = (e) => {
        setContacto({
            ...contacto,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <React.Fragment>
            <h1>Contacto</h1>
            <label>Movil</label>
            <input id="movil" type="phone" name="movil" value={contacto.movil} onChange={handleChange}/>
            <label>Email</label>
            <input id="email" type="email" name="email" value={contacto.email} onChange={handleChange}/>
        </React.Fragment>
    );
}

export default Contacto;